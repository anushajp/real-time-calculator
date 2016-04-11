var rTCalcApp = angular.module('RTCalcApp', [
    'SwampDragonServices',
    'RTCalcControllers'
]);

rTCalcApp.filter('reverse', function() {
    return function(items) {
	return items.slice().reverse();
    };
});
