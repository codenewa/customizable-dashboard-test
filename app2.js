var app = angular.module('app', ['gridster', 'ngDragDrop']);

app.run(['gridsterConfig',function(gridsterConfig){

}]);

app.controller('WidgetListController', function($scope){
     $scope.allWidgets = [
          {id:'1', name:'Widget1', size: { x: 4, y: 1 }, targetDirective: 'hello1', friendlyName: 'Hello 1 Directive' },
          {id:'2', name:'Widget2', size: { x: 4, y: 1 }, targetDirective: 'hello2', friendlyName: 'Hello 2 Directive' },
          {id:'3', name:'Widget3', size: { x: 4, y: 1 }, targetDirective: 'hello3', friendlyName: 'Hello 3 Directive' },
          {id:'4', name:'Widget4', size: { x: 4, y: 1 }, targetDirective: 'hello4', friendlyName: 'Hello 4 Directive' },
          {id:'5', name:'Widget5', size: { x: 4, y: 1 }, targetDirective: 'hello5', friendlyName: 'Hello 5 Directive' }
        ];

    $scope.gridsterOptions = {
            margins: [20, 20],
            columns: 1,
            rowHeight: 113,
        resizable: {
                enabled: false
        }
        };
});

app.directive('widgetList',function(){
 return {
        restrict: 'AE',
        link: function (scope, element, attrs) {},
        templateUrl: 'widgetList.html',
        controller: 'WidgetListController'
    };
});

app.controller('widgetController', function ($scope) {
    $scope.gridsterOptions = {
            margins: [20, 20],
            columns: 12,
            rowHeight: 113,
        resizable: {
                enabled: false
        }
        };

    $scope.widgets = [
          {id:'1', name:'Widget1', size: { x: 4, y: 1 }, position: [0, 0], targetDirective: 'hello1' },
          {id:'2', name:'Widget2', size: { x: 4, y: 1 }, position: [0, 4], targetDirective: 'hello2' }
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
        controller: 'widgetController'
    };
});


app.directive('directiveLoader',['$compile', function($compile){
    return{
        restrict: 'A',
        scope:{
            widget: '='
        },
        link: function(scope, element, attrs){
            element.empty().append($compile('<'+ attrs.directiveLoader+'/>')(scope));
        }
    };
}]);




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


