'use strict';

angular.module('app.user', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/user', {
            templateUrl: 'views/user/user.html',
            controller: 'UserCtrl'
        });
    }])

    .controller('UserCtrl', function($scope, $rootScope, $http) {

        /*$http.get(apiurl + 'user/' + )
            .then(function(data) {
                console.log('data success');
                console.log(data);
                $scope.user = data.data;
            }, function(data) {
                console.log('no user');
            });*/
            //fake data
          $scope.user = user;
          $scope.featured_posts= featured_posts;
    });
