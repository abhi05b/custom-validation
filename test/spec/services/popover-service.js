'use strict';

describe('Service: popoverService', function () {

  // load the service's module
  beforeEach(module('customValidationApp'));

  // instantiate service
  var popoverService;
  beforeEach(inject(function (_popoverService_) {
    popoverService = _popoverService_;
  }));

  it('should do something', function () {
    expect(!!popoverService).toBe(true);
  });

});
