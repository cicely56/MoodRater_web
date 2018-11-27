

function openWin() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScE3FndFEPAzkbyVPFBA4BbYVWVqoCexJpS5eqOQf1AfWA36g/viewform?usp=pp_url");
}


function vatagsplot2(divID) {
  
  var trace1 = {
  x: [0.18 ,0.30 ,0.32 ,0.33 ,0.33 ,0.35 ,0.40 ,0.42 ,0.43 ,0.45 ,0.49 ,0.53 ,0.54 ,0.58 ,0.59 ,0.72 ,0.72 ,0.73 ,0.75 ,0.77 ,0.78 ,0.79 ,0.79 ,0.80 ,0.81 ,0.82 ,0.83 ,0.83 ,0.84 ,0.85 ,0.85 ,0.85 ,0.85 ,0.86 ,0.87 ,0.89 ,0.89 ,0.90 ,0.91 ,0.92 ,0.93],
  y: [0.46 ,0.72 ,0.80 ,0.66 ,0.62 ,0.37 ,0.57 ,0.42 ,0.47 ,0.58 ,0.29 ,0.77 ,0.36 ,0.62 ,0.44 ,0.57 ,0.47 ,0.55 ,0.40 ,0.54 ,0.27 ,0.64 ,0.51 ,0.61 ,0.36 ,0.65 ,0.50 ,0.60 ,0.46 ,0.78 ,0.73 ,0.66 ,0.64 ,0.32 ,0.74 ,0.69 ,0.82 ,0.71 ,0.72 ,0.84 ,0.80 ],
  mode: 'markers+text',
  type: 'scatter',
  name: 'emotion tags',
  text: ["sad","hostile","angry","difficult","harsh","messy","hungry","weary","detached","cold","lazy","anxious","reserved","complex","reverent","warm","innocent","smooth","calm","tender","relaxed","hopeful","soft","lively","gentle","silly","elegant","bright","carefree","intimate","ambitious","sweet","thoughtful","peaceful","party","confident","sexy","cheerful","happy","romantic","fun"],
  textposition: 'top center',
  textfont: {
    family:  'Raleway, sans-serif',
    size:10
  },
  marker: { size: 12 }
  };

  var data = [trace1];

  var layout = { 
    width: 600,
      height: 600,
      margin: {
      l: 100,
      r: 100,
      b: 100,
      t: 100,
      pad: 0,
    },
  xaxis: {
    title: "Valence",
    range: [ 0, 1 ] 
  },
  yaxis: {
    title: "Arousal",
    range: [0, 1]
  },
  legend: {
    y: 0.5,
    yref: 'paper',
    font: {
      family: 'Arial, sans-serif',
      size: 20,
      color: 'grey',
    }
  },
  title:'Emotion tags in Valence-Arousal space'
  }

  Plotly.newPlot(divID, data, layout);

}


