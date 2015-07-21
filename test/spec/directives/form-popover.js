'use strict';

describe('Directive: formPopover', function () {

  // load the directive's module
  beforeEach(module('customValidationApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<form-popover></form-popover>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the formPopover directive');
  }));
});
