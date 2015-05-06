'use strict';

describe('Comment', function () {
  var React = require('react/addons');
  var Comment, component;

  beforeEach(function () {
    Comment = require('components/CommentModel.js');
    component = React.createElement(Comment);
  });

  it('should create a new instance of Comment', function () {
    expect(component).toBeDefined();
  });
});
