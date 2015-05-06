'use strict';

describe('CommentForm', function () {
  var React = require('react/addons');
  var CommentForm, component;

  beforeEach(function () {
    CommentForm = require('components/CommentForm.js');
    component = React.createElement(CommentForm);
  });

  it('should create a new instance of CommentForm', function () {
    expect(component).toBeDefined();
  });
});
