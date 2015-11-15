var Song = require('./Models/Song')
var level = require('./notes')


var pokeSong = new Song.Song({
    songName: "Pokemon Theme",
    difficulty: "medium"
});




pokeSong.loadData(level.arrayLevel);
console.log(pokeSong.getData());