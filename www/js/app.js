// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material', 'ngCordova']);

app.run(function ($ionicPlatform, $ionicPopup, $timeout, $cordovaNetwork) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }

        // checking for internet connection on startup
        if (window.Connection) {
            if (navigator.connection.type === Connection.NONE) {
                document.addEventListener("offline", function () {
                    $ionicPopup.alert({
                        title: "Internet Disconected",
                        content: "Sorry, No internet connection now, please check your network and try again",
                        okText: 'Exit',
                        okType: 'button-assertive'
                    }).then(function (result) {
                        if (result) {
                            $ionicPlatform.exitApp();
                        }
                    });
                }, false);
            }
            // else {
            //     first_run = 0;
            //     console.log(first_run);
            // }
        }
    });
});

app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    // enable http caching
    //$httpProvider.defaults.cache = true;

    $stateProvider

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })

        .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeCtrl',
                    resolve: {
                        alldata: function (HiveData) {
                            return HiveData.all();
                        }
                    }
                }
            }
        })

        .state('app.about', {
            url: '/about',
            views: {
                'menuContent': {
                    templateUrl: 'templates/about.html',
                    controller: 'AboutCtrl',
                    resolve: {
                        aboutdata: function (AboutHiveData) {
                            return AboutHiveData.all();
                        }
                    }
                }
            }
        })

        .state('app.network', {
            url: '/network',
            views: {
                'menuContent': {
                    templateUrl: 'templates/network.html',
                    controller: 'NetworkCtrl',
                    resolve: {
                        networkdata: function (NetworkHiveData) {
                            return NetworkHiveData.all();
                        }
                    }
                }
            }
        })

        .state('app.curriculum', {
            url: '/curriculum',
            views: {
                'menuContent': {
                    templateUrl: 'templates/curriculum.html',
                    controller: 'CurriculumCtrl',
                    resolve: {
                        curriculumdata: function (CurriculumHiveData) {
                            return CurriculumHiveData.all();
                        }
                    }
                }
            }
        })

        .state('app.faq', {
            url: '/faq',
            views: {
                'menuContent': {
                    templateUrl: 'templates/faq.html',
                    controller: 'FaqCtrl',
                    resolve: {
                        faqdata: function (FaqHiveData) {
                            return FaqHiveData.all();
                        }
                    }
                }
            }
        })
        .state('app.register', {
            url: '/register',
            views: {
                'menuContent': {
                    templateUrl: 'templates/register.html',
                    controller: 'RegisterCtrl'
                }
            }
        })
        .state('app.ourpartner', {
            url: '/ourpartner',
            views: {
                'menuContent': {
                    templateUrl: 'templates/ourpartner.html',
                    controller: 'OurpartnerCtrl'
                }
            }
        })
        .state('app.payment', {
            url: '/payment',
            views: {
                'menuContent': {
                    templateUrl: 'templates/payment.html',
                    controller: 'PaymentCtrl'
                }
            }
        })

        .state('app.receipt', {
            url: '/receipt',
            views: {
                'menuContent': {
                    templateUrl: 'templates/receipt.html',
                    controller: 'ReceiptCtrl'
                }
            }
        })
        ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
