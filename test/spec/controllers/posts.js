'use strict';

describe('Controller: PostsCtrl', function () {

  // load the controller's module
  beforeEach(module('flapperNewsApp'));

  var PostsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostsCtrl = $controller('PostsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PostsCtrl.awesomeThings.length).toBe(3);
  });
});
