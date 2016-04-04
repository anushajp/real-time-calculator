var RTCalcControllers = angular.module('RTCalcControllers', []);

RTCalcControllers.controller('RTCalcCtrl', ['$scope', '$dragon', function ($scope, $dragon) {
    $scope.calcs = [];
    $scope.channel = 'calcs';

    $dragon.onReady(function() {
        $dragon.subscribe('calculation-details', $scope.channel, {}).then(function(response) {
            $scope.dataMapper = new DataMapper(response.data);
        });

        $dragon.getList('calculation-details', {}).then(function(response) {
            $scope.calcs = response.data;
        });
    });

    $dragon.onChannelMessage(function(channels, message) {
        if (indexOf.call(channels, $scope.channel) > -1) {
            $scope.$apply(function() {
                $scope.dataMapper.mapData($scope.calcs, message);
            });
        }
    });

    $scope.calcDone = function(calc) {
        calc.done = true != calc.done;
        $dragon.update('calculation-details', calc);
    }
}]);
