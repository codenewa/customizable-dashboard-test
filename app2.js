var app = angular.module('app', ['gridster']);

app.run(['gridsterConfig',function(gridsterConfig){

}]);

app.controller('DashboardController', function($scope){

});

app.controller('WidgetController', function ($scope) {
    $scope.customItems = [
          { size: { x: 2, y: 1 }, position: [0, 0] },
          { size: { x: 2, y: 2 }, position: [0, 2] },
          { size: { x: 1, y: 1 }, position: [0, 4] },
          { size: { x: 1, y: 1 }, position: [0, 5] },
          { size: { x: 2, y: 1 }, position: [1, 0] },
          { size: { x: 1, y: 1 }, position: [1, 4] },
          { size: { x: 1, y: 2 }, position: [1, 5] },
          { size: { x: 1, y: 1 }, position: [2, 0] },
          { size: { x: 2, y: 1 }, position: [2, 1] },
          { size: { x: 1, y: 1 }, position: [2, 3] },
          { size: { x: 1, y: 1 }, position: [2, 4] }
        ];
});

app.directive('widgetContainer', function () {
    return {
        restrict: 'AE',
        scope: {
            addRow: '&'
        },
        link: function (scope, element, attrs) {},
        templateUrl: 'widgetContainer.html',
        controller: 'WidgetController'
    };
});


app.directive('widgetList',function(){
 return {
        restrict: 'AE',
        link: function (scope, element, attrs) {},
        templateUrl: 'widgetList.html'
    };
});

app.directive('hello1',function(){
 return {
        restrict: 'AE',
        link: function (scope, element, attrs) {},
        templateUrl: 'hello1.html'
    };
});

app.directive('hello2',function(){
 return {
        restrict: 'AE',
        link: function (scope, element, attrs) {},
        templateUrl: 'hello2.html'
    };
});

app.directive('hello3',function(){
 return {
        restrict: 'AE',
        link: function (scope, element, attrs) {},
        templateUrl: 'hello3.html'
    };
});

app.directive('hello4',function(){
 return {
        restrict: 'AE',
        link: function (scope, element, attrs) {},
        templateUrl: 'hello4.html'
    };
});
app.directive('hello5',function(){
 return {
        restrict: 'AE',
        link: function (scope, element, attrs) {},
        templateUrl: 'hello5.html'
    };
});


