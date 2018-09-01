var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });
};

app.post('/api/friends', function (req, res) {
			
    var newName = req.body.name;
    var newPhoto = req.body.photo;
    var newScores = req.body.scores;

    friends.push(req.body);

    var bestmatch = FindBestFriend(newName, newPhoto, newScores);
    
        var str = "{" + '"' + "name" + '"' + ": " + '"' + friendsData[bestmatch].name + '"' + "," + '"' + "photo" + '"' + ": " + '"' + friendsData[bestmatch].photo + '"' + "}";

     res.contentType('application/json');
    
     var personJSON = JSON.stringify(str);
     res.send(personJSON);
     
});