function updatetime(){
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	var modified = hour + ":" + (minute < 10 ? "0":"") + minute + ":" + (second < 10 ? "0":"") + second;
	document.getElementById('timedisplay').textContent = modified;
}

updatetime();

setInterval(updatetime, 1000);