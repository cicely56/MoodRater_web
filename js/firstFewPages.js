


var page = 3;


function pagePivot(pageIndex_static){
    // console.log(pageIndex, page);
    switch(pageIndex_static) {
    case 2:
      pageCondition();
      break;
    case 3:
      var page3 = document.createElement('div')
      page3.classList.add("page3");
      $(".gamefield").append(page3);
      if(gameCondition !== 'con5' && gameCondition !== 'con6'){
        beforePrime();
      } else {
        setupDemo();
        pageWarmup ();
        page = 7;
      }
      break;
    case 4: 
      primePrepare(gameCondition);
      break;
    case 5:
      whichPrime();
      break;
    case 6:
      pageWarmup ();
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
    };
  
}
// --------open google form---------
function openWin() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScE3FndFEPAzkbyVPFBA4BbYVWVqoCexJpS5eqOQf1AfWA36g/viewform?usp=pp_url");
}


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
  aBtn.innerHTML = '❯';
  aBtn.classList.add("btnNEXT");
  aBtn.addEventListener('click', function () {
    if (catchBtn === 'nothing'){//********************
      pagePivot(page++); 
      console.log('The current page is: ' + page);
      }else{
        lastPage();
      }
    });
  btndiv.appendChild(aBtn);
  btndiv.appendChild(document.createElement('br'));
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

//-----First Rating Page------
function pageRating(){
  var arrBtn = new Array();
  $(".Page1").remove();
  $(".center").remove();

  //Application.init()
  var page2 = document.createElement('div')
  page2.classList.add("page2");


  $(".gamefield").append(page2);


// var d = document.createElement("div");
//     d.classList.add("ddd");
//   // d.id = "ddd"; 
//     d.style.position = "absolute";
//     d.style.left = "800px";
//     d.style.top = "180px";
//     $(".page2").append(d);


  var paragraph = document.createElement("p");
  var header = document.createElement("h2");

  header.id="name"
  paragraph.id = 'conditions';
  header.innerHTML = "Video clips"
  paragraph.innerHTML = "Please rate the emotion in the clip";

  $(".page2").append(header);
  $(".page2").append(paragraph);
 //AROUSAL-VALENCE SPACE canvas prepare

  //Vedio player
  //PB_CMT()
  

  //
  canvasPrepare ("con2");




  // var paragraph = document.createElement("p");
  // paragraph.id = 'conditions';
  // paragraph.innerHTML = "Please rate the emotion in the clip";
  // $(".page2").append(paragraph);
  // var divForBtn = document.createElement('div');
  // divForBtn.classList.add("conditions");
  // $(".page2").append(divForBtn);

  //conditionBtns(arrBtn);
  // $(".page2").append(arrBtn[(Math.floor(Math.random()*arrBtn.length))]);//display one random condition
  //$(".page2").append(arrBtn); //display all six conditions
  // $(".page2").append(arrBtn[4]); //display condition 1
}


function beforePrime(){
  $(".page2").remove();
  
  var paragraph = document.createElement("p");
  paragraph.classList.add("explainRemove");
  paragraph.innerHTML = "You will play a warm-up games for practice, but before that, please watch some videos / animations." + "<br>" + "一会儿有一个热身游戏给您练手，不过请先看如下视频或动画。";
  $(".page3").append(paragraph);

  var btndiv = btnNext('nothing');
  $(".constant").append(btndiv);
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
    //file:"https://content.jwplatform.com/videos/yAY0yvTN-u8GeqODi.mp4",
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
    var videotimestamp=getVideoCurrentime();
    var message = "UserID:"+game.userID+',Mouse position: x=' + mousePos.x + ',&y=' + mousePos.y+',&time'+mousePos.clickdate+",videotime="+videotimestamp;
    setMarker(canvas_R,evt);
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
    
// var page2 = document.createElement('div')
//   page2.classList.add("page2");


//   $(".gamefield").append(page2);
    
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


    
    //var newDiv = document.createElement('div');
    //var newContent = document.createTextNode('Hello');
    //newDiv.appendChild(datalabel);

    

    // canvas_e.append(datelabel);
    // datelabel.innerHTML ="hellllllllllllllllo";

    // var text = '#write_whatever';


    
    // // ctx.clearRect(0, 0, 10, 20);
    // ctx.fillStyle = "#3e3e3e";
    // ctx.font = "16px Arial";
    // ctx.fillText(text, 20, canvas_R.height -80);
    

    // datelabel.style.position= "relative";
    // datelabel.style.left="0px"
    // datelabel.style.top="350px"

//     d.style.left = "800px";
//     d.style.top = "180px";
    
    


  }
    
      
    //var x = event.pageX / 320;
    //var y = 1 - event.pageY / 320;

    //this.label.innerHTML = this.findMood(x, y);
  

  // findMood: function(x, y) {
  //   var distance = 1;
  //   var index = null;
    
  //   for (var i = 0; i < this.moods.length; i++) {
  //     var mood = this.moods[i];
  //     var dx = Math.abs(mood[1] - x);
  //     var dy = Math.abs(mood[2] - y);
  //     var d = Math.sqrt(dx * dx + dy * dy);

  //     if (d < distance) {
  //       distance = d;
  //       index = i;
  //     }
  //   }

  //   return this.moods[index][0];
  // }

  // var list = [];
  // tl: { r: 200, g: 0, b: 0 },
  // tr: { r: 200, g: 150, b: 0 },
  // bl: { r: 0, g: 50, b: 100 },
  // br: { r: 200, g: 230, b: 80 },

  //document.getElementById("myvideo").appendChild(canvas_e);

    //$(".gamefield").append(canvas_e);
    //document.body.appendChild(canvas_e)
  
  //whichPrime();



