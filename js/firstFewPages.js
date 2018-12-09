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
var page = 3;

function pagePivot(pageIndex_static){ 
    // console.log(pageIndex, page);
    switch(pageIndex_static) {
    case 2:
      saveID();
      beforePrime();//instruction page
      break;
    case 3:
      pageRating();// rating page Task 1
      
      
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
      pageExplain();
      break;
    case 5:
      pageExplain2();
      break;
    case 6:
      pageExplain3();
      
      break;
    case 7:
     lastPage();
      break;
    case 8:
      newGame();
      break;
    case 9:
      beforeexplain();
      break; 
    case 10:
      pageRating();
      break;   
    };
  
}
//INSTRUCTION PAGE 2
function beforePrime(){
  $(".Page1").remove();
  
  var page3 = document.createElement('div')
  page3.classList.add("page3");
   $(".gamefield").append(page3);
  
  var header = document.createElement("h2");
  header.classList.add("explainheader");
  header.id="name"
  

  var paragraph = document.createElement("p");
  paragraph.classList.add("explainRating");
  paragraph.id = 'va_instruction';
  header.innerHTML = "How to use the Mood Rater"
  paragraph.innerHTML = "<ul><li>1. The Mood Rater consists of an interface for rating emotions in <b>valence-arousal</b> space."+ "<br><br>" 
  + "<i>Definitions: <b>Valence </b>refers to the intrinsic <strong>positive/negative</strong> nature of the emotion; <b> arousal</b>  refers to the <b>degree of excitation</b>.<br> For example, <b>excited</b> would be <b>positive valence</b> and <b>high arousal</b>, <b>angry </b>would be <b>negative valence</b> and <b>high arousal</b>, and <b>sad</b> would be <b>negative valence</b> and <b>low arousal</b>. </i> "+ "<br>" +  "<br>" + "See diagram below for further examples.</li><ul>"

  var paragraph1_2 = document.createElement("p");
    paragraph1_2.classList.add("explainRating");
    paragraph1_2.id = 'va_instruction2';
    paragraph1_2.innerHTML =
    "<ul><li> 2. Please rate the emotion while watching the video as soon as you notice a emotion change."+ "<ul><li>Click on any part of the Mood Rater interface to send an emotion rating.</li> "+"<li> When you click on the Mood Rater, some emotion tags will pop up to act as a guide tag. Do not worry if you do not agree with these tags; they are only a guide. You can have your own interpretion of the valence-arousal space.</li></ul></li>"
   +
   "<li>3. You are asked to report the<b> PERCEIVED EMOTION </b>, not your felt emotion(aka. please report which emotion the music expresses rather than which emotion the music induces). For example, we are interested in knowing if the music is portraying a peaceful emotion, and not that it makes a listener feel peaceful. </li></ul>" 
    + "<br>" 
  var va_pic2= document.createElement('div')

  va_pic2.id="myimage2";
  va_pic2.classList.add("center");

  vatagsplot18(va_pic2);
  va_pic2.style.position = "relative";
  va_pic2.style.left = "500px";
  va_pic2.style.top = "-350px";
  va_pic2.style.marginBottom = "-350px";
  // va_pic2.appendChild(bigImg);

  var va_pic = document.createElement('div')
  

  va_pic.id="myimage";
  va_pic.classList.add("center");
  va_pic.style.position = "relative";
  va_pic.style.left = "-200px";
  

  var bigImg = document.createElement("img"); 
    //创建一个img元素
  // bigImg.src="https://www.researchgate.net/profile/Yi-hsuan_Yang/publication/254004106/figure/fig1/AS:298208942149638@1448109960909/The-2D-valence-arousal-emotion-space-Russell-1980-the-position-of-the-affective.png";   //给img元素的src属性赋值
  //   //bigImg.width="320";  //320个像素 不用加px
  bigImg.src="img/2D_MR.png"
  va_pic.appendChild(bigImg);
 
 
  // paragraph.innerHTML = " Instructions for arousal and valence rating space"+ "<br>" + "You will play a warm-up rating for practice";
  
  $(".page3").append(header);
  $(".page3").append(paragraph);
  
  $(".page3").append(va_pic);
  $(".page3").append(va_pic2);
  $(".page3").append(paragraph1_2);


  var header2 = document.createElement("h2");
    header2.id="name2"
    header2.classList.add("explainheader");
  var paragraph2 = document.createElement("p");
    paragraph2.classList.add("explainRating");
    paragraph2.id = 'va_instruction2';
    header2.innerHTML = "Mood Rater Trial"
    paragraph2.innerHTML = "<ol><li>You can now try the Mood Rater interface while viewing a test video.</li>"
    +
    "<li>Please adjust the soundlevel of headphone if you feel uncomfortable with the current setting. </li> " +
    "<li>Once you are ready, click Continue to start the experiment. Do not hesitate to ask questions to the expertmentors at this stage. </li></ol>"
   
  $(".page3").append(header2);
  $(".page3").append(paragraph2);
      


  canvasPrepare2("con2");


  function canvasPrepare2(gameCondition){

      var ifrm = document.createElement("div");
      ifrm.classList.add("ifrm");
      ifrm.id = "myvideo";
      $(".page3").append(ifrm);

      var canvasscale= 1
      if(gameCondition === "con2" || gameCondition === "con3"){ 
        var step = 1*canvasscale;
        var ctd = document.createElement("div");
        ctd.id = "ddd"; 
        ctd.classList.add("ddd");
        ctd.style.position = "relative";
        ctd.style.left = "740px";
        ctd.style.top = "-380px";
        ctd.style.marginBottom = "-300px";
        $(".page3").append(ctd);

        var canvas_e = document.createElement("canvas");
        canvas_e.id = "mycanvas";
        canvas_e.position="absolute";
        canvas_e.width = 320*canvasscale;
        canvas_e.height = 320*canvasscale;
        // var datelabel = document.createElement('div')
        // document.getElementById('ddd').appendChild(datelabel);
      }

      drawCanvas2();

      var datalabel = document.createElement('div');
        //datalabel.classList.add("ddd");
      datalabel.id="emotionlabel";
      
      document.getElementById('ddd').append(datalabel);

      const player2 =jwplayer("myvideo").setup({
      
        //file: "https://content.jwplatform.com/videos/eToUBrbD-RRiR9dl9.mp4",
        //wangwang
        //file:"https://content.jwplatform.com/videos/9las3Az9-To6C1UXs.mp4",
        // file:"https://content.jwplatform.com/videos/yAY0yvTN-u8GeqODi.mp4",
        // wholemovment
        // file:"https://content.jwplatform.com/videos/5kSUgpvz-To6C1UXs.mp4", old player
        // file:"https://content.jwplatform.com/videos/riGsXt8N-7xqDv6Uz.mp4",//MOV 1 2
        file:"https://content.jwplatform.com/videos/Pk9bJNBJ-7xqDv6Uz.mp4",//SEG 2
        
        width: 710,
        height: 410,
        repeat: false,
        //aspectratio: '16:9',
        autostart: false,
        timeSliderAbove:true,
        displayPlaybackLabel:true


      });
      
      function getVideoCurrentime2() {
        return player2.getPosition();
        console.log(player2.getPosition());
      }

      var canvas_R = document.getElementById('mycanvas');

      canvas_R.addEventListener('click', function(evt) {
        var mousePos = getMousePos(canvas_R, evt);
        var videotimestamp= getVideoCurrentime2();
        var message2 = "UserID:"+game.userID+',Mouse position: x=' + mousePos.x + ',&y=' + mousePos.y+',&time'+mousePos.clickdate+",videotime="+videotimestamp;
        var rating2 = {UserID: game.userID,
            UID:game.UID,
            Valence: mousePos.x,
            Arousal: mousePos.y,
            Time: mousePos.clickdate,
            videotime: videotimestamp};
    
        setMarker2(canvas_R,evt);
        //var timeLogIn= addTimeLog(rating);   
        console.log(message2);
      });



      function drawCanvas2(){
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

      ctx.font = "20px Arial";
      ctx.fillText("Valence", 235*canvasscale, 180*canvasscale); 
      ctx.font = "15px Arial";
      ctx.fillStyle = "#e5e3dc";
      ctx.fillText("(Positive)", 255*canvasscale, 152*canvasscale); 
      ctx.fillText("(Negative)", 0*canvasscale, 152*canvasscale); 
      ctx.fillText("(High Energy)", 125*canvasscale, 20*canvasscale); 
      ctx.fillText("(Low Energy)", 128*canvasscale, 312*canvasscale);

      ctx.save();
      ctx.translate(158*canvasscale, 120*canvasscale);
      ctx.rotate(Math.PI * 1.5);
      ctx.font = "20px Arial";
      ctx.fillStyle = "#000000"
      ctx.fillText("Arousal", 28*canvasscale, 20*canvasscale);  
        ctx.restore();
        $(".ddd").append(canvas_e); 
        //var emotiontext = document.createTextNode(text);
      }
    


      function setMarker2(canvas_R,evt){

        var rect = canvas_R.getBoundingClientRect();
        marker = {
                x: ((evt.clientX - rect.left)).toFixed(3),
                y: ((evt.clientY - rect.top)).toFixed(3),
        };
        drawCanvas2 ();
        // draw marker
        ctx=document.getElementById('mycanvas').getContext("2d");
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.beginPath();
        ctx.arc(marker.x, marker.y, 12, 0, Math.PI*2, true); 
        ctx.fill();
        // var moods=[
        // ["sad",0.07625,0.39125],
        // ["angry",0.23125,0.77125],
        // ["harsh",0.24125,0.575],
        // ["anxious",0.47625,0.74],
        // ["reserved",0.485,0.28375],
        // ["complex",0.53125,0.5775],
        // ["reverent",0.54375,0.375],
        // ["warm",0.6875,0.5175],
        // ["innocent",0.68875,0.40125],
        // ["tender",0.74125,0.485],
        // ["relaxed",0.75,0.17375],
        // ["bright",0.8125,0.55],
        // ["sweet",0.83,0.62],
        // ["peaceful",0.84625,0.23375],
        // ["happy",0.90125,0.68625],
        // ["hopeful",0.7625,0.5975],
        // ["excited",0.825,0.77],
        // ["bored",0.24375,0.22875]
        // ];
        // var moods= [
        // ['power',0.69,0.71,0.79,1],
        // ['bright',0.81,0.55,0.67,2],
        // ['brutal',0.23,0.7,0.45,3],
        // ['confused',0.28,0.63,0.41,4],
        // ['rock',0.57,0.44,0.52,5],
        // ['serious',0.51,0.38,0.52,6],
        // ['relaxed',0.75,0.17,0.57,7],
        // ['calm',0.72,0.33,0.67,8],
        // ['dark',0.46,0.41,0.48,9],
        // ['dirty',0.26,0.49,0.46,10],
        // ['energy',0.78,0.74,0.74,11],
        // ['fun',0.92,0.78,0.73,12],
        // ['aggressive',0.51,0.6,0.57,13],
        // ['scary',0.28,0.71,0.33,14],
        // ['positive',0.88,0.57,0.65,15],
        // ['sad',0.08,0.39,0.31,16]];
      
        var x = ((evt.clientX - rect.left)/320).toFixed(3);
        var y =(1-(evt.clientY - rect.top)/320).toFixed(3);

        
        datalabel=document.getElementById('emotionlabel');
        datalabel.innerHTML =findMood2(x, y)+"<font size=2 color=#919296> (Guide Only) </font>";
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
    var btndiv = btnNext('ratingpage');
    $(".constant").append(btndiv);
}

//INSTRUCTION Page3
function beforeexplain(){
  //downloadObjectAsJson(timeLogIn, exportName);
  $(".page2").remove();
  $(".center").remove();
  
  var page3 = document.createElement('div')
  page3.classList.add("page3");
      $(".gamefield").append(page3);
      
  var paragraph = document.createElement("p");
  paragraph.classList.add("explainRating");
  paragraph.innerHTML = "You will listen back to a few short segements and review your ratings" + "<br>" + " please explain the ratings.";
  
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
  header.innerHTML = "Task 1: "
  header.classList.add("explainheader");

  paragraph.innerHTML = "Please rate in valence-arousal space the emotion perceived whilst watching the video recording of a performance of" +" <i> Arno Babajanian’s Piano Trio in F# minor</i>. " + " The video comprises of two movements of the trio: the first is 11 minutes long, and the second 6 minutes. You may pause the video at any time to take a break."

  $(".page2").append(header);
  $(".page2").append(paragraph);

  canvasPrepare ("con2");

  var btndiv = btnNext('nothing');
  $(".constant").append(btndiv);
  
  // logRelay("clearall");
  // logRelay("trialsLog");
  // logRelay("mov1");

}





function canvasPrepare (gameCondition){

    var ifrm = document.createElement("div");
    ifrm.classList.add("ifrm");
    ifrm.id = "myvideo";
    $(".page2").append(ifrm);

    var canvasscale= 1
    if(gameCondition === "con2" || gameCondition === "con3"){ 
      var step = 1*canvasscale;
      var ctd = document.createElement("div");
      ctd.id = "ddd"; 
      ctd.classList.add("ddd");
      ctd.style.position = "relative";
      ctd.style.left = "740px";
      ctd.style.top = "-380px";
      ctd.style.marginBottom = "-300px";
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
      // file:"https://content.jwplatform.com/videos/5kSUgpvz-To6C1UXs.mp4",
      file:"https://content.jwplatform.com/videos/riGsXt8N-7xqDv6Uz.mp4",
        
      
      width: 710,
      height: 410,
      repeat: false,
      //aspectratio: '16:9',
      autostart: false,
      timeSliderAbove:true,
      displayPlaybackLabel:true

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
      var currenttag=findMood2(mousePos.x,mousePos.y);
      var message = "UserID:"+game.userID+',Mouse position: x=' + mousePos.x + ',&y=' + mousePos.y+',&time'+mousePos.clickdate+",videotime="+videotimestamp+",tags:"+findMood2(mousePos.x,mousePos.y);
      var rating = {UserID: game.userID,
      UID:game.UID,
      Valence: mousePos.x,
      Arousal: mousePos.y,
      Time: mousePos.clickdate,
      videotime: videotimestamp,
      tags: currenttag
    };

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

      ctx.font = "20px Arial";
      ctx.fillText("Valence", 235*canvasscale, 180*canvasscale); 
      ctx.font = "15px Arial";
      ctx.fillStyle = "#e5e3dc";
      ctx.fillText("(Positive)", 255*canvasscale, 152*canvasscale); 
      ctx.fillText("(Negative)", 0*canvasscale, 152*canvasscale); 
      ctx.fillText("(High Energy)", 125*canvasscale, 20*canvasscale); 
      ctx.fillText("(Low Energy)", 128*canvasscale, 312*canvasscale);

      ctx.save();
      ctx.translate(158*canvasscale, 120*canvasscale);
      ctx.rotate(Math.PI * 1.5);
      ctx.font = "20px Arial";
      ctx.fillStyle = "#000000"
      ctx.fillText("Arousal", 28*canvasscale, 20*canvasscale);  

      ctx.restore();
      $(".ddd").append(canvas_e); 
      //var emotiontext = document.createTextNode(text);
    }
  
    function addTimeLog(rating){

     
      timeLogObj = new Date();

      timeLogIn.sec = timeLogObj.getUTCSeconds();;
      timeLogIn.min = timeLogObj.getUTCMinutes();;
      timeLogIn.hour = timeLogObj.getUTCHours();;
      timeLogIn.month = timeLogObj.getUTCMonth();
      timeLogIn.year = timeLogObj.getUTCFullYear();
      timeLogIn.date = timeLogObj.getUTCDate();
      timeLogIn.utcDate = new Date(Date.UTC(timeLogIn.year, timeLogIn.month, timeLogIn.date, timeLogIn.hour, timeLogIn.min, timeLogIn.sec));

      timeLogIn.month = timeLogObj.getUTCMonth()+1;


      
      var start = new Date ();

      //timeLogIn.Arousal.push();
      //timeLogIn.clickInterval.push(clickInterval(level));
      timeLogIn.Arousal.push(rating.Arousal);
      timeLogIn.Valence.push(rating.Valence);
      timeLogIn.videotime.push(rating.videotime); 
      timeLogIn.MRtags.push(rating.tags); 
      timeLogIn.UID.push(rating.UID);
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
      ctx.arc(marker.x, marker.y, 12, 0, Math.PI*2, true); 
      ctx.fill();
      
      // var moods= [
      // ['power',0.69,0.71,0.79,1],
      // ['bright',0.81,0.55,0.67,2],
      // ['brutal',0.23,0.7,0.45,3],
      // ['confused',0.28,0.63,0.41,4],
      // ['rock',0.57,0.44,0.52,5],
      // ['serious',0.51,0.38,0.52,6],
      // ['relaxed',0.75,0.17,0.57,7],
      // ['calm',0.72,0.33,0.67,8],
      // ['dark',0.46,0.41,0.48,9],
      // ['dirty',0.26,0.49,0.46,10],
      // ['energy',0.78,0.74,0.74,11],
      // ['fun',0.92,0.78,0.73,12],
      // ['aggressive',0.51,0.6,0.57,13],
      // ['scary',0.28,0.71,0.33,14],
      // ['positive',0.88,0.57,0.65,15],
      // ['sad',0.08,0.39,0.31,16]];
    
      var x = ((evt.clientX - rect.left)/320).toFixed(3);
      var y =(1-(evt.clientY - rect.top)/320).toFixed(3);

      
      datalabel=document.getElementById('emotionlabel');

       
      datalabel.innerHTML =findMood2(x, y)+"<font size=2 color=#919296> (Guide Only) </font>";
      document.getElementById('ddd').append(datalabel);

      
    }

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




