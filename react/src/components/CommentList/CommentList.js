'use strict';

var React = require('react/addons');
var CommentModel = require('components/Comment/Comment');

require('./CommentList.css');

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <CommentModel author={comment.author} key={comment.id}>
                    {comment.text}
                </CommentModel>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});


module.exports = CommentList;

