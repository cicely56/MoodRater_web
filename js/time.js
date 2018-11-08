function addTimeLog(level){
	var timeLogObj = new Date();
	timeLogIn.sec = timeLogObj.getUTCSeconds();;
	timeLogIn.min = timeLogObj.getUTCMinutes();;
	timeLogIn.hour = timeLogObj.getUTCHours();;
	timeLogIn.month = timeLogObj.getMonth();
	timeLogIn.year = timeLogObj.getUTCFullYear();
	timeLogIn.date = timeLogObj.getUTCDate();
	timeLogIn.utcDate = new Date(Date.UTC(timeLogIn.year, timeLogIn.month, timeLogIn.date, timeLogIn.hour, timeLogIn.min, timeLogIn.sec));
	var start = new Date ();
	timeLogIn.eachClick.push((start.getTime() % 100000));
	timeLogIn.clickInterval.push(clickInterval(level));
}
function clickInterval(level){ //level: game.noteCount
	// console.log("check: " + level + lastGameLevel)
	// console.log("check length....." + timeLogIn.eachClick.length)
	if(timeLogIn.eachClick.length > 1 && level === lastGameLevel ){
	// if(level === lastGameLevel){
		return (timeLogIn.eachClick[timeLogIn.eachClick.length - 1] - timeLogIn.eachClick[timeLogIn.eachClick.length - 2]);
	}else{
		lastGameLevel = level;
		return 0;
	}
}
function trialTime(timemark){
	var start = new Date ();
	if(timemark === 'start'){
		timeLogIn.timeStart = (start.getTime() % 100000);
	}else if(timemark === 'end'){
		timeLogIn.timeEnd = (start.getTime() % 100000);
		timeLogIn.timeSpan.push(timeLogIn.timeEnd - timeLogIn.timeStart);
	}	
}