//gameCondition




// function PB_CMT (){
//   if(page >= 4){
//     $("#myvideo").remove();
//   }

//   var ifrm = document.createElement("div");
//   ifrm.classList.add("ifrm");
//   ifrm.id = "myvideo";

//   $(".page2").append(ifrm);

//         // Setup the player
//   // const player = jwplayer('player').setup({
//   //           file: 'https://content.jwplatform.com/videos/ns8naR5X-u8GeqODi.mp4'
//   //       });


//   // var ifrm = document.createElement("div");
//   // ifrm.id = "myvideo";

//   const player1 =jwplayer("myvideo").setup({
  
//     file: "https://content.jwplatform.com/videos/ns8naR5X-u8GeqODi.mp4",
    
//         width: 600,
//         height: 480,
//         aspectratio: '16:9',
//         autostart: false
//       });

//   canvasPrepare ("con2")

//   function getVideoCurrentime() {
//   return player1.getPosition();

//   console.log(player1.getPosition());
// }
//   console.log($('.btnNEXT')); 

// }

  // var para = document.createElement("p");
  // para.classList.add("page2");
  // para.id = "displaytimes"; 
  // para.innerHTML = "Hello. " + " 第二次。"

  // $(".gamefield").append(para);

  // if(page === 5){
  //   para.innerHTML = "First time. " + " 第一次。";
  // }else if (page === 6){
  //   $("#displaytimes").remove();
  //   para.innerHTML = "Second time. " + " 第二次。";
  // // }

  // if(gameCondition === "con2"){
  //   if(page == 5){
  //     ifrm.setAttribute("src", "http://content.jwplatform.com/players/ns8naR5X-WDIJhdqp.html");//jwplayer
  //   }else{
  //     ifrm.setAttribute("src", "http://content.jwplatform.com/players/ns8naR5X-WDIJhdqp.html");
  //   }
  //   // ifrm.style.width = "(560*3)px";
  //   // ifrm.style.height = "(315*2)px";
  //   ifrm.style.width = "600px";
  //   ifrm.style.height = "400px";


  // }else{
  //   if(page == 5){
  //     ifrm.setAttribute("src", "http://content.jwplatform.com/players/lqCLzPyS-WDIJhdqp.html");//jwplayer
  //   }else{
  //     ifrm.setAttribute("src", "http://content.jwplatform.com/players/lqCLzPyS-WDIJhdqp.html");//jwplayer
  //   }
  //    // w=10;
  //   // ifrm.style.width = "560wpx";
  //   // ifrm.style.height = "(315*w)px";
  //   // ifrm.style.frameborder = "10"
  //   // ifrm.style.scrolling="audo"
  
  //   w=10;
  //   ifrm.style.width = "560px";
  //   ifrm.style.height = "315px";
  //   ifrm.style.frameborder = "10"
  //   ifrm.style.scrolling="audo"
  // }
  

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


    


// $(document).ready(function() {$('#mycanvas').click(function() {
//         var posX = $(this).offset().left, posY = $(this).offset().top;
//         console.log((e.pageX - posX)+ ' , ' + (e.pageY - posY))
//         alert((e.pageX - posX)+ ' , ' + (e.pageY - posY));
//     });
// });

