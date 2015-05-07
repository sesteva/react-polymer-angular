'use strict';

ddescribe('Comment', function () {
  var React = require('react/addons');
  var TestUtils = require('react/lib/ReactTestUtils');
  var Comment;

  beforeEach(function() {
    Comment = require('components/Comment/Comment.js');
  });

  it('should create a new instance of Comment', function () {
    var component = React.createElement(Comment);
    expect(component).toBeDefined();
  });

  it('should render the author', function (){
    var component = TestUtils.renderIntoDocument(<Comment author="Santiago">hola</Comment>);
    expect(component.refs.author.props.children).toBe('Santiago');
  });

  it('should render the msg', function (){
    var component = TestUtils.renderIntoDocument(<Comment>hola</Comment>);
    expect(component.refs.msg.props.children).toBe('hola');
  });

});