function vatagsplot42(divID) {
  var trace1 = {
  x: [0.375,0.66,0.6925,-0.5175,-0.5175,0.0625,0.775,0.4325,0.655,0.4825,0.53,0.395,0.6025,-0.4625,0.55,-0.155,0.6525,0.3775,0.8425,-0.245,0.625,0.755,-0.3025,0.6625,-0.8475,0.83,0.0875,-0.03,0.5,0.715,-0.355,-0.5675,0.525,0.8025,0.5775,0.6075,-0.285,0.745,0.635,-0.0475,-0.5375],
  y: [0.035,0.24,-0.5325,0.15,0.24,0.155,0.34,-0.35,0.3925,-0.03,-0.0925,-0.0225,0.22,-0.415,0.1325,-0.5875,0.495,-0.1975,0.555,0.0475,0.1,0.59,-0.2975,0.18,-0.2175,0.6475,-0.25,-0.4325,-0.6525,0.4225,0.0325,0.36,0.195,0.3725,-0.4475,-0.1175,-0.185,0.305,-0.2075,0.48,0.5425 ],
  mode: 'markers+text',
  type: 'scatter',
  name: 'emotion tags',
  text: ["warm","sweet","peaceful","harsh","difficult","complex","cheerful","calm","ambitious","tender","soft","smooth","silly","messy","lively","lazy","intimate","innocent","fun","cold","bright","sexy","weary","thoughtful","sad","romantic","reverent","reserved","relaxed","party","hungry","hostile","hopeful","happy","gentle","elegant","detached","confident","carefree","anxious","angry"],
  textposition: 'top center',
  textfont: {
    family:  'Raleway, sans-serif',
    size:10
  },
  marker: { size: 12 ,
          color: "rgb(182, 185, 191)"}
  };

  var data = [trace1];

  var layout = { 
    width: 600,
      height: 600,
      margin: {
      l: 100,
      r: 100,
      b: 100,
      t: 100,
      pad: 0,
    },
  xaxis: {
    title: "Valence",
    range: [ -1, 1 ],
    zeroline: true,
     showline: true,
    linewidth: 3,
    zerolinewidth: 1, 
    
  },
  yaxis: {
    title: "Arousal",
    range: [-1, 1],
    zeroline: true,
     showline: true,
    linewidth: 3,
    zerolinewidth: 1
  },
  legend: {
    y: 0.5,
    yref: 'paper',
    font: {
      family: 'Arial, sans-serif',
      size: 20,
      color: 'grey',
    }
  },
  title:'Emotion tags in Valence-Arousal space'
  }
   
  Plotly.newPlot(divID, data, layout);

}

function vatagsplot18(divID) {
  var trace1 = {
  x: [-0.8475,-0.5375,-0.5175,-0.0475,-0.03,0.0625,0.0875,0.375,0.3775,0.4825,0.5,0.625,0.66,0.6925,0.8025,0.525,0.65,-0.5125],
  y: [-0.2175,0.5425,0.15,0.48,-0.4325,0.155,-0.25,0.035,-0.1975,-0.03,-0.6525,0.1,0.24,-0.5325,0.3725,0.195,0.54,-0.5425],
  mode: 'markers+text',
  type: 'scatter',
  name: 'emotion tags',
  text: ["sad","angry","harsh","anxious","reserved","complex","reverent","warm","innocent","tender","relaxed","bright","sweet","peaceful","happy","hopeful","excite","bored"],
  textposition: 'top center',
   hoverinfo: 'text',
  textfont: {
    family:  'Raleway, sans-serif',
    size:10
  },
  marker: { size: 12 ,
          color: "rgb(182, 185, 191)"}
  };

  var data = [trace1];

  var layout = { 
    width: 600,
      height: 600,
      margin: {
      l: 100,
      r: 100,
      b: 100,
      t: 100,
      pad: 0,
    },
  xaxis: {
    title: "Valence",
    range: [ -1, 1 ],
    zeroline: true,
     showline: true,
    linewidth: 3,
    zerolinewidth: 1, 
    
  },
  yaxis: {
    title: "Arousal",
    range: [-1, 1],
    zeroline: true,
     showline: true,
    linewidth: 3,
    zerolinewidth: 1
  },
  legend: {
    y: 0.5,
    yref: 'paper',
    font: {
      family: 'Arial, sans-serif',
      size: 20,
      color: 'grey',
    }
  },
  title:'Emotion tags in Valence-Arousal space'
  }
   
  Plotly.newPlot(divID, data, layout);

}


function saveID(){
  var userid = document.getElementById("useridinput")
  if(userid != null){
    game.userID = userid.value;
  }else{
    game.userID = 'star';
  }
  console.log("User ID: ", game.userID)
}



