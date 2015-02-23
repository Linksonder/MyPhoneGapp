var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    	name: String,
		IconId: Number
});

module.exports = mongoose.model('User', UserSchema);