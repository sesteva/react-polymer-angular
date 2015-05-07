'use strict';

describe('ReactApp', function () {
  var React = require('react/addons');
  var ReactApp, component;

  beforeEach(function () {
    ReactApp = require('components/ReactApp.js');
  });

  afterEach(function() {
    if (component && component.isMounted()) {
      React.unmountComponentAtNode(component.getDOMNode());
    }
  });

});
