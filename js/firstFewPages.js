


var page = 3;






function pagePivot(pageIndex_static){
    // console.log(pageIndex, page);
    switch(pageIndex_static) {
    case 2:
      beforePrime();
      break;
    case 3:
      pageRating();
      page=5;
      
      // var page3 = document.createElement('div')
      // page3.classList.add("page3");
      // $(".gamefield").append(page3);
      // if(gameCondition !== 'con5' && gameCondition !== 'con6'){
      //   beforePrime();
      // } else {
      //   setupDemo();
      //   pageWarmup ();
      //   page = 7;
      // }
      break;
    case 4: 
      primePrepare(gameCondition);
      break;
    case 5:
      beforeexplain();
      break;
    case 6:
      pageExplain();
      break;
    case 7:
      pageT3 ();
      break;
    case 8:
      newGame();
      break;
    case 9:
      pageRating();
      break; 
    case 10:
      pageRating();
      break;   
    };
  
}
// --------open google form---------



// function conditionBtns(arrBtn){
//   for(var i = 0; i<game.condition.length; i++){
//     arrBtn [i] = document.createElement("BUTTON");
//     arrBtn [i].innerHTML = "Condition " + (i+1) + "<br>" + "环境" + (i+1);
//     arrBtn [i].classList.add("button");
//     arrBtn [i].id = game.condition[i];
//     console.log("The condition " + arrBtn [i].id + " is created");
//   }
//   arrBtn.forEach(function(element){
//     element.addEventListener('click', function(){
//       gameCondition = element.id;
//       console.log("The condition " + gameCondition + " is clicked");
//       pagePivot(page++);
//     });
//   });
// }

// function btnUtility (btnContent){
//   var arrBtn = document.createElement("BUTTON");
//   arrBtn.classList.add("button");
//   arrBtn.innerHTML = btnContent;
//   return arrBtn;
// }

function btnNext(catchBtn){//****************
  var btndiv = document.createElement("div");
  btndiv.classList.add("center");
  var aBtn = document.createElement('button');
  aBtn.innerHTML = 'Continue ❯';
  aBtn.classList.add("btnNEXT");
  aBtn.addEventListener('click', function () {
    if (catchBtn === 'nothing'){//********************
      console.log('The current page is: ' + page);
      pagePivot(page++);       
      }else{
        lastPage();
      }
    });
  btndiv.appendChild(aBtn);
  btndiv.appendChild(document.createElement('br'));
  // console.log(log);
  // console.log(timeLogIn);
  return btndiv;
}



// // function pageCondition(){
// //   var arrBtn = new Array();
// //   $(".Page1").remove();
// //   $(".center").remove();
  
// //   var page2 = document.createElement('div')
// //   page2.classList.add("page2");
// //   $(".gamefield").append(page2);
  
// //   var paragraph = document.createElement("p");
// //   paragraph.id = 'conditions';
// //   paragraph.innerHTML = "Please choose this condition to continue."+ "<br>" + "请选择如下环境进入下一页。";
// //   $(".page2").append(paragraph);

// //   var divForBtn = document.createElement('div');
// //   divForBtn.classList.add("conditions");
// //   $(".page2").append(divForBtn);

// //   conditionBtns(arrBtn);
// //   // $(".page2").append(arrBtn[(Math.floor(Math.random()*arrBtn.length))]);//display one random condition
// //   $(".page2").append(arrBtn); //display all six conditions
// //   // $(".page2").append(arrBtn[4]); //display condition 1
// }
//INSTRUCTION PAGE
function beforePrime(){
  $(".Page1").remove();
  
  var page3 = document.createElement('div')
  page3.classList.add("page3");
      $(".gamefield").append(page3);
      
  var paragraph = document.createElement("p");
  paragraph.classList.add("explainRating");
  paragraph.innerHTML = "You will play a warm-up games for practice, but before that, please watch some videos / animations." + "<br>" + "一会儿有一个热身游戏给您练手，不过请先看如下视频或动画。";
  
  $(".page3").append(paragraph);
  // btnNext('nothing')
   var btndiv = btnNext('nothing');
   $(".constant").append(btndiv);
}

//INSTRUCTION Page2
function beforeexplain(){
  $(".page2").remove();
  $(".center").remove();
  
  var page3 = document.createElement('div')
  page3.classList.add("page3");
      $(".gamefield").append(page3);
      
  var paragraph = document.createElement("p");
  paragraph.classList.add("explainRating");
  paragraph.innerHTML = "You will listen back to a few short segements, but before that, please watch some videos / animations." + "<br>" + "一会儿有一个热身游戏给您练手，不过请先看如下视频或动画。";
  
  $(".page3").append(paragraph);
  // btnNext('nothing')
   var btndiv = btnNext('nothing');
   $(".constant").append(btndiv);
}

