app.controller('CurriculumCtrl', function ($scope, $stateParams, $http, $timeout, $log, curriculumdata, ionicMaterialInk) {
    
    $scope.curriculumdata = curriculumdata;
    //add ref to other needed value in the scope.curriculumdata
    $scope.Learn  =$scope.curriculumdata.learn;
    $scope.Day1  =$scope.curriculumdata.day1;
    $scope.Day2  =$scope.curriculumdata.day2;
    $scope.Day3  =$scope.curriculumdata.day3;
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

});