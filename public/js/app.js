var socket = io();
socket.on('connect',function(){
	console.log("connected via socket.io!!");
});
socket.on('message',function(message){
	console.log("New Message!");
	console.log(message.text);
});