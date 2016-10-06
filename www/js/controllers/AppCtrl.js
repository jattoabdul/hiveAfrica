app.controller('AppCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout) {

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }


});