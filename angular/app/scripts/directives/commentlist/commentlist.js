'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:commentList
 * @description
 * # commentList
 */
angular.module('commentList', ['comment'])
  .directive('commentList', function () {
    return {
      template: '<div class="commentList">' +
                  '<comment-model ng-repeat="comment in comments" author="{{comment.author}}">' +
                    '<div class="commentMessage"><span class="msg">{{comment.message}}</span></div>' +
                    '<div class="commentPostedAgo align-right">'+
                    '<span class="postedSpan" ng-show="comment.formattedDate != null">Posted </span>' +
                    '<span class="timeLapseSpan">{{comment.formattedDate}}</span>' +
                    '</div>' +
                  '</comment-model>' +
                  '<span class="no-comments" ng-if="comments.length < 1">No comments yet</span>' +
                '</div>',
      restrict: 'E',
      scope: {
        comments: '='
      },
      link: function postLink(scope, element, attrs) {  
      }
    };
  });
