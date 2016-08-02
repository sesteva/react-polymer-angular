'use strict';

describe('Directive: comment', function () {

  // load the directive's module
  beforeEach(module('comment'));

  var element, scope, elm;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<comment-model author="Santiago"><div class="commentMessage"><span class="msg">hola</span></div><div class="commentPostedAgo"><span class="postedSpan">Posted</span><span class="timeLapseSpan"> an hour ago</span></div></comment-model>');
    elm = element[0];    
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should render the author', function (){
    expect(element.find('h2').html()).toBe('Santiago');
  });
  it('should render the message', function (){
    expect(elm.querySelector('.msg').innerHTML).toBe('hola');
  });
  it('should render the posted', function (){
    expect(elm.querySelector('.postedSpan').innerHTML).toBe('Posted');
  });
  it('should render the time lapse', function (){
    expect(elm.querySelector('.timeLapseSpan').innerHTML).toBe(' an hour ago');
  });
});
