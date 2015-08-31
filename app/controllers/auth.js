app.controller("AuthCtrl", 
  ["$scope",
   "$firebaseAuth"
function($scope, $firebaseAuth) {
    var ref = new Firebase("https://group-pinterest.firebaseio.com/pins");
    ref.authWithOAuthRedirect("github", function(error) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
    // We'll never get here, as the page will redirect on success.
    }
});