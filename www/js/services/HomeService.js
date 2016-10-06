app.service('GetWebData', ["$http", "$log", GetWebData]);

function GetWebData() {
    $http.jsonp("")
    .success(function(){
        
    });
}