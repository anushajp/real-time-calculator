var TodoApp = angular.module('RTCalcApp', [
    'SwampDragonServices',
    'RTCalcControllers'
]);

TodoApp.filter('reverse', function() {
    return function(items) {
	return items.slice().reverse();
    };
});
