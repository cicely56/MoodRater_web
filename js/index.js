var lastGameLevel = 0;
var whereAmI = 0;

function newGame() {
  document.body.style.backgroundColor = 'black';
  var rootElement = document.getElementById("playGround");
  if(rootElement.hasChildNodes()){
      while(rootElement.firstChild){
        rootElement.removeChild(rootElement.firstChild)
      }
    }
  noteCountGen();//for random level
  progressBar('progress')
  gameZone();
  addCount();
}
function gameZone(){
  var gameZone = document.createElement("div");
  gameZone.classList.add("gamefield")
  $("#playGround").append(gameZone);
  console.log(gameZone)
}

function progressBar(catchBar){
  var bar = document.createElement("div");
  if(catchBar === 'progress'){
    bar.classList.add("progress-wrap");
    bar.classList.add("progress");
    $("#playGround").append(bar);
  }else{
    bar.classList.add("result-wrap");
    bar.classList.add("result");
    bar.style.marginBottom = '70px';
    $('#threeCircleRow').append(bar);
  }

  var barbar = document.createElement("div");
  if(catchBar === 'progress'){
    barbar.classList.add("progress-bar");
    barbar.classList.add("progress");
  }else{
    if(catchBar === 'result1'){
      barbar.classList.add("result-bar1");
    }else if(catchBar === 'result2'){
      barbar.classList.add("result-bar2");
    }else if(catchBar === 'result3'){
      barbar.classList.add("result-bar3");
    }
    barbar.classList.add("result");
  }
  $(bar).append(barbar);
}

function moveProgressBar(catchBar) {
  if (catchBar === 'progress'){
    whereAmI = whereAmI + 2;
    var progressPercen = whereAmI/100;
    var getProgressWrapWidth = $('.progress-wrap').width();
  }else{
    if (catchBar === 'results1'){
      whereAmI = errorLevel1;
      var progressPercen = 1 - whereAmI/(3*16);//************
    }else if (catchBar === 'results2'){
      whereAmI = errorLevel2;
      var progressPercen = 1 - whereAmI/(4*16);//************
    }else if (catchBar === 'results3'){
      whereAmI = errorLevel3;
      var progressPercen = 1 - whereAmI/(5*16);//************
    }
    var getProgressWrapWidth = $('.result-wrap').width();
  }

  var progressTotal = progressPercen * getProgressWrapWidth;

  if(catchBar === 'progress'){ //-----progress bar
    var animationLength = 500;
    $('.progress-bar').stop().animate({
      left: progressTotal
    }, animationLength);
  }else{  //--------------------------results
    var animationLength = 1500;
    if(catchBar === 'results1'){
      $('.result-bar1').stop().animate({
        left: progressTotal
      }, animationLength);
    }else if(catchBar === 'results2'){
      $('.result-bar2').stop().animate({
        left: progressTotal
      }, animationLength);
    }else{
      $('.result-bar3').stop().animate({
        left: progressTotal
      }, animationLength);
    }
  }
}
function saveUserID(){
  var userid = prompt("Enter your name : ", "your name here");
  if(userid != null){
    game.userID = userid;
  }else{
    game.userID = 'star';
  }
  console.log("User ID: ", game.userID)
}

function circle (id) {
  var circle = document.createElement("div");
  circle.id = id;
  circle.classList.add("gamebutton");
  circle.addEventListener('click', function (event) {
    addTimeLog(game.noteCount); // everytime when the circle is clicked, time log will be wrote.
    addToPlayer(this.id)
  }, false);
  return circle;
}

function createRow(x) {
  var row = document.createElement('div');
  if(x === 'vertical'){
    row.classList.add('verticalRow');
    row.id = "verticalRow";
    } 
  else{
    row.classList.add('horizontalRow');
    row.id = 'horizontalRow'; 
    }
  return row;
}
// This is another place changed accordingly for playing the same trials.
function clearElements(){ // this function will call between each trials.
  if(document.getElementById('verticalRow')){ //remove the first example before showing the next
      while(document.getElementById('verticalRow')){
        $("#verticalRow").remove();
        consloe.log("clear");
      }
    }
}