function lineplotandcmes(lineplotID){

  d3 = Plotly.d3;
  var m= timeLogIn;
  var a=m.Arousal;
  var v=m.Valence;
  var t=m.videotime;
   
  var time1=0;
  var time2=51;
  trace1 = {
    type: 'scatter',
    x: t,
    y: a,
    mode: 'lines+markers',
    name: 'Arousal',
    line: {
      dash: 'dot',
      shape: 'hv',
      color: 'rgb(219, 64, 82)',
      width: 1
    },
    marker:{size:16, color:'rgb(219, 64, 82)'}
  };

  trace2 = {
    type: 'scatter',
    x: t,
    y: v,
    mode: 'lines+markers',
    name: 'Valence',
    line: {
      dash: 'dot',
      shape: 'hv',
      color: 'rgb(55, 128, 191)',
      width: 1
    },
    marker:{size:16, color:'rgb(55, 128, 191)'}
  };

  var layout = {
      width: 600,
      height: 240,
      margin: {
      l: 78,
      r: 20,
      b: 40,
      t: 10,
      pad: 0
    },
    
    autosize: true,
    xaxis: {
      title: 'Time',
      
      range:[time1,time2]
      
      
    },
   yaxis: {
      title: 'Emotion Rating Value',
      // range:[0 1]
     
      range:[0,1]
    },
  };

  var data = [trace1, trace2];
 

 Plotly.newPlot(lineplotID, data, layout);
 var myPlot = document.getElementById(lineplotID);
 
comment= new Object;
var game =new Object;

game.userid=[];
game.useridlist=[];
game.pointlist=[];
game.indexlist=[];

myPlot.on('plotly_click', function(data){
    var pts = '';
    var ptsx= [];
    var ptsy= [];
    var ptidx=[];
    
    for(var i=0; i < data.points.length; i++){
        pts = 'time= '+data.points[i].x.toPrecision(2) +'sec as\n\nArousal = '+
            a[data.points[i].pointNumber]+"\nValence ="+ v[data.points[i].pointNumber] +'\nEmotion Tags = dark'+ '\n\n';
      ptsx= data.points[i].x;
      //ptidx=data.points[i].y.id;   
    }
    
    confirm('You rated the emotion of the music at '+pts+"\n\n Do you want to confirm the rating? ");
  
  
  var userid = prompt("Enter your reason for this rating point : ", "");
  if(userid != null){
    game.userID = userid;
  }else{
    game.userID = 'star';
  }
  console.log("User ID: ", game.userID);
  
  game.useridlist.push(game.userID);
  game.pointlist.push(ptsx);
  game.indexlist.push(ptidx);

  
  
}
  
);
comment.game1=game;

}


function logRelay(command){
  if (command === 'trialsLog'){
    // game.player.forEach( function (arrayItem){// push data of each trial into the whole
    //   log.playerLog.push(arrayItem);
    // });
    // game.currentGame.forEach( function (arrayItem){
    //   log.currentGameLog.push(arrayItem);
    // });
    timeLogIn.userID.forEach( function (arrayItem){
      log.playerLog.push(arrayItem);
     });
    timeLogIn.eachClick.forEach( function (arrayItem){
      log.eachClickLog.push(arrayItem);
     });
    timeLogIn.Valence.forEach( function (arrayItem){
      log.ValenceLog.push(arrayItem);
     });

    timeLogIn.Arousal.forEach( function (arrayItem){
      log.ArousalLog.push(arrayItem);
     });

    timeLogIn.videotime.forEach( function (arrayItem){
      log.videotimeLog.push(arrayItem);
     });
    


    // timeLogIn.clickInterval.forEach( function (arrayItem){
    //   log.clickIntervalLog.push(arrayItem);
    // });
    // timeLogIn.timeSpan.forEach( function (arrayItem){
    //   log.timeSpanLog.push(arrayItem);
    // });
  }else if(command === 'clearall'){
    log.playerLog=[];
    log.videotimeLog=[];
    log.ArousalLog=[];
    log.ValenceLog=[];
    log.eachClickLog=[];
    log.logMov1=[];
    log.logMov2=[];
  }else if(command === 'clearexceptmov1'){
    log.playerLog=[];
    log.videotimeLog=[];
    log.ArousalLog=[];
    log.ValenceLog=[];
    log.eachClickLog=[];
    log.logMov2=[];  
  }else if(command === 'mov1'){
    log.logMov1.push(log.eachClickLog);
    //log.logMov1.push(log.timeSpanLog);
    //log.logMov1.push(log.clickIntervalLog);
    log.logMov1.push(log.playerLog);
    log.logMov1.push(log.videotimeLog);
    console.log("aha");
    log.logMov1.push(log.ArousalLog); 
    log.logMov1.push(log.ValenceLog);
   
  }else if(command === 'mov2'){
    log.logMov2.push(log.eachClickLog);
    log.logMov2.push(log.playerLog);
    log.logMov2.push(log.videotimeLog);
    log.logMov2.push(log.ArousalLog);
    log.logMov2.push(log.ValenceLog);
   

  }else if(command === 'levelLog3'){
    log.logLevel3.push(log.eachClickLog);
    log.logLevel3.push(log.timeSpanLog);
    log.logLevel3.push(log.clickIntervalLog);
    log.logLevel3.push(log.playerLog);
    log.logLevel3.push(log.currentGameLog);
  }
}


