'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:commentForm
 * @description
 * # commentForm
 */
angular.module('commentForm', [])
  .directive('commentForm', function () {
    return {
      template: '<form class="commentForm" name="form">' +
                  '<input type="text" class="input-style" placeholder="Your name" ng-model="comment.author" name="author"/>' +
                  '<input type="text" class="input-style" placeholder="Say something..." ng-model="comment.message" name="message"/>' +
                  '<input type="submit" class="btn-style" value="Post" ng-click="submitComment()"/>' +
                '</form>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.comment = {};
        scope.submitComment = function(){
          var comment = scope.comment;
          if (!comment.message || !comment.author) {
            return;
          }
          scope.$emit('submitted', comment);
          scope.comment = {};
        }
      }
    };
  });
