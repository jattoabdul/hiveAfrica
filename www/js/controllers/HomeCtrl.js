app.controller('HomeCtrl', function ($scope, $http, alldata, $timeout, $log, $ionicSlideBoxDelegate, $stateParams, $ionicLoading, ionicMaterialMotion) {
    
    $scope.homedata = alldata;
    $scope.about  = $scope.homedata.about_hive;
    $scope.video = "video/Welcome.mp4"; //$scope.homedata.video_url;
    $scope.speakers = $scope.homedata.speakers;
    // $scope.learn  = $scope.homedata.learn;
    // $scope.connect  = $scope.homedata.connect;
    // $scope.location  = $scope.homedata.location;
    $scope.countdown  = $scope.homedata.count_down_text;

    // $scope.videoE = document.getElementsById('videoE');

    // $cope.videoAudioToggler = function () { 
    //     if ($scope.videoE.muted === false){

    //     }
    //  };
    

    var reset = function() {
        var inClass = document.querySelectorAll('.in');
        for (var i = 0; i < inClass.length; i++) {
            inClass[i].classList.remove('in');
            inClass[i].removeAttribute('style');
        }
        var done = document.querySelectorAll('.done');
        for (var i = 0; i < done.length; i++) {
            done[i].classList.remove('done');
            done[i].removeAttribute('style');
        }
        var ionList = document.getElementsByTagName('ion-list');
        for (var i = 0; i < ionList.length; i++) {
            var toRemove = ionList[i].className;
            if (/animate-/.test(toRemove)) {
                ionList[i].className = ionList[i].className.replace(/(?:^|\s)animate-\S*(?:$|\s)/, '');
            }
        }
    };

    $scope.ripple = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-ripple';
        setTimeout(function() {
            ionicMaterialMotion.ripple();
        }, 500);
    };

    $scope.fadeSlideInRight = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in-right';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideInRight();
        }, 500);
    };

    $scope.fadeSlideIn = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideIn();
        }, 500);
    };

    $scope.blinds = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
        setTimeout(function() {
            ionicMaterialMotion.blinds(); // ionic.material.motion.blinds(); //ionicMaterialMotion
        }, 500);
    };

    $scope.blinds();

    $scope.slide = (function() {
                $ionicSlideBoxDelegate.slide(0);
                $ionicSlideBoxDelegate.update();
                $scope.$apply();
            });
});