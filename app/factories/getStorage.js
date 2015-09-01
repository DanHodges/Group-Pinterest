app.factory("getStorage", function() {
  var bucket = '';

  return {
    addTerm: function(value) {
      bucket = value;
      console.log("bucket :", bucket);
      return bucket;
    },
    getTerm: function() {
      console.log("bucket :", bucket);
      return bucket;
    }
  }
});