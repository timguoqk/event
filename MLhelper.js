var sys = require('util')
var child_process = require('child_process');

// http://stackoverflow.com/questions/2496710/writing-files-in-node-js

module.exports = {
//https://dzone.com/articles/execute-unix-command-nodejs
  create: function(userID, initialData) {
	var buffer = child_process.execSync('python TODO');
	return buffer.toString();
  },
  train: function(userID, trainData) {
	var buffer = child_process.execSync('python TODO');
	return buffer.toString();
  },
  predict: function(userID, data) {
	var buffer = child_process.execSync('python TODO');
	return buffer.toString();
  }
};