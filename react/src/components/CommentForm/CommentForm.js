'use strict';

var React = require('react/addons');


require('./CommentForm.css');

/*

 ## Example

 <CommentForm onCommentSubmit={this.handleCommentSubmit}/>

 */


var CommentForm = React.createClass({

    /*
      The function to execute when the form is submitted

      @attribute onCommentSubmit
      @type function
    */


    handleSubmit: function(e) {
        e.preventDefault();
        var author = React.findDOMNode(this.refs.author).value.trim();
        var msg = React.findDOMNode(this.refs.msg).value.trim();
        if (!msg || !author) {
            return;
        }
        this.props.onCommentSubmit({author: author, msg: msg});
        React.findDOMNode(this.refs.author).value = '';
        React.findDOMNode(this.refs.msg).value = '';
        return;
    },
    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" ref="author" />
                <input type="text" placeholder="Say something..." ref="msg" />
                <input type="submit" value="Post" />
            </form>
        );
    }
});

module.exports = CommentForm;

