app.controller('AboutCtrl', function ($scope, $stateParams, $http, aboutdata, $timeout, $log, ionicMaterialInk) {
    
    $scope.aboutdata = aboutdata;
    $scope.aboutdetails  = $scope.aboutdata.about_hive;
    $scope.teams = $scope.aboutdata.team;   
    
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
});