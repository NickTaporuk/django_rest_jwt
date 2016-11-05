angular.module('application.routes')
  .config(function ($routeProvider) {
    $routeProvider.when('/', {
      controller: 'IndexController',
      templateUrl: '/static/templates/static/index.html'
    });
  });