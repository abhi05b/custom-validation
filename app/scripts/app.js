'use strict';

/**
 * @ngdoc overview
 * @name customValidationApp
 * @description
 * # customValidationApp
 *
 * Main module of the application.
 */
angular
  .module('customValidationApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ngMessages'
  ])
  .directive('formElementValidation', ['$compile', '$timeout', '$interpolate', 'popoverService', function ($compile,$timeout,$interpolate,popoverService) {
    return {
      template: '<div form-popover type="redPopover" trigger="manual"><div class="_popoverControl redPopover"><ng-transclude></ng-transclude></div></div>',
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: true,
      controller: function (){
      },
      require: ['^formValidation','^form'],
      link: function postLink(scope, element, attrs, ctrl, transclude) {
         var formValidationCtrl = ctrl[0],
            formCtrl = ctrl[1],
            $ngModelElements = element.find('[ng-model]'),
            $popoverElements = element.find('div._popoverControl'),
            formObj = scope.$eval(formCtrl.$name) || scope.$parent.$eval(formCtrl.$name) || scope.$parent.$parent.$eval(formCtrl.$name),
            inputFieldName = $interpolate(element.find('[name]').first().attr('name') || '')(scope), //interpolating for dyanamic name
            toggleErrorBorder = function(element, state){
              var ele = element.find(':input');
              if($(ele).attr('type') === 'radio')
              {
                $(ele).parent('label').toggleClass('error-border', state );
              }
              else
              {
                ele.toggleClass('error-border', state );
              }
            },
            // isDirty = function(){
            //     return $popoverElements.find('.ng-dirty').length > 0 ? true : false;
            // },
            // isTouched  = function(){
            //     return $popoverElements.find('.ng-touched').length > 0 ? true : false;
            // },
            isFocussed = function(){
              var ele = element.find(':input');
              if($(ele[0]).hasClass('hasDatepicker') && $.datepicker._lastInput === ele[0])
              {
                  return $popoverElements.find(document.activeElement).length > 0 || $.datepicker._datepickerShowing;
              }
              else 
              {
                  return $popoverElements.find(document.activeElement).length > 0;
              }
            },
            //Return opposite position of datepicker
            popoverPositionIfDatepicker = function(){
               var dpTop  = $.datepicker.dpDiv[0].offsetTop,
                  eleTop = element.offset().top;
               if( (dpTop - eleTop) > 0)
               {
                  return 'top';
               }
               else
               {
                  return 'bottom';
               }
            },
            //Initialize popover again in opposite position if datepicker is opened
            initPopoverIfDatepicker = function(){
               var position = popoverPositionIfDatepicker();
               popoverService.destroyPopover(element);
               popoverService.initPopover(scope,element,attrs, { placement : position});
            };

        
         //watch form element $error object
         scope.$watch(function(){
           if(angular.isUndefined(formObj) || angular.isUndefined(formObj[inputFieldName])){
             return undefined;
           }else{
               return angular.toJson(formObj[inputFieldName].$error);
           }
         },
         function(errorObj){
            //if form element has error
            if(!angular.isUndefined(errorObj) && errorObj !== '{}'){
               if(formObj[inputFieldName].isVisited || formValidationCtrl.isFormSubmit){
                  toggleErrorBorder($popoverElements,true);
                  //check if element is focussed
                  if (isFocussed()){
                     $timeout(function(){$popoverElements.popover('show');},0);
                  }
            }
            }else{
               toggleErrorBorder($popoverElements,false);
                   $timeout(function(){$popoverElements.popover('hide');},0);
            }
         });

         $popoverElements.bind('focusout',function(){
            $timeout(function(){
               if (!isFocussed()){ // user has clicked outside element
                  if(formObj[inputFieldName])
                  {
                    formObj[inputFieldName].isVisited = true;
                    toggleErrorBorder($popoverElements,formObj[inputFieldName].$invalid);
                  }
                  $popoverElements.popover('hide');
               }
            },10);
         }).bind('focusin',function(){
            $timeout(function(){
               if(formObj[inputFieldName].$invalid && (formObj[inputFieldName].isVisited || formValidationCtrl.isFormSubmit)){
                  if($.datepicker._datepickerShowing){
                        initPopoverIfDatepicker();
                  }
                  
                  $popoverElements.popover('show');
               }
            },20);
         });
		 
		 if(attrs.isEager){
        	 formObj[inputFieldName].isVisited = true;
         }
		  transclude(scope.$parent, function(clone, scope) {
			
			element.find('._popoverControl').html(clone);
		  });
      }
   };
}])
.directive('formPopover', ['popoverService', function (popoverService) {
        return {
            link: function(scope, element, attrs) {
			   attrs.$observe('trigger', function() {
            	   popoverService.destroyPopover(element);
            	   popoverService.initPopover(scope, element, attrs);
               });
            }
        };
    }])
	.directive('formValidation', ['$rootScope', function ($rootScope) {
  return {
    require: ['formValidation'],
    controller: function(){
      this.isFormSubmit = false;
    },
    link: function(scope, element, attrs,ctrl) {
      var formValidationCtrl = ctrl[0];
      var onSubmit = function(submitEvent){
          formValidationCtrl.isFormSubmit = true;
          var $popoverElements = element.find('div._popoverControl');
        var isFirstInvalidDiv = true;
        var isFormInvalid = false;
        $($popoverElements).each(function(){
          var $invalidInputElements = $(this).find('.ng-invalid');
          if($invalidInputElements.length>0){
            isFormInvalid = true;
            $(this).find(':input').addClass('error-border');
              if(isFirstInvalidDiv){
                var multiSelect = $invalidInputElements.first().attr('hc-multi-select');
                if (typeof multiSelect !== typeof undefined && multiSelect !== false) {
                  $invalidInputElements.first().next().find('button').focus();
                }else{
                  $(this).find(':focusable').first().focus();
                }
                
                $rootScope.$broadcast('onSubmitForTab',$invalidInputElements);
                isFirstInvalidDiv = false;
              }
          }
        });
        if(typeof submitEvent !== 'undefined'){
          if(isFormInvalid){
              var hcFormSubmitVal = attrs.hcFormSubmit;
              if(hcFormSubmitVal){
                scope[hcFormSubmitVal] = false;
              }
              return false;
          }else{
            return true;
          } 
        }
      };
      
     
      scope.$on('onSubmit', function() {
        onSubmit();
      });
      
    element.submit(function(event){
        if(onSubmit(event)){
          //this.submit();
          return true;
        }
        return false;
      });
    }
  };
}])
 .service('popoverService', function () {
    	this.initPopover = function(scope, element, attrs, options) {
      	 	var $popoverControl = element.find('._popoverControl'),
              	$popoverBody = element.find('._popoverContent'),
              	type = attrs.type || '',
              	defaultOptions = {
             		html: true,
             		content: function(){return $popoverBody.html();},
             		placement: attrs.placement || 'bottom',
             		trigger: attrs.trigger || 'focus',
             		animation: false,
             		container: 'body',
             		template: '<div class="popover '+ type +'" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
              	},
              	_options = angular.extend({}, defaultOptions, options);

          	$popoverControl.popover(_options);
     	};

     	this.destroyPopover = function(element){
            var $popoverElement = element.find('div._popoverControl');
            $popoverElement.popover('destroy');
     	};
		this.destroyAll = function(){
		  $.each($('div.popover'),function(){
		    $(this).popover('destroy');
		  });
		};
});

