(function(angular) {

    var app = angular.module('timesApp');

    app.controller('LeaguesController', function($scope, leagues) {
        $scope.leagues = leagues.data.results.bindings;
    });

    app.controller('TeamsController', function($scope, $stateParams, teams) {
        $scope.leagueName = $stateParams.leagueName;
        $scope.teams = teams.data.results.bindings;
    });

    app.controller('TeamController', function($scope, $stateParams, team) {
        $scope.team = team.data.results.bindings[0];
    });

})(angular);