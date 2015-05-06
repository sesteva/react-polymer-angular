'use strict';

var React = require('react/addons');
var CommentModel = React.createFactory(require('./CommentModel'));

require('styles/CommentList.css');

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <CommentModel author={comment.author}>
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

