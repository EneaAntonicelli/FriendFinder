var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    var user = req.body;

    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }
 
    var defaultMatch = 0;
    var minimumDifference = 10;

    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;

      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      if(totalDifference < minimumDifference) {
        defaultMatch = i;
        minimumDifference = totalDifference;
      }
    }

    friends.push(user);

    res.json(friends[defaultMatch]);
  });

};