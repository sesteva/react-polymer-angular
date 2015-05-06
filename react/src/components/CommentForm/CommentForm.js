'use strict';

var React = require('react/addons');


require('./CommentForm.css');

var CommentForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var author = React.findDOMNode(this.refs.author).value.trim();
        var msg = React.findDOMNode(this.refs.msg).value.trim();
        if (!msg || !author) {
            return;
        }
        this.props.onCommentSubmit({author: author, msg: msg});
        // TODO: send request to the server
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

