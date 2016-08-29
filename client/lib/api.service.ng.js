'use strict'

var apiUrl = 'http://localhost:8080/api/';

angular.module('api.service', [])
.factory('$api',function($rootScope,$http,$q,$window,$state,$mdDialog){
  var api = {};  
  api.authenticated = false;
    
  api.request = function(method,url,data){
    var df = $q.defer();
    var config = {
      method: method,
      url: apiUrl + url
    }
    if(typeof(data)!='undefined')
      config.data = data;
    $http(config).then(function(d){
      if(d.status == 200){
          df.resolve(d.data);
      }
      else
        df.reject(d.status);
    },function(d){
      df.reject(d.status);
    })
    return df.promise;
  }    

  api.get = function(url){
    return this.request('GET',url);
  }
  api.post = function(url,data){
    return this.request('POST',url,data);
  }
  api.put = function(url,data){
    return this.request('PUT',url,data);
  }
  api.delete = function(url, data){
    return this.request('DELETE',url, data);
  }
  return api;
})
