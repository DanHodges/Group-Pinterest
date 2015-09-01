app.filter('unique', function() {
    return function(input, cat) {
        var unique = {};
        var uniqueList = [];
        for(var i = 0; i < input.length; i++){
            if(typeof unique[input[i][cat]] == "undefined"){
                unique[input[i][cat]] = "";
                uniqueList.push(input[i]);
            }
        }
        return uniqueList;
    };
});