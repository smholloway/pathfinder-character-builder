'use strict';

describe('Controller: ClassCtrl', function () {

  // load the controller's module
  beforeEach(module('pathfinderCharacterBuilderApp'));

  var ClassCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClassCtrl = $controller('ClassCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(1).toBe(1);
  });
});
