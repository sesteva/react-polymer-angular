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
      template: '<div class="comment">' +
                  '<span class="author">' +
                      '{{author}}' +
                  '</span>' +
                  '<ng-transclude></ng-transclude>' +
				  '<span class="age">{{age}}</span>' +
                '</div>',
      restrict: 'E',
      transclude: true,
      scope: {
        author: '@',
		age: '@'
      },
      link: function postLink(scope, element, attrs) {}
    };
  });
