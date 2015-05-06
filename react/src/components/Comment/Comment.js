'use strict';

var React = require('react/addons');

require('./Comment.css');

var CommentModel = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span>{this.props.children}</span>
            </div>
        );
    }
});

module.exports = CommentModel;

