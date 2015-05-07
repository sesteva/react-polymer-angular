'use strict';

describe('Comment', function () {
  var React = require('react/addons');
  var TestUtils = require('react/lib/ReactTestUtils');
  var Comment, component;

  beforeEach(function() {
    Comment = require('components/Comment/Comment.js');
  });

  afterEach(function() {
    if (component && component.isMounted()) {
      React.unmountComponentAtNode(component.getDOMNode());
    }
  });

  it('should render the author', function (){
    component = TestUtils.renderIntoDocument(<Comment author="Santiago">hola</Comment>);
    expect(component.refs.author.props.children).toBe('Santiago');
  });

  it('should render the msg', function (){
    component = TestUtils.renderIntoDocument(<Comment>hola</Comment>);
    expect(component.refs.msg.props.children).toBe('hola');
  });

});
