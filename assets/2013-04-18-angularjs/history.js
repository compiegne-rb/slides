var module = angular.module('compiegnerb', ['ui.directives']);

module.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.
      when('/compiegnerb/assets/2013-04-18-angularjs/', {templateUrl: 'list.html', controller: ListCtrl}).
      when('/compiegnerb/assets/2013-04-18-angularjs/directive', {templateUrl: 'directive.html', controller: DirectiveCtrl}).
      when('/compiegnerb/assets/2013-04-18-angularjs/:userId', {templateUrl: 'detail.html', controller: DetailCtrl}).
      otherwise({redirectTo: '/compiegnerb/assets/2013-04-18-angularjs/'});
});

function ListCtrl($scope, $http) {
  $http.get('list.json').success(function(data) {
    $scope.users = data;
  });
}

function DetailCtrl($scope, $http, $routeParams) {
  $scope.userId = $routeParams.userId;

  $http.get('detail.json').success(function(data) {
    $scope.user = data;
  });
}

function DirectiveCtrl($scope, $http) {
  $http.get('directive.json').success(function(data) {
    $scope.location = data;
  });
}