// This is main part to keep all the trials identical. 
// Main difference with other versions.
function addCount() {
  clearLogBox(); // clear all the temp log each time before new trial begin.
  clearElements();
  var rootElement = document.getElementsByClassName("gamefield");
  for(var i=0; i<game.noteCount[game.levelCount-1]; i++){
  var row = createRow('vertical');
  row.appendChild(circle(game.possibilities[i]));

  $(".gamefield").append(row);
  // rootElement.appendChild(row);
  }
  generateMove(game.noteCount[game.levelCount-1]);
}
function noteCountGen(){
  game.levelCount++;
  for(var i = 3; i <= 5; i++){
    // var temp = Math.floor(Math.random()*(6-3)) + 3;
    // if(checkRepeatLevel(temp)){ //no repeat levels in the sequence
    //   game.noteCount.push(temp);
    //   console.log('game.noteCount...' + game.noteCount);
    // }else{
    //   i--;
    // }
    game.noteCount.push(i); 
  }
}
function checkRepeatLevel(curr){
  for(var i=0; i<=game.noteCount.length; i++){
    if(curr === game.noteCount[i]){
      return false;
      // break;
    }
  }
  return true;
}

function clearLogBox(){
  game.currentGame = [];
  game.player = [];
  timeLogIn.eachClick = [];
  timeLogIn.clickInterval = [];
  timeLogIn.timeSpan = [];
  game.trialCount++;
}

function showMoves() {
  var i = 0;
  var moves = setInterval(function(){
    playGame(game.currentGame[i]);
    i++;
    if (i >= game.currentGame.length) {
      clearInterval(moves);
    }
  }, 400)
}

function soundMatch(idName) {
  var cNotes = document.getElementById("cNotes");
  var dNotes = document.getElementById("dNotes");
  var eNotes = document.getElementById("eNotes");
  var gNotes = document.getElementById("gNotes");
  var aNotes = document.getElementById("aNotes");
  if (gameCondition === 'con1' || gameCondition === 'con2' || gameCondition === 'con5'){
    switch(idName) {
      case'c1':
        notePlay(cNotes);
        break;
      case 'c2':
        notePlay(dNotes);
        break;
      case 'c3':
        notePlay(eNotes);
        break;
      case 'c4':
        notePlay(gNotes);
        break;
      case 'c5':
        notePlay(aNotes);
        break;
    };
  }else{
    switch(idName) {
      case'c5':
        notePlay(cNotes);
        break;
      case 'c4':
        notePlay(dNotes);
        break;
      case 'c3':
        notePlay(eNotes);
        break;
      case 'c2':
        notePlay(gNotes);
        break;
      case 'c1':
        notePlay(aNotes);
        break;
    };
  }
}

function notePlay(note){
  // console.log("note..." + note);
  note.currentTime = 0.7;
  note.play();
}

function playGame(field) {
  var tempID = "#" + field;
  soundMatch(field);
  setTimeout(function(){
    $(tempID).addClass('hover');
  }, 50);
  setTimeout(function(){
      $(tempID).removeClass('hover');
  }, 300);//300
}

function addToPlayer(id) {
  //var field = "#"+id;
  var field = id;
  game.player.push(field);
    playerTurn(field);
} 

