'use strict';

describe('CommentBox', function () {
  var React = require('react/addons');
  var CommentBox, component;

  beforeEach(function () {
    CommentBox = require('components/CommentBox/CommentBox.js');
    component = React.createElement(CommentBox);
  });

  it('should create a new instance of CommentBox', function () {
    expect(component).toBeDefined();
  });
});