function sendLog(log) {
  $.post( "/", {id: game.userID, log: JSON.stringify(log), time: timeLogIn.utcDate, condition: gameCondition})
    .done(function( response ) {
      console.log("Remote log: ", response, "userID: ", game.userID);
    })
}

function saveUserID(){
  var userid = prompt("Enter your username : ", "your username here");
  if(userid != null){
    game.userID = userid;
  }else{
    game.userID = 'star';
  }
  console.log("User ID: ", game.userID)
}

function downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }


// var lastGameLevel = 0;
// var whereAmI = 0;

// function newGame() {
//   document.body.style.backgroundColor = 'black';
//   var rootElement = document.getElementById("playGround");
//   if(rootElement.hasChildNodes()){
//       while(rootElement.firstChild){
//         rootElement.removeChild(rootElement.firstChild)
//       }
//     }
//   noteCountGen();//for random level
//   progressBar('progress')
//   gameZone();
//   addCount();
// }
// function gameZone(){
//   var gameZone = document.createElement("div");
//   gameZone.classList.add("gamefield")
//   $("#playGround").append(gameZone);
//   console.log(gameZone)
// }

// function progressBar(catchBar){
//   var bar = document.createElement("div");
//   if(catchBar === 'progress'){
//     bar.classList.add("progress-wrap");
//     bar.classList.add("progress");
//     $("#playGround").append(bar);
//   }else{
//     bar.classList.add("result-wrap");
//     bar.classList.add("result");
//     bar.style.marginBottom = '70px';
//     $('#threeCircleRow').append(bar);
//   }

//   var barbar = document.createElement("div");
//   if(catchBar === 'progress'){
//     barbar.classList.add("progress-bar");
//     barbar.classList.add("progress");
//   }else{
//     if(catchBar === 'result1'){
//       barbar.classList.add("result-bar1");
//     }else if(catchBar === 'result2'){
//       barbar.classList.add("result-bar2");
//     }else if(catchBar === 'result3'){
//       barbar.classList.add("result-bar3");
//     }
//     barbar.classList.add("result");
//   }
//   $(bar).append(barbar);
// }

// function moveProgressBar(catchBar) {
//   if (catchBar === 'progress'){
//     whereAmI = whereAmI + 2;
//     var progressPercen = whereAmI/100;
//     var getProgressWrapWidth = $('.progress-wrap').width();
//   }else{
//     if (catchBar === 'results1'){
//       whereAmI = errorLevel1;
//       var progressPercen = 1 - whereAmI/(3*16);//************
//     }else if (catchBar === 'results2'){
//       whereAmI = errorLevel2;
//       var progressPercen = 1 - whereAmI/(4*16);//************
//     }else if (catchBar === 'results3'){
//       whereAmI = errorLevel3;
//       var progressPercen = 1 - whereAmI/(5*16);//************
//     }
//     var getProgressWrapWidth = $('.result-wrap').width();
//   }

//   var progressTotal = progressPercen * getProgressWrapWidth;

