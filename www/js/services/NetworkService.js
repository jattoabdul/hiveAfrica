app.factory('NetworkHiveData', function ($http, $q, $timeout, $log, $stateParams, $ionicPopup, $ionicPlatform, $ionicLoading) {
    var networkdata = [];
    // $scope.firstrun = 1;
    $ionicLoading.show();
    return {
        all: function () 
        {
            var dfd = $q.defer();
        //get from server
        url="http://test.hiveafrica.org/api/get/network/";
        
        //Check if user localstorage is blank, then load from server directly
        if(window.localStorage.getItem("networkdata")===null)
        {

            if(window.Connection) 
            {
                if(navigator.connection.type == Connection.NONE) 
                {
                    $ionicPopup.confirm({ title: "Internet Disconnected", content: "Please check your data settings." })
                        .then(function(result) { if(!result) { ionic.Platform.exitApp(); } });
                }
                else
                {
                    $http.get(url)//, {cache: true}
                    .then(function (response) {
                        networkdata = response.data;
                        //console.log(faqdata);
                        // console.log("loaded at null case");
                        window.localStorage.setItem("networkdata", JSON.stringify(networkdata));
                        window.localStorage.setItem("last_update_time", networkdata.last_update_time);
                        dfd.resolve(networkdata);
                    })
                    .finally(function(){ $ionicLoading.hide(); });
                }
                
            }

        }
        else
        {
            //localstorage is not null or empty. check is expired or not
            //Expired = current_unix_time_in_seconds minus the last_update_time_in_seconds that was stored in localstorage, equating with 864000(10 days in seconds.)
            //If greater than 86400, cache has expired, load directly from server.
            //If not greater, keep loading from localstorage till cache expires.
            
            var current_time = Math.floor((new Date()).getTime()/1000);
            if((current_time - window.localStorage.getItem("last_update_time")) > 864000 )
            {
                //subtract last_update time from current time, if greater than 864000(10days) load fresh data
                //check for internet here
                if(window.Connection) 
                {
                    if(navigator.connection.type == Connection.NONE) 
                    {
                        $ionicPopup.confirm({ title: "Internet Disconnected", content: "Please check your data settings." })
                        .then(function(result) { if(!result) { ionic.Platform.exitApp(); } });
                    }
                    else
                    {
                        $http.get(url)//, {cache: true}
                        .then(function (response) {
                            networkdata = response.data;
                            //console.log(faqdata);
                            // console.log("loaded at cache expiry case");
                            window.localStorage.setItem("networkdata", JSON.stringify(networkdata));
                            window.localStorage.setItem("last_update_time", networkdata.last_update_time);
                            dfd.resolve(networkdata);
                        })
                        .finally(function(){ $ionicLoading.hide(); });
                    }
                }
            }
            else
            {
                //cache time not expired, just load from localstorage.    
                // console.log("loaded from localstorage");
                networkdata = JSON.parse(window.localStorage.getItem("networkdata"));
                dfd.resolve(networkdata);
                $ionicLoading.hide();
            }

        }

        return dfd.promise;
            
        }
    };
});