// addEventListener('click', function(){

//       buttonDemo.innerHTML = "Play again?" + "<br>" + "再来一遍";
//       // if (btnNotPress === true){
//       //   btnNotPress = false;
//       //   var  buttonDemo2 = btnUtility("No, thanks, next." + "<br>" + "不了，下一页")
//       //   buttonDemo2.id = 'en_disable';
//       //   $(".page3").append(buttonDemo2);
//         buttonDemo2.addEventListener('click', function(){
//           pagePivot(page ++);
//           })
//         }
//       startDemo();
//     });



// function primePrepare (gameCondition){
//   $(".explainRemove").remove();
//   if(gameCondition === "con1" || gameCondition === "con3"){ 
//     var ctx = document.createElement("canvas");
//     ctx.id = "mycanvas";
//     ctx.width = 400;
//     ctx.height = 400;
//     $(".gamefield").append(ctx);
//   }
//   whichPrime();
// }

// function whichPrime(){
//   switch(gameCondition) {
//     case 'con1':
//       pitch_dimension("brightness");
//       break;
//     case 'con2':
//       PB_CMT(gameCondition);
//       break;
//     case 'con3': // case 'T'
//       pitch_dimension("elevation");
//       break;
//     case 'con4': // case 'T'
//       PB_CMT(gameCondition);
//       break;
//   };
// }

// function setupDemo() {
//   $(".button").remove(); 
//   $("#conditions").remove();
//   var btndiv = btnNext('nothing');
//   $(".constant").append(btndiv);
//   // console.log('Done setting up demo.');
// }

// function pageWarmup(){
//   console.log("come to pageWarmup");
//   $("#mycanvas").remove();
//   $("#displaytimes").remove();
//   $("#myvideo").remove();
//   var paragraph1 = document.createElement("p");
//   paragraph1.classList.add("temp");
//   paragraph1.innerHTML = "Time to play the warm-up game. In this game, you will first listen to a sound sequence, then you are expected to repeat the sequence by clicking the circle buttons on the screen. If you can, please do it as quickly and accurately as possible." + "<br>" + "接下来是热身游戏。你会先听到一串音符，伴随着一串圆环， 之后新的圆环序列会出现。你的任务是点击屏幕上的圆环，模仿你听到和看到的音序。请尽量用最短时间完成。";
//   $(".page3").append(paragraph1);

//   var  buttonDemo = btnUtility("Start" + "<br>" + "开始")
//   buttonDemo.id = 'en_disable';
//   $(".page3").append(buttonDemo);
//   var btnNotPress = true;
//   buttonDemo.addEventListener('click', function(){
//       buttonDemo.innerHTML = "Play again?" + "<br>" + "再来一遍";
//       if (btnNotPress === true){
//         btnNotPress = false;
//         var  buttonDemo2 = btnUtility("No, thanks, next." + "<br>" + "不了，下一页")
//         buttonDemo2.id = 'en_disable';
//         $(".page3").append(buttonDemo2);
//         buttonDemo2.addEventListener('click', function(){
//           pagePivot(page ++);
//           })
//         }
//       startDemo();
//     });
// }

// function startDemo(){
//   $('.button').attr("disabled", true); 
//   document.body.style.backgroundColor = 'black';
//   $('.backgroundRect').css("backgroundColor", "rgba(255,255,255,0)");
//   var rootElement = $(".page3");
//   warmUpGame(rootElement);
// }

// function buttonEnable (){
//   $('.button').attr("disabled", false);
// }

// function pageT3(){
//   $(".page3").remove();
//   var bgColorDiv = document.createElement("div");
//   var paragraph1 = document.createElement("p");
//   var paragraph2 = document.createElement("p");
//   var paragraph3 = document.createElement("p");
  