//   if(catchBar === 'progress'){ //-----progress bar
//     var animationLength = 500;
//     $('.progress-bar').stop().animate({
//       left: progressTotal
//     }, animationLength);
//   }else{  //--------------------------results
//     var animationLength = 1500;
//     if(catchBar === 'results1'){
//       $('.result-bar1').stop().animate({
//         left: progressTotal
//       }, animationLength);
//     }else if(catchBar === 'results2'){
//       $('.result-bar2').stop().animate({
//         left: progressTotal
//       }, animationLength);
//     }else{
//       $('.result-bar3').stop().animate({
//         left: progressTotal
//       }, animationLength);
//     }
//   }
// }


// function circle (id) {
//   var circle = document.createElement("div");
//   circle.id = id;
//   circle.classList.add("gamebutton");
//   circle.addEventListener('click', function (event) {
//     addTimeLog(game.noteCount); // everytime when the circle is clicked, time log will be wrote.
//     addToPlayer(this.id)
//   }, false);
//   return circle;
// }

// function createRow(x) {
//   var row = document.createElement('div');
//   if(x === 'vertical'){
//     row.classList.add('verticalRow');
//     row.id = "verticalRow";
//     } 
//   else{
//     row.classList.add('horizontalRow');
//     row.id = 'horizontalRow'; 
//     }
//   return row;
// }
// // This is another place changed accordingly for playing the same trials.
// function clearElements(){ // this function will call between each trials.
//   if(document.getElementById('verticalRow')){ //remove the first example before showing the next
//       while(document.getElementById('verticalRow')){
//         $("#verticalRow").remove();
//         consloe.log("clear");
//       }
//     }
// }

// // This is main part to keep all the trials identical. 
// // Main difference with other versions.
// function addCount() {
//   clearLogBox(); // clear all the temp log each time before new trial begin.
//   clearElements();
//   var rootElement = document.getElementsByClassName("gamefield");
//   for(var i=0; i<game.noteCount[game.levelCount-1]; i++){
//   var row = createRow('vertical');
//   row.appendChild(circle(game.possibilities[i]));

//   $(".gamefield").append(row);
//   // rootElement.appendChild(row);
//   }
//   generateMove(game.noteCount[game.levelCount-1]);
// }
// function noteCountGen(){
//   game.levelCount++;
//   for(var i = 3; i <= 5; i++){
//     // var temp = Math.floor(Math.random()*(6-3)) + 3;
//     // if(checkRepeatLevel(temp)){ //no repeat levels in the sequence
//     //   game.noteCount.push(temp);
//     //   console.log('game.noteCount...' + game.noteCount);
//     // }else{
//     //   i--;
//     // }
//     game.noteCount.push(i); 
//   }
// }
// function checkRepeatLevel(curr){
//   for(var i=0; i<=game.noteCount.length; i++){
//     if(curr === game.noteCount[i]){
//       return false;
//       // break;
//     }
//   }
//   return true;
// }

// function clearLogBox(){
//   game.currentGame = [];
//   game.player = [];
//   timeLogIn.eachClick = [];
//   timeLogIn.clickInterval = [];
//   timeLogIn.timeSpan = [];
//   game.trialCount++;
// }

// function showMoves() {
//   var i = 0;
//   var moves = setInterval(function(){
//     playGame(game.currentGame[i]);
//     i++;
//     if (i >= game.currentGame.length) {
//       clearInterval(moves);
//     }
//   }, 400)
// }

// function soundMatch(idName) {
//   var cNotes = document.getElementById("cNotes");
//   var dNotes = document.getElementById("dNotes");
//   var eNotes = document.getElementById("eNotes");
//   var gNotes = document.getElementById("gNotes");
//   var aNotes = document.getElementById("aNotes");
//   if (gameCondition === 'con1' || gameCondition === 'con2' || gameCondition === 'con5'){
//     switch(idName) {
//       case'c1':
//         notePlay(cNotes);
//         break;
//       case 'c2':
//         notePlay(dNotes);
//         break;
//       case 'c3':
//         notePlay(eNotes);
//         break;
//       case 'c4':
//         notePlay(gNotes);
//         break;
//       case 'c5':
//         notePlay(aNotes);
//         break;
//     };
//   }else{
//     switch(idName) {
//       case'c5':
//         notePlay(cNotes);
//         break;
//       case 'c4':
//         notePlay(dNotes);
//         break;
//       case 'c3':
//         notePlay(eNotes);
//         break;
//       case 'c2':
//         notePlay(gNotes);
//         break;
//       case 'c1':
//         notePlay(aNotes);
//         break;
//     };
//   }
// }

