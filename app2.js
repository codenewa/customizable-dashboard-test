var app = angular.module('app', ['gridster']);

app.run(['gridsterConfig',function(gridsterConfig){

}]);

app.controller('DashboardController', function($scope){

});

app.controller('widgetController', function ($scope) {
    $scope.gridsterOptions = {
            margins: [40, 40],
            columns: 12,
            rowHeight: 113,
            minRows: 3,
            draggable: {
                handle: 'h3'
            }
        };

    $scope.widgets = [
          {id:'1', name:'Widget1', size: { x: 4, y: 1 }, position: [0, 0], targetDirective: 'hello1' },
          {id:'2', name:'Widget2', size: { x: 4, y: 1 }, position: [0, 4], targetDirective: 'hello2' },
          {id:'3', name:'Widget3', size: { x: 4, y: 1 }, position: [0, 8], targetDirective: 'hello3' },
          {id:'4', name:'Widget4', size: { x: 4, y: 1 }, position: [1, 0], targetDirective: 'hello4' },
          {id:'5', name:'Widget5', size: { x: 4, y: 1 }, position: [1, 4], targetDirective: 'hello5' }
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
            /*var build = function(html){
              element.empty().append($compile(html)(scope));
            };

            scope.$watch('widget.template', function(newValue, oldValue){
                if(newValue){
                    build("<"+newValue+"/>");
                }
            });*/

            element.empty().append($compile('<'+ attrs.directiveLoader+'/>')(scope));
        }
    };
}]);


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