//   paragraph1.innerHTML = "Now let's begin the real game. There will be three game levels with 16 trials in each. Remember to do it as quickly and accurately as you can." + "<br>" + "游戏正式开始。游戏一共有三级，每级包含20个不同的音序。记住请尽可能用最短的时间和准度完成。";
//   paragraph2.innerHTML = "In order to help you have your best performance, please make your brower full screen, and turn off music or other prompt sound on your comuter so you can hear the game easily. Please do use mouse instead of touch pad, otherwise it'll slow down your speed and waste your data for our analysis. Thanks！" + "<br>" + "为了您有最佳表现，请您全屏浏览器，暂停您电脑上可能的其它提示音。 还有，一定要用鼠标， 别用触摸板，否则会影响您的速度，不利于我们数据分析。多谢！";
//   paragraph3.innerHTML = "Be ready!" + "<br>" + "准备好！";
//   bgColorDiv.appendChild(paragraph1);
//   bgColorDiv.appendChild(paragraph2);
//   bgColorDiv.appendChild(paragraph3);
//   $(".gamefield").append(bgColorDiv);
// }

// function pitch_dimension(catchDimension){
//   var canvas = document.getElementById("mycanvas");
//   var ctx = canvas.getContext("2d");
//   ctx.beginPath();

//   var para = document.createElement("p");
//   para.classList.add("center");
//   para.id = "displaytimes"; 
//   if(page === 5){
//     para.innerHTML = "First time. " + " 第一次。";
//   }else if (page === 6){
//     $("#displaytimes").remove();
//     para.innerHTML = "Second time. " + " 第二次。";
//   }
//   $(".gamefield").append(para);

//   if (catchDimension === "brightness"){
//     circleMoves('brightness', ctx);
//   }else {
//     circleMoves('elevation', ctx);
//   }
// }

// function pitch_elevation(){
//   var canvas = document.getElementById("mycanvas");
//   var ctx = canvas.getContext("2d");
//   ctx.beginPath();
//   circleMoves('elevation', ctx);
// }

// function circleMoves(catchMoves, ctx){
//   document.getElementById("mycanvas").style.background = "black";
//   document.getElementById("mycanvas").style.opacity = 1.0;
//   var cNotes = document.getElementById("cNotes");
//   var dNotes = document.getElementById("dNotes");
//   var eNotes = document.getElementById("eNotes");
//   var gNotes = document.getElementById("gNotes");
//   var aNotes = document.getElementById("aNotes");
//   var sample = {
//     colour: ['#1f1f1f', '#575757', '#8f8f8f', "#c7c7c7", '#ffffff', '#ffffff', "#c7c7c7", '#8f8f8f', '#575757', '#1f1f1f'],
//     pitch: [cNotes, dNotes, eNotes, gNotes, aNotes, aNotes, gNotes, eNotes, dNotes, cNotes],
//     elevation: [330, 265, 200, 135, 70, 70, 135, 200, 265, 330]
//   }
//   var i = 0;
//   var moves = setInterval(function(){
//     trainingSound(sample.pitch[i]);
//     console.log ("chenck audio sequence " + sample.pitch[i].id);
//     if (catchMoves === 'elevation'){
//       circleSoundSync_ele (ctx, sample.elevation[i], sample.pitch[i]);
//     }else{
//       circleSoundSync_bri (ctx, sample.colour[i], sample.pitch[i]);
//     }
//     i++;
//     if (i >=sample.elevation.length) {
//       clearInterval(moves);
//       setTimeout(function(){
//         document.getElementById("mycanvas").style.opacity = 0.0;
//       }, 450);
//     }
//   // }, 500)
//   }, 1000)
// }

// function trainingSound(freq){
//   freq.currentTime = 0.6;
//   // freq.currentTime = 1;
//   freq.play();
// }

// function circleSoundSync_bri (ctx, hexColor, freq){
//   // trainingSound(freq);
//   setTimeout(function(){
//     ctx.arc(200, 200, 80, 0, 2*Math.PI);
//     ctx.fillStyle = hexColor;
//     ctx.fill();
//     }, 70);
//   if(page === 5){
//     var timeElapse = 400;
//   }else if(page === 6){
//     var timeElapse = 500;
//   }
//   setTimeout(function(){
//     ctx.clearRect(100, 100, 200, 200);
//   }, timeElapse);
// }
// function circleSoundSync_ele (ctx, position, freq){
//   trainingSound(freq);
//   setTimeout(function(){
//     ctx.beginPath();
//     ctx.arc(200, position, 40, 0, 2*Math.PI);
//     ctx.fillStyle = '#9696a5';
//     ctx.fill();
//   }, 70); 
//   if(page === 5){
//     var timeElapse = 400;
//   }else if(page === 6){
//     var timeElapse = 500;
//   }
//   setTimeout(function(){
//     ctx.clearRect(0, 0, 400, 400);
//   }, timeElapse);
// }