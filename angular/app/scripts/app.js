'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular.module('angularApp', ['comment','commentList', 'commentForm', 'commentBox'])
  .run(function($rootScope){
    $rootScope.comments = [{'author': 'Santiago', 'msg': 'Msg 1', id: 1},{'author': 'Pablo', 'msg': 'Msg 2', id: 2}];
  });