// function notePlay(note){
//   // console.log("note..." + note);
//   note.currentTime = 0.7;
//   note.play();
// }

// function playGame(field) {
//   var tempID = "#" + field;
//   soundMatch(field);
//   setTimeout(function(){
//     $(tempID).addClass('hover');
//   }, 50);
//   setTimeout(function(){
//       $(tempID).removeClass('hover');
//   }, 300);//300
// }

// function addToPlayer(id) {
//   //var field = "#"+id;
//   var field = id;
//   game.player.push(field);
//     playerTurn(field);
// } 

// 

// function playerTurn(id) {
//     soundMatch(id);
//     var check = game.player.length === game.currentGame.length; //check if input is finished
//     if (check) {
//       trialTime('end'); // end of counting time span
//       logRelay('trialsLog');
//       moveProgressBar('progress');

//       if(game.trialCount == 1){ //16 trials for each level.
//         errorRate();
//         if(game.levelCount !== 3){//hand logs of all the trials in this level 
//           if (game.currentGame.length === 3){
//             logRelay('levelLog1');
//           }else if(game.currentGame.length ===4){
//             logRelay('levelLog2');
//           }else{
//             logRelay('levelLog3');
//           }
//           logRelay('clear'); //release level log relay for next the level
//           setTimeout(function(){
//             alert('Good move! You can take a short break if you want. Start the next level by clicking the button below.\n 好样的！您可稍作休息，如若继续，点击下面的按钮开始下一级。');
//           }, 300);
//           setTimeout(function(){
//             nextTrial(true);
//           }, 600);
//          }
//         else if(game.levelCount === 3){
//           if (game.currentGame.length === 3){
//             logRelay('levelLog1');
//           }else if(game.currentGame.length ===4){
//             logRelay('levelLog2');
//           }else{
//             logRelay('levelLog3');
//           }
//           setTimeout(function(){
//           alert('Congratulations! Now you finished all the trials! Many thanks!\n恭喜！您完成了所有的游戏，非常感谢！');
//           }, 300);
//           setTimeout(function(){
//             showResults();
//             // lastPage();
//           }, 600);
//           logTrial(log, log.logLevel1, log.logLevel2, log.logLevel3);
//           sendLog(log.log);
//         }
//       } else {
//         setTimeout(function(){
//           clearElements(); 
//         }, 300);
//         setTimeout(function(){
//           nextTrial();
//         }, 600);
//       }
//     }
// }

// function logTrial(log, level1, level2, level3) {
//   if (log.log instanceof Array) {
//       log.log.push({
//       firstLevel: level1,
//       secondLevel: level2,
//       thirdLevel: level3
//     });
//   } else {
//     log.log = [];
//     logTrial(log, level1, level2, level3);  
//   }
//   console.log('Current Log: ', log.log);
// }

// function nextTrial(NextLevel) {
//   goToNextLevel = false || NextLevel;
//   if (goToNextLevel) {
//     game.trialCount = 0;
//     game.levelCount += 1;
//   }
//   addCount();
// }

// function checkRepeat(randomX){
//   var x = randomX;
//   for(var i=0; i<=game.currentGame.length; i++){
//     if(x === game.currentGame[i]){
//       return false;
//       break;
//     }
//   }
//   return true;
// }

// function generateMove(times){
//   for(var i = 0; i < times; i++){
//     var cur = game.possibilities[(Math.floor(Math.random()*times))];
//     if(checkRepeat(cur)){ //make sure there's no repeat notes in the sequence
//       game.currentGame.push(cur);
//     }else i--;
//   }
//   showMoves();
// }

