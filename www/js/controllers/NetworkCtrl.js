app.controller('NetworkCtrl', function ($scope, $stateParams, $http, $timeout, $log, networkdata, ionicMaterialInk) {
    
    $scope.networkdata = networkdata;
    //add ref to other needed value in the scope.networkdata

    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

});