'use strict';

describe('Directive: commentbox', function () {

  // load the directive's module
  beforeEach(module('commentBox'));

  var element, scope, httpBackend;

  beforeEach(inject(function ($rootScope, $compile, $httpBackend) {
    httpBackend = $httpBackend;
    httpBackend.when('GET', 'http://localhost:2403/comments/').respond({author: 'Santiago', msg: 'Msg 1', id:1});
    scope = $rootScope.$new();
    element = angular.element('<comment-box url="http://localhost:2403/comments/" poll-interval="10000"></comment-box>');
    element = $compile(element)(scope);

  }));

  describe('once it is rendered', function(){

    it('should make an http request based on passed url', function (){
      httpBackend.expectGET('http://localhost:2403/comments/');
      scope.$digest();
      httpBackend.flush();
    });

    it('should set state', function(){
      scope.$digest();
      httpBackend.flush();
      var isolatedScope = element.isolateScope();
      expect(isolatedScope.data).toEqual( { author : 'Santiago', msg : 'Msg 1', id : 1 })
    });

    it('should render a CommentList', function(){
      expect(element.find('comment-list')).toBeDefined();
    });

    it('should render a CommentForm', function(){
      expect(element.find('comment-form')).toBeDefined();
    });

  });
});
