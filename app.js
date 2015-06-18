var app = angular.module('app', ['ngDragDrop']);

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function Row() {
    var self = this;
    self.availableUnits = 12;
    self.takenUnits = 0;
    //self.colorStyle = "{'background-color':'" + getRandomColor() + "'}";
    self.id = guid();
    return self;
}



app.controller('WidgetController', function ($scope) {
    $scope.text = 'a';

    $scope.rows = [];

    $scope.addRow = function () {
        $scope.rows.push(new Row());
    };

    $scope.removeRow = function (id) {
        var rowToRemove = $scope.rows.filter(function (r) {
            return r.id === id;
        })[0];

        var index = $scope.rows.indexOf(rowToRemove);

        if (index>-1){
            $scope.rows.splice(index,1);
        }

    };

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


