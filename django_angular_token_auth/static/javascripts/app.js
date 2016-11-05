angular.module('application', [
  'application.config',
  'application.routes',
  'application.auth'
]);

angular.module('application.config', []);
angular.module('application.routes', ['ngRoute']);