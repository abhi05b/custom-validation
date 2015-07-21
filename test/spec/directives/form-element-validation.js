'use strict';

describe('Directive: formElementValidation', function () {

  // load the directive's module
  beforeEach(module('customValidationApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<form-element-validation></form-element-validation>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the formElementValidation directive');
  }));
});
