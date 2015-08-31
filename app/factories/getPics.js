app.factory("getPics", function($q, $http) {

  function getPicList(tag) {

    // Return a promise for our async XHR
    return $q(function(resolve, reject) {
      $http.get(
      'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0c7d544a6f98314367eae24992e92a58&tags='+ tag +'&safe_search=&format=json')
      .success(
        function(objectFromJSONFile) {
          resolve(objectFromJSONFile);
        },function(error) {
          reject(error);
        }
      );
    });
  }

  return getPicList();
});