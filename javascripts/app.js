var app = angular.module('demoApp', ['multipleDatePicker']);

app.controller('demoController', ['$scope', 'multipleDatePickerBroadcast', function ($scope, multipleDatePickerBroadcast) {
    $scope.logInfos = function (time, selected) {
        alert(moment(time).format('YYYY-M-DD') + ' has been ' + (selected ? '' : 'un') + 'selected');
    };

    $scope.logMonthChanged = function (newMonth, oldMonth) {
        alert('new month : ' + newMonth.format('YYYY-M-DD') + ' || old month : ' + oldMonth.format('YYYY-M-DD'));
    };

    $scope.doDate = function (event, date) {
        if (event.type == 'click') {
            alert(moment(date).format('YYYY-M-DD') + ' has been ' + (date.selected ? 'un' : '') + 'selected');
        } else {
            console.log(moment(date) + ' has been ' + event.type + 'ed')
        }
    };

    $scope.clicReset = function(){
        multipleDatePickerBroadcast.resetOrder('myId');
    };

    $scope.clicResetFull = function(){
        $scope.selectedDays2 = [];
        multipleDatePickerBroadcast.resetOrder('myId');
    };

    $scope.oneDayOff = [moment().date(14).valueOf()];
    $scope.highlightDays = [
        {date: moment().date(2).valueOf(), css: 'holiday', selectable: false,title: 'Holiday time !'},
        {date: moment().date(14).valueOf(), css: 'off', selectable: false,title: 'We don\'t work today'},
        {date: moment().date(25).valueOf(), css: 'birthday', selectable: true,title: 'I\'m thir... i\'m 28, seriously, I mean ...'}
    ];
    $scope.selectedDays = [moment().date(4).valueOf(), moment().date(5).valueOf(), moment().date(8).valueOf()];
    $scope.selectedDays2 = [moment().date(4).valueOf(), moment().date(5).valueOf(), moment().date(8).valueOf()];
}]);
