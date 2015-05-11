'use strict';

describe('Directive: comment', function () {

  // load the directive's module
  beforeEach(module('commentList'));

  var element, scope, compile;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    compile = $compile;
  }));

  it('should render the comments', function (){
    var comments = [
      {'author': 'Santiago', 'msg': 'Msg 1', id: 1},
      {'author': 'Pablo', 'msg': 'Msg 2', id: 2}
    ];
    scope.comments = comments;
    element = angular.element('<comment-list comments="comments"></comment-list>');
    element = compile(element)(scope);
    scope.$digest();
    expect(element.find('comment-model').length).toBe(2);
  });

  it('should not render any comment if the data is empty', function (){
    var comments = [];
    scope.comments = comments;
    element = angular.element('<comment-list comments="comments"></comment-list>');
    element = compile(element)(scope);
    scope.$digest();
    expect(element.find('comment-model').length).toBe(0);
  });

  it('should render  - No Comments yet - msg if the data is empty', function (){
    var comments = [];
    scope.comments = comments;
    element = angular.element('<comment-list comments="comments"></comment-list>');
    element = compile(element)(scope);
    scope.$digest();
    expect(element.find('span').text()).toBe('No comments yet');
  });
});
