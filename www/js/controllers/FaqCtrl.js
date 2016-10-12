app.controller('FaqCtrl', function ($scope, $stateParams, $http, $timeout, $log, faqdata, ionicMaterialInk) {
    
    $scope.faqdata = faqdata;
    //add ref to other needed value in the scope.curriculumdata
    $scope.faqs = $scope.faqdata.faqs;

    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

});