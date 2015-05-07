'use strict';

var React = require('react/addons');
var CommentModel = require('components/Comment/Comment');

require('./CommentList.css');

/*

 ## Example

 <CommentList data={this.state.data}/>

 */

var CommentList = React.createClass({

    /*
      The data contains the array of comments

      @attribute data
      @type Array
    */

    render: function() {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <CommentModel author={comment.author} key={comment.id}>
                    {comment.msg}
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

