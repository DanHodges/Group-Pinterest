app.controller("AuthCtrl", 
  ["$scope",
  "$firebaseAuth",
  "getUid",
  function($scope, $firebaseAuth, getUid) {
    var ref = new Firebase("https://group-pinterest.firebaseio.com/pins");
    $scope.myValue = false;
    ref.authWithOAuthPopup("github", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
        $scope.myValue = true;
      } else {
        console.log("Authenticated successfully with payload:", authData);
        getUid.addUid(authData.uid);
      }
    });
}]);