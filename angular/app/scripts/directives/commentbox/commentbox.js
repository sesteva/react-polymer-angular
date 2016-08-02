'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:commentBox
 * @description
 * # commentBox
 */
angular.module('commentBox', ['commentList', 'commentForm'])
  .directive('commentBox', function ($http) {
    return {
      template: '<div class="commentBox">' +
                  '<h1>Comments</h1>' +
                  '<comment-form></comment-form>' +  
                  '<comment-list comments="data"></comment-list>' +
                '</div>',
      restrict: 'E',
      scope: {
        url: '@',
        pollInterval: '@'
      },
      link: function postLink(scope, element, attrs) {
        var loadCommentsFromServer = function () {
          $http.get(scope.url)
            .success(function(data, status, headers, config){
              scope.data = data;
              for(var i = 0; i < scope.data.length; i++) {
                if(scope.data[i].dt != undefined) {
                  var ms = parseInt(scope.data[i].dt,10);
                  if(!(isNaN(ms))) {
                    var nd = new Date(ms);
                    var fsYYYY = nd.getFullYear();                    
                    scope.data[i].formattedDate = moment(fsYYYY + "" + handleZeroes((nd.getMonth() + 1)) + "" + handleZeroes(nd.getDate())+ "" + handleZeroes(nd.getHours())+ "" + handleZeroes(nd.getMinutes())+ "" + handleZeroes(nd.getSeconds()), "YYYYMMDDHHmmss").fromNow();
                  }
                }
              }
            })
            .error(function(data, status, headers, config){
              console.log(status);
            });
        };

        var handleZeroes = function(val) {
          return val < 10 ? '0'+val : val;
        }

        var handleCommentSubmit = function (event, data) {
          var comment = data;               
          scope.data.concat([comment]);
          $http.post(scope.url, comment)
            .success(function(data, status, headers, config){              
              console.log('success')
            })
            .error(function(data, status, headers, config){
              console.log(status);
            });
        };
        loadCommentsFromServer();
        setInterval(loadCommentsFromServer, scope.pollInterval);
        scope.$on('submitted', handleCommentSubmit);
      }
  }});
