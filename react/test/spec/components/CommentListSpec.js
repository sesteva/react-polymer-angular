'use strict';

describe('CommentList', function () {
  var React = require('react/addons');
  var TestUtils = require('react/lib/ReactTestUtils');
  var CommentList, CommentModel, component;

  beforeEach(function () {
    CommentList = require('components/CommentList/CommentList.js');
    CommentModel = require('components/Comment/Comment.js');
  });

  afterEach(function() {
    if (component && component.isMounted()) {
      React.unmountComponentAtNode(component.getDOMNode());
    }
  });

  it('should render the comments', function (){
    var comments = [
      {'author': 'Santiago', 'msg': 'Msg 1', id: 1},
      {'author': 'Pablo', 'msg': 'Msg 2', id: 2}
    ];
    component = TestUtils.renderIntoDocument(<CommentList data={comments}/>);
    var result = TestUtils.scryRenderedComponentsWithType(component, CommentModel);
    expect(result.length).toBe(2);
  });

  it('should not render any comment if the data is empty', function (){
    var comments = [];
    component = TestUtils.renderIntoDocument(<CommentList data={comments}/>);
    var result = TestUtils.scryRenderedComponentsWithType(component, CommentModel);
    expect(result.length).toBe(0);
  });

  it('should render  - No Comments yet - msg if the data is empty', function (){
    var comments = [];
    component = TestUtils.renderIntoDocument(<CommentList data={comments}/>);
    var msg = TestUtils.findRenderedDOMComponentWithClass(component, 'commentList');
    expect(msg.getDOMNode().textContent).toBe('No comments yet');
  });

});
