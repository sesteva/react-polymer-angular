'use strict';

describe('Directive: comment', function () {

  // load the directive's module of commentList
  beforeEach(module('commentList'));
  var spyEvent;
  var element, scope, compile, elm;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    compile = $compile;
  }));
  it('should render the comments', function (){
    var comments = [
      {'author': 'Santiago', 'message': 'Msg 1', dt: "1470124210792", id: 1},
      {'author': 'Pablo', 'message': 'Msg 2', dt: "1470124210792", id: 2}
    ];
    scope.comments = comments;
    element = angular.element('<comment-list comments="comments"></comment-list>');
    elm = element[0];
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

  it('should render  - No Comments yet - message if the data is empty', function (done){
    var comments = [];
    scope.comments = comments;
    element = angular.element('<comment-list comments="comments"></comment-list>');
    element = compile(element)(scope);
    scope.$digest();
    
    setTimeout(function () {
      spyOn(scope.comments, 'find').and.returnValue({
        fetch: function () { return {}; }
      });
      expect(element.find('span').text()).toBe('No comments yet');
    done();
    }, 10);
  });


});
