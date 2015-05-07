'use strict';

var React = require('react/addons');

require('./Comment.css');

/*

 ## Example

 <CommentModel author={comment.author} key={comment.id}>
    {comment.msg}
 </CommentModel>

 */

var CommentModel = React.createClass({

    /*
      The author of the comment

      @attribute author
      @type String
    */

    /*
      The msg of the comment

      @children msg
      @type String
    */

    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor" ref="author">
                    {this.props.author}
                </h2>
                <span ref="msg">{this.props.children}</span>
            </div>
        );
    }
});

module.exports = CommentModel;

