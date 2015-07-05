angular.module('app.routes', ['ngRoute'])
.config(function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider

  .when('/', {
    templateUrl: 'partials/home/home.jade',
    controller: 'homeController',
    controllerAs: 'homeCtrl'
  })

  .when('/users/:username/reservations', {
    templateUrl: 'partials/users/reservations.jade',
    controller: 'userManageController',
    controllerAs: 'userCtrl'
  })

  .when('/users', {
    templateUrl: 'partials/users/index.jade',
    controller: 'userIndexController',
    controllerAs: 'userCtrl'
  })

  .when('/users/:username', {
    templateUrl: 'partials/users/show.jade',
    controller: 'userShowController',
    controllerAs: 'userCtrl'
  })

  .when('/users/:username/edit', {
    templateUrl: 'partials/users/edit.jade',
    controller: 'userEditController',
    controllerAs: 'userCtrl'
  })

  .when('/new_user', {
    templateUrl: 'partials/users/new.jade',
    controller: 'userNewController',
    controllerAs: 'userCtrl'
  })

  .when('/login', {
    templateUrl: 'partials/session/login.jade',
    controller: 'sessionLoginController',
    controllerAs: 'sessionCtrl'
  })

  .otherwise({
    redirectTo: '/'
  });
});