function logRelay(command){
  if (command === 'trialsLog'){
    game.player.forEach( function (arrayItem){// push data of each trial into the whole
      log.playerLog.push(arrayItem);
    });
    game.currentGame.forEach( function (arrayItem){
      log.currentGameLog.push(arrayItem);
    });
    timeLogIn.eachClick.forEach( function (arrayItem){
      log.eachClickLog.push(arrayItem);
    });
    timeLogIn.clickInterval.forEach( function (arrayItem){
      log.clickIntervalLog.push(arrayItem);
    });
    timeLogIn.timeSpan.forEach( function (arrayItem){
      log.timeSpanLog.push(arrayItem);
    });
  }else if(command === 'clear'){
    log.playerLog = [];
    log.currentGameLog = [];
    log.eachClickLog = [];
    log.clickIntervalLog = [];
    log.timeSpanLog = [];
  }else if(command === 'levelLog1'){
    log.logLevel1.push(log.eachClickLog);
    log.logLevel1.push(log.timeSpanLog);
    log.logLevel1.push(log.clickIntervalLog);
    log.logLevel1.push(log.playerLog);
    log.logLevel1.push(log.currentGameLog);
  }else if(command === 'levelLog2'){
    log.logLevel2.push(log.eachClickLog);
    log.logLevel2.push(log.timeSpanLog);
    log.logLevel2.push(log.clickIntervalLog);
    log.logLevel2.push(log.playerLog);
    log.logLevel2.push(log.currentGameLog);
  }else if(command === 'levelLog3'){
    log.logLevel3.push(log.eachClickLog);
    log.logLevel3.push(log.timeSpanLog);
    log.logLevel3.push(log.clickIntervalLog);
    log.logLevel3.push(log.playerLog);
    log.logLevel3.push(log.currentGameLog);
  }
}

function playerTurn(id) {
    soundMatch(id);
    var check = game.player.length === game.currentGame.length; //check if input is finished
    if (check) {
      trialTime('end'); // end of counting time span
      logRelay('trialsLog');
      moveProgressBar('progress');

      if(game.trialCount == 1){ //16 trials for each level.
        errorRate();
        if(game.levelCount !== 3){//hand logs of all the trials in this level 
          if (game.currentGame.length === 3){
            logRelay('levelLog1');
          }else if(game.currentGame.length ===4){
            logRelay('levelLog2');
          }else{
            logRelay('levelLog3');
          }
          logRelay('clear'); //release level log relay for next the level
          setTimeout(function(){
            alert('Good move! You can take a short break if you want. Start the next level by clicking the button below.\n 好样的！您可稍作休息，如若继续，点击下面的按钮开始下一级。');
          }, 300);
          setTimeout(function(){
            nextTrial(true);
          }, 600);
         }
        else if(game.levelCount === 3){
          if (game.currentGame.length === 3){
            logRelay('levelLog1');
          }else if(game.currentGame.length ===4){
            logRelay('levelLog2');
          }else{
            logRelay('levelLog3');
          }
          setTimeout(function(){
          alert('Congratulations! Now you finished all the trials! Many thanks!\n恭喜！您完成了所有的游戏，非常感谢！');
          }, 300);
          setTimeout(function(){
            showResults();
            // lastPage();
          }, 600);
          logTrial(log, log.logLevel1, log.logLevel2, log.logLevel3);
          sendLog(log.log);
        }
      } else {
        setTimeout(function(){
          clearElements(); 
        }, 300);
        setTimeout(function(){
          nextTrial();
        }, 600);
      }
    }
}

function logTrial(log, level1, level2, level3) {
  if (log.log instanceof Array) {
      log.log.push({
      firstLevel: level1,
      secondLevel: level2,
      thirdLevel: level3
    });
  } else {
    log.log = [];
    logTrial(log, level1, level2, level3);  
  }
  console.log('Current Log: ', log.log);
}

function nextTrial(NextLevel) {
  goToNextLevel = false || NextLevel;
  if (goToNextLevel) {
    game.trialCount = 0;
    game.levelCount += 1;
  }
  addCount();
}

function checkRepeat(randomX){
  var x = randomX;
  for(var i=0; i<=game.currentGame.length; i++){
    if(x === game.currentGame[i]){
      return false;
      break;
    }
  }
  return true;
}

function generateMove(times){
  for(var i = 0; i < times; i++){
    var cur = game.possibilities[(Math.floor(Math.random()*times))];
    if(checkRepeat(cur)){ //make sure there's no repeat notes in the sequence
      game.currentGame.push(cur);
    }else i--;
  }
  showMoves();
}

function sendLog(log) {
  $.post( "/game", {id: game.userID, log: JSON.stringify(log), time: timeLogIn.utcDate, condition: gameCondition})
    .done(function( response ) {
      console.log("Remote log: ", response, "userID: ", game.userID);
    })
}