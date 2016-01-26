var socket = io();
socket.on('connect',function(){
	console.log("connected via socket.io!!");
})