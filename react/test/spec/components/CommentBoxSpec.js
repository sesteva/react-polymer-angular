'use strict';

describe('CommentBox', function () {
  var React = require('react/addons');
  var TestUtils = require('react/lib/ReactTestUtils');
  var CommentBox, request, component, CommentList, CommentForm;

  beforeEach(function () {
    jasmine.Ajax.install();
    CommentBox = require('components/CommentBox/CommentBox.js');
    CommentList = require('components/CommentList/CommentList.js');
    CommentForm = require('components/CommentForm/CommentForm.js');
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
    if (component && component.isMounted()) {
      React.unmountComponentAtNode(component.getDOMNode());
    }
  });

  describe('once it is rendered', function(){

    beforeEach(function(){
      component = TestUtils.renderIntoDocument(<CommentBox url="http://localhost:2403/comments/" pollInterval={2000}/>);
      request = jasmine.Ajax.requests.mostRecent();
      request.respondWith({
        status: 200,
        responseText: "[{\"author\":\"Santiago Esteva\", \"msg\": \"Msg1\", \"id\":1}]"
      });
    })

    it('should make an http request based on passed url', function (){
      expect(request.method).toBe('GET');
      expect(request.url).toMatch('/comments');
    });

    it('should set state', function(){
      expect(component.state.data).toEqual( [ { author : 'Santiago Esteva', msg : 'Msg1', id : 1 } ])
    });

    it('should render a CommentList', function(){
      var list = TestUtils.findRenderedComponentWithType(component, CommentList);
      expect(list).toBeDefined();
    });

    it('should render a CommentForm', function(){
      var form = TestUtils.findRenderedComponentWithType(component, CommentForm);
      expect(form).toBeDefined();
    });

  });





});
