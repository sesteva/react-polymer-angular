'use strict';

var React = require('react/addons');
var $ = require('jquery');
var CommentList = require('components/CommentList/CommentList');
var CommentForm = require('components/CommentForm/CommentForm');

require('./CommentBox.css');

/*

 ## Example

 <CommentBox url="http://localhost:2403/comments/" pollInterval={2000}/>

 */

var CommentBox = React.createClass({

  /*
     The url target of the request

     @attribute data
     @type String
   */

  /*
     The pollInterval determines the frequency we request for comments

     @attribute pollInternal
     @type int
   */

  loadCommentsFromServer: function () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function (comment) {
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function () {
    return {data: []};
  },
  componentDidMount: function () {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);

  },
  render: function () {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }
});

module.exports = CommentBox;
