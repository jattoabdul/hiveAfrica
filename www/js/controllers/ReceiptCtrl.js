app.controller('ReceiptCtrl', function ($scope, $stateParams, $ionicActionSheet, $timeout, $ionicLoading, $ionicModal, $ionicPopup, ionicMaterialInk) {


    $scope.loading = function() {
        $ionicLoading.show({
            template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
        });

        // For example's sake, hide the sheet after two seconds
        $timeout(function() {
            $ionicLoading.hide();
        }, 2000);
};

});
