'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:comment
 * @description
 * # comment
 */
angular.module('comment', [])
  .directive('commentModel', function () {
    return {
      template: '<div className="comment">' +
                  '<h2 className="commentAuthor">' +
                      '{{author}}' +
                  '</h2>' +
                  '<ng-transclude></ng-transclude>' +
                '</div>',
      restrict: 'E',
      transclude: true,
      scope: {
        author: '@'
      },
      link: function postLink(scope, element, attrs) {}
    };
  });