//-----First Rating Page------
function pageRating(){
  $(".page3").remove();
  var arrBtn = new Array();
  $(".center").remove();

  //Application.init()
  var page2 = document.createElement('div')
  page2.classList.add("page2");

  $(".gamefield").append(page2);

  var paragraph = document.createElement("p");
  var header = document.createElement("h2");

  header.id="name"
  paragraph.id = 'conditions';
  header.innerHTML = "Video clips"
  paragraph.innerHTML = "Please rate the emotion in the clip";

  $(".page2").append(header);
  $(".page2").append(paragraph);

  canvasPrepare ("con2");

  var btndiv = btnNext('nothing');
  $(".constant").append(btndiv);

  logRelay("clearall");
  logRelay("trialsLog");
  logRelay("mov1");

}







function canvasPrepare (gameCondition){

    var ifrm = document.createElement("div");
    ifrm.classList.add("ifrm");
    ifrm.id = "myvideo";
    $(".page2").append(ifrm);
    var canvasscale= 1
    if(gameCondition === "con2" || gameCondition === "con3"){ 
      var step = 20*canvasscale;
      var ctd = document.createElement("div");
      ctd.id = "ddd"; 
      ctd.classList.add("ddd");
      ctd.style.position = "absolute";
      ctd.style.left = "800px";
      ctd.style.top = "250px";
      $(".page2").append(ctd);

      var canvas_e = document.createElement("canvas");
      canvas_e.id = "mycanvas";
      canvas_e.position="absolute";
      canvas_e.width = 320*canvasscale;
      canvas_e.height = 320*canvasscale;

      // var datelabel = document.createElement('div')
      // document.getElementById('ddd').appendChild(datelabel);

      }

    drawCanvas();

    var datalabel = document.createElement('div');
      //datalabel.classList.add("ddd");
    datalabel.id="emotionlabel";
    
    document.getElementById('ddd').append(datalabel);

    const player1 =jwplayer("myvideo").setup({
    
      //file: "https://content.jwplatform.com/videos/eToUBrbD-RRiR9dl9.mp4",
      //wangwang
      //file:"https://content.jwplatform.com/videos/9las3Az9-To6C1UXs.mp4",
      // file:"https://content.jwplatform.com/videos/yAY0yvTN-u8GeqODi.mp4",
      // wholemovment
      file:"https://content.jwplatform.com/videos/5kSUgpvz-To6C1UXs.mp4",
      
      width: 600,
      height: 404,
      repeat: true,
      //aspectratio: '16:9',
      autostart: false
    });
    
    function getVideoCurrentime() {
      return player1.getPosition();
      console.log(player1.getPosition());
    }

    console.log($('.btnNEXT')); 

    var canvas_R = document.getElementById('mycanvas');

    canvas_R.addEventListener('click', function(evt) {
      var mousePos = getMousePos(canvas_R, evt);
      var videotimestamp= getVideoCurrentime();
      var message = "UserID:"+game.userID+',Mouse position: x=' + mousePos.x + ',&y=' + mousePos.y+',&time'+mousePos.clickdate+",videotime="+videotimestamp;
      var rating = {UserID: game.userID,
      Valence: mousePos.x,
      Arousal: mousePos.y,
      Time: mousePos.clickdate,
      videotime: videotimestamp};
  
      setMarker(canvas_R,evt);
      var timeLogIn= addTimeLog(rating);   
      console.log(message);
    });



    function drawCanvas () {
      //$(".explainRemove").remove();
      var ctx = canvas_e.getContext("2d");
        //canvas background
      for (var y = 0; y < 320*canvasscale; y += step) {
          var tl= {r: 200, g: 0, b: 0 };
          var tr= { r: 200, g: 150, b: 0 };
          var bl= { r: 0, g: 50, b: 100 };
          var br= { r: 200, g: 230, b: 80 };

          var left = interpolateColor(tl, bl, y / (320*canvasscale));
          var right =interpolateColor(tr, br, y / (320*canvasscale));
      for (var x = 0; x < 320*canvasscale; x += step) {
          var color = interpolateColor(left, right, x /( 320*canvasscale));
          ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
          ctx.fillRect(x*canvasscale, y*canvasscale, step, step);
        }
      }
      function interpolateColor (a, b, x) {
        return {
        r: Math.floor(a.r + (b.r - a.r) * x),
        g: Math.floor(a.g + (b.g - a.g) * x),
        b: Math.floor(a.b + (b.b - a.b) * x)
        };
      }
      // canvas x,y 
      ctx.beginPath();
      ctx.strokeStyle = "rgb(0,0,0)";
      ctx.moveTo(0, 160*canvasscale);
      ctx.lineTo(320*canvasscale, 160*canvasscale);
      ctx.stroke();
      
      ctx.fillStyle = "rgb(0,0,0)";
      ctx.beginPath();
      ctx.moveTo(320*canvasscale, 160*canvasscale);
      ctx.lineTo(310*canvasscale, 150*canvasscale);
      ctx.lineTo(310*canvasscale, 170*canvasscale);
      ctx.fill();

      ctx.strokeStyle = "rgb(0,0,0)";
      ctx.moveTo(160*canvasscale, 320*canvasscale);
      ctx.lineTo(160*canvasscale, 0*canvasscale);
      ctx.stroke();
      
      ctx.fillStyle = "rgb(0,0,0)";
      ctx.beginPath();
      ctx.moveTo(160*canvasscale, 0*canvasscale);
      ctx.lineTo(150*canvasscale, 10*canvasscale);
      ctx.lineTo(170*canvasscale, 10*canvasscale);
      ctx.fill();

      ctx.font = "16px Arial";
      ctx.fillText("Valence", 200*canvasscale, 158*canvasscale); 
      ctx.save();
      ctx.translate(158*canvasscale, 120*canvasscale);
      ctx.rotate(Math.PI * 1.5);
      ctx.font = "16px Arial";
      ctx.fillText("Arousal", 0*canvasscale, 0*canvasscale);  
      ctx.restore();
      $(".ddd").append(canvas_e); 
      //var emotiontext = document.createTextNode(text);
    }
  
    function addTimeLog(rating){

    timeLogObj = new Date();
    timeLogIn.sec = timeLogObj.getUTCSeconds();;
    timeLogIn.min = timeLogObj.getUTCMinutes();;
    timeLogIn.hour = timeLogObj.getUTCHours();;
    timeLogIn.month = timeLogObj.getMonth();
    timeLogIn.year = timeLogObj.getUTCFullYear();
    timeLogIn.date = timeLogObj.getUTCDate();
    timeLogIn.utcDate = new Date(Date.UTC(timeLogIn.year, timeLogIn.month, timeLogIn.date, timeLogIn.hour, timeLogIn.min, timeLogIn.sec));
    var start = new Date ();
    timeLogIn.Arousal.push();
    //timeLogIn.clickInterval.push(clickInterval(level));
    timeLogIn.Arousal.push(rating.Arousal);
    timeLogIn.Valence.push(rating.Valence);
    timeLogIn.videotime.push(rating.videotime); 
    timeLogIn.userID.push(rating.UserID);
    timeLogIn.eachClick.push(timeLogIn.utcDate);
    return timeLogIn;
    }  

    function setMarker(canvas_R,evt) {

      var rect = canvas_R.getBoundingClientRect();
      marker = {
              x: ((evt.clientX - rect.left)).toFixed(3),
              y: ((evt.clientY - rect.top)).toFixed(3),
      };
      drawCanvas ();
      // draw marker
      ctx=document.getElementById('mycanvas').getContext("2d");
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.beginPath();
      ctx.arc(marker.x, marker.y, 20, 0, Math.PI*2, true); 
      ctx.fill();

      var moods= [
      ['power',0.69,0.71,0.79,1],
      ['bright',0.81,0.55,0.67,2],
      ['brutal',0.23,0.7,0.45,3],
      ['confused',0.28,0.63,0.41,4],
      ['rock',0.57,0.44,0.52,5],
      ['serious',0.51,0.38,0.52,6],
      ['relaxed',0.75,0.17,0.57,7],
      ['calm',0.72,0.33,0.67,8],
      ['dark',0.46,0.41,0.48,9],
      ['dirty',0.26,0.49,0.46,10],
      ['energy',0.78,0.74,0.74,11],
      ['fun',0.92,0.78,0.73,12],
      ['aggressive',0.51,0.6,0.57,13],
      ['scary',0.28,0.71,0.33,14],
      ['positive',0.88,0.57,0.65,15],
      ['sad',0.08,0.39,0.31,16]];
    
      var x = ((evt.clientX - rect.left)/320).toFixed(3);
      var y =(1-(evt.clientY - rect.top)/320).toFixed(3);

      
      datalabel=document.getElementById('emotionlabel');
      datalabel.innerHTML =findMood(x, y);
      document.getElementById('ddd').append(datalabel);

      function findMood(x, y) {
        var distance = 1;
        var index = null;
        
        for (var i = 0; i < moods.length; i++) {
          var mood = moods[i];
          var dx = Math.abs(mood[1] - x);
          var dy = Math.abs(mood[2] - y);
          var d = Math.sqrt(dx * dx + dy * dy);

          if (d < distance) {
            distance = d;
            index = i;
          }
        }

        return moods[index][0];
      }
    }

}

function getMousePos(canvas, evt) {

    var canvas = document.getElementById('mycanvas');
    var context = canvas.getContext('2d');
    var rect = canvas.getBoundingClientRect();
    var date = new Date ();
    var timeStamp = date.getTime ()
    var timeString=  date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()+ "@"+date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();   
  

    return {
          x: ((evt.clientX - rect.left)/320).toFixed(3),
          y: (1-((evt.clientY - rect.top)/320)).toFixed(3),
          clickdate: timeString,
          unixtime:timeStamp
        };
}

