var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RoomSchema   = new Schema({
    	name: String,
		capacity: Number,
		lines: [{
			userId: String, 
			text: String, 
			time: Date
		}]
});

module.exports = mongoose.model('Room', RoomSchema);