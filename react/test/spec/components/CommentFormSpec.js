'use strict';

describe('CommentForm', function () {
  var React = require('react/addons');
  var TestUtils = require('react/lib/ReactTestUtils');
  var CommentForm, component, CommentBox;

  beforeEach(function () {
    CommentForm = require('components/CommentForm/CommentForm.js');
    CommentBox =  {
      handleCommentSubmit: function(){}
    }
    spyOn(CommentBox, 'handleCommentSubmit');
  });

  it('should create a new instance of CommentForm', function () {
    component = React.createElement(CommentForm);
    expect(component).toBeDefined();
  });

  it('should submit the form when user enters msg and author', function (){
    var root  = TestUtils.renderIntoDocument(<CommentForm onCommentSubmit={CommentBox.handleCommentSubmit}/>)
    var form = TestUtils.findRenderedDOMComponentWithTag(root, 'form');
    root.refs.author.getDOMNode().value = 'Santiago';
    root.refs.msg.getDOMNode().value = 'Msg 1';
    TestUtils.Simulate.submit(form);
    expect(CommentBox.handleCommentSubmit).toHaveBeenCalledWith({ author: 'Santiago', msg: 'Msg 1'});
  });

  it('should not submit the form if msg or author fileds are empty', function (){
    var root  = TestUtils.renderIntoDocument(<CommentForm onCommentSubmit={CommentBox.handleCommentSubmit}/>)
    var form = TestUtils.findRenderedDOMComponentWithTag(root, 'form');
    TestUtils.Simulate.submit(form);
    expect(CommentBox.handleCommentSubmit).not.toHaveBeenCalled();

  });

  it('should clear all inputs after submitting the form', function(){
    var root  = TestUtils.renderIntoDocument(<CommentForm onCommentSubmit={CommentBox.handleCommentSubmit}/>)
    var form = TestUtils.findRenderedDOMComponentWithTag(root, 'form');
    root.refs.author.getDOMNode().value = 'Pablo';
    root.refs.msg.getDOMNode().value = 'Msg 2';
    TestUtils.Simulate.submit(form);
    expect(root.refs.author.getDOMNode().value).toBe('');
    expect(root.refs.msg.getDOMNode().value).toBe('');
  });

});
