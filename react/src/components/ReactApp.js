'use strict';

var React = require('react/addons');
var CommentBox = require('components/CommentBox/CommentBox');

// CSS
require('normalize.css');
require('styles/main.css');

var imageURL = require('../images/yeoman.png');

var ReactApp = React.createClass({
  render: function() {
    return (
        <CommentBox url="comments.json" pollInterval={2000}/>
    );
  }
});

React.render(
    <ReactApp/>,
    document.getElementById('content')
);

module.exports = ReactApp;
