
function pageExplain(){

  $(".page3").remove();
  var arrBtn = new Array();
  $(".center").remove();

  //Application.init()
  var page4 = document.createElement('div')
  page4.classList.add("page4");
  page4.id="page4";
  $(".gamefield").append(page4);

  var paragraph = document.createElement("p");
  var task = document.createElement("h2");
  var header = document.createElement("h3");

  header.id="name"
  paragraph.id = 'conditions';
  task.id="task";
  task.innerHTML="Task 2"
  header.innerHTML = "Segment 1"
  paragraph.innerHTML = "We would like to know what music features led to some emotion ratings you have just made. "+ "<br>" +
" <b>1.  Please listen to the segment again and review your emotion ratings.</b>" + "<br>" +
  "<b>2.  Afterwards, please write down the reason behind your every rating in the right side.</b>";
  //timeLogIn.Arousal;

   $(".page4").append(task);
  $(".page4").append(paragraph);
   $(".page4").append(header);

  // var ifrm = document.createElement("div");
  //   ifrm.classList.add("ifrm");
  //   ifrm.id = "myvideo";
  //   $(".page2").append(ifrm);
    
  // const player1 =jwplayer("myvideo").setup({
    
  //     //file: "https://content.jwplatform.com/videos/eToUBrbD-RRiR9dl9.mp4",
  //     //wangwang
  //     //file:"https://content.jwplatform.com/videos/9las3Az9-To6C1UXs.mp4",
  //     // file:"https://content.jwplatform.com/videos/yAY0yvTN-u8GeqODi.mp4",
  //     // wholemovment
  //     file:"https://content.jwplatform.com/videos/eToUBrbD-QBzDmDmf.m4a",
      
  //     width: 600,
  //     height: 40,
  //     repeat: true,
  //     //aspectratio: '16:9',
  //     autostart: false
  //   });


	var audioclip1 = document.createElement('div');
  	audioclip1.id="myaudio1";
  	//audioclip1.classList.add("page4");
  	$(".page4").append(audioclip1);

 PB_CMT ("myaudio1");

	var linechart1 = document.createElement('div');
  linechart1.id="mylinechart1";
  //linechart1.classList.add("center");
  $(".page4").append(linechart1);

  lineplot("mylinechart1");
  
	var coment1 = document.createElement("div");
    //coment1.classList.add("page4");
    coment1.id = "mycoment1";
    coment1.style.position = "relative";
    coment1.style.left = "650px";
    coment1.style.top = "-250px";
    $(".page4").append(coment1);

	commentsforrating ("mycoment1");


    
//     commentbox("mycoment1");
    
// }

// function commentbox(divID){
	
// 	divNo=document.getElementById(divID);

 
// }



  	var btndiv = btnNext('nothing');
  	$(".constant").append(btndiv);

  	var btndiv = btnSave('nothing');
  	$(".constant").append(btndiv);

}

  // logRelay("clearall");
  // logRelay("trialsLog");
  // logRelay("mov1");



function PB_CMT (auidoID){

  var audiodiv= document.getElementById(auidoID);
  audiodiv.id="myaudio"
  //var ifrm = document.createElement("div");
 // ifrm.id = "myaudio";


  //player

	const player1 =jwplayer("myaudio").setup({
    
      //file: "https://content.jwplatform.com/videos/eToUBrbD-RRiR9dl9.mp4",
      //wangwang
      //file:"https://content.jwplatform.com/videos/9las3Az9-To6C1UXs.mp4",
      // file:"https://content.jwplatform.com/videos/yAY0yvTN-u8GeqODi.mp4",
      // wholemovment

      file:"https://content.jwplatform.com/videos/QkhnzpwU-QBzDmDmf.m4a",
      
      width: 620,
      height: 40,
      repeat: false,
      //aspectratio: '16:9',
      autostart: false

    });  


  //ifrm.classList.add("page4");
   // var para = document.createElement("p");
   // para.classList.add("center");
   // para.id = "displaytimes"; 
   // para.innerHTML = "this is segment " ;
  // if(page === 5){
  //   para.innerHTML = "First time. " + " 第一次。";
  // }else if (page === 6){
  //   $("#displaytimes").remove();
  //   para.innerHTML = "Second time. " + " 第二次。";
  // }
  	// ifrm.setAttribute("src", "https://jwp.io/s/pcitcWP1");//jwplayer
    
   //  ifrm.style.width = "600px";
   //  ifrm.style.height = "40px";
   //  ifrm.style.frameborder = "0";
   //  ifrm.style.scrolling="auto";
   // audiodiv.appendChild(ifrm);

  // $(".gamefield").append(para);
}

function commentsforrating (commentID) {

	var commentdiv= document.getElementById(commentID);
	commentdiv.classList.add("commentdiv");
    var x = document.createElement("textarea");
 	x.id="comment_R1";
 	x.setAttribute("type", "text");
 	x.setAttribute("cols", "40");
    x.setAttribute("value", "");
    x.setAttribute("placeholder","Rating 1: ..");    
    commentdiv.appendChild(x);
	commentdiv.appendChild(document.createElement("br"));   
 	var x2= document.createElement("textarea");
 	x2.id="comment_R2";
 	x2.setAttribute("cols", "40");
 	x2.setAttribute("type", "text");
    x2.setAttribute("value", "");
    x2.setAttribute("placeholder","Rating 2: ..");
    commentdiv.appendChild(x2);
    commentdiv.appendChild(document.createElement("br")); 
    var x3= document.createElement("textarea");
 	x3.id="comment_R3";
 	x3.setAttribute("cols", "40");
 	x3.setAttribute("type", "text");
    x3.setAttribute("value", "");
    x3.setAttribute("placeholder","Rating 3: ..");
    commentdiv.appendChild(x3);
    commentdiv.appendChild(document.createElement("br")); 
	var x4= document.createElement("textarea");
 	x4.id="comment_R4";
 	x4.setAttribute("cols", "40");
 	x4.setAttribute("type", "text");
    x4.setAttribute("value", "");
    x4.setAttribute("placeholder","Rating 4: ..");
    commentdiv.appendChild(x4);
    commentdiv.appendChild(document.createElement("br")); 
	var x5= document.createElement("textarea");
 	x5.id="comment_R5";
 	x5.setAttribute("cols", "40");
 	x5.setAttribute("type", "text");
    x5.setAttribute("value", "");
    x5.setAttribute("placeholder","Rating 5 or More: ..");
    commentdiv.appendChild(x5);


}

// function PB_CMT (page){
  
//   var ifrm = document.createElement("iframe");
//   ifrm.id = "myaudio";
//   ifrm.classList.add("center");
//    var para = document.createElement("p");
//    para.classList.add("center");
//    para.id = "displaytimes"; 
//    para.innerHTML = "this is segment " ;
//   // if(page === 5){
//   //   para.innerHTML = "First time. " + " 第一次。";
//   // }else if (page === 6){
//   //   $("#displaytimes").remove();
//   //   para.innerHTML = "Second time. " + " 第二次。";
//   // }
//   	ifrm.setAttribute("src", "https://content.jwplatform.com/players/9las3Az9-vADaJoYF.html");//jwplayer
    
//     ifrm.style.width = "600px";
//     ifrm.style.height = "40px";
//     ifrm.style.frameborder = "0";
//     ifrm.style.scrolling="auto";
  
//   $(".gamefield").append(ifrm);
//   $(".gamefield").append(para);
// }

  // <iframe src="https://content.jwplatform.com/players/9las3Az9-vADaJoYF.html" width="480" height="270" frameborder="0" scrolling="auto" allowfullscreen></iframe>

  // if(gameCondition === "con2"){
  //   if(page == 5){
  //     ifrm.setAttribute("src", "http://content.jwplatform.com/players/ns8naR5X-WDIJhdqp.html");//jwplayer
  //   }else{
  //     ifrm.setAttribute("src", "http://content.jwplatform.com/players/ns8naR5X-WDIJhdqp.html");
  //   }
  //   ifrm.style.width = "560px";
  //   ifrm.style.height = "315px";
  // }else{
  //   if(page == 5){
  //     ifrm.setAttribute("src", "http://content.jwplatform.com/players/lqCLzPyS-WDIJhdqp.html");//jwplayer
  //   }else{
  //     ifrm.setAttribute("src", "http://content.jwplatform.com/players/lqCLzPyS-WDIJhdqp.html");//jwplayer
  //   }
  //   ifrm.style.width = "560px";
  //   ifrm.style.height = "315px";
  //   ifrm.style.frameborder = "0"
  //   ifrm.style.scrolling="auto"
  // }
  // $(".gamefield").append(ifrm);
  // $(".gamefield").append(para);
  // console.log($('.btnNEXT'));



function lineplot(linechartID){

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
 // legend: {
 //  	x=0,
	// y=1,
	// // bgcolor: ,
 //    bordercolor: '#E2E2E2',
 //    borderwidth: 2
 // "orientation": "h"}
	// }
};

var data = [trace1, trace2];



linediv= document.getElementById(linechartID);

linediv.id="linechartforplotyly";

return Plotly.newPlot("linechartforplotyly", data, layout,{responsive: false});



}

var errorLevel1 = 0;
var errorLevel2 = 0;
var errorLevel3 = 0;

// function showResults(){//*****************
// 	clearElements();
// 	document.body.style.backgroundColor = '#362632';
// 	var result = document.createElement('div')
//     result.classList.add("center");
//     result.id = "showResults";
//     $("#playGround").append(result);
// 	var paragraph1 = document.createElement("p");
// 	paragraph1.id = 'showResults';
// 	paragraph1.innerHTML = "Here is your correct score." + "<br>" + "这是您的正确率。";
// 	$('#showResults').append(paragraph1);
// 	//draw 3 progress bars **************************
// 	var backdrop = document.createElement('div');
// 	backdrop.classList.add('backgroundRect');
// 	backdrop.id = 'backgroundRect';
// 	$('#showResults').append(backdrop);

// 	var result1Row = document.createElement('div');
// 	result1Row.classList.add("center");
// 	result1Row.id = 'threeCircleRow';
// 	$(backdrop).append(result1Row);

// 	var result1 = document.createElement("p");
// 	result1.innerHTML = "The level with 3 circles: 三个圆环：";
// 	result1.style.fontSize = '15px';
// 	result1.style.marginTop = '40px';
// 	result1.style.marginRight = '30px';
// 	$('#threeCircleRow').append(result1);

// 	progressBar('result1');
// 	moveProgressBar('results1');

// 	var result1 = document.createElement("p");
// 	result1.innerHTML = "The level with 4 circles: 四个圆环：";
// 	result1.style.fontSize = '15px';
// 	result1.style.marginTop = '40px';
// 	result1.style.marginRight = '30px';
// 	$('#threeCircleRow').append(result1);
// 	progressBar('result2');
//     moveProgressBar('results2');

// 	var result1 = document.createElement("p");
// 	result1.innerHTML = "The level with 5 circles: 五个圆环：";
// 	result1.style.fontSize = '15px';
// 	result1.style.marginTop = '40px';
// 	result1.style.marginRight = '30px';
// 	$('#threeCircleRow').append(result1);
// 	progressBar('result3');
// 	moveProgressBar('results3');
// 	//---------------
// 	console.log("error..." + errorLevel1 + errorLevel2 + errorLevel3);
// 	var btndiv = btnNext('showResults');
//   	$(result).append(btndiv);
// }
function lastPage(){


	//******************
	$(".center").remove();
	$(".page4").remove();
	
	//var arrBtn = new Array();
	clearElements();
	// document.body.style.backgroundColor = '#362632';
	var page5 = document.createElement('div')
  	page5.classList.add("page5");

   	$(".gamefield").append(page5);

	var last = document.createElement('div')
    last.classList.add("page5");
    last.id = "lastPage";
    $(".page5").append(last);

    var paragraph1 = document.createElement("p");
    var paragraph2 = document.createElement("p");
	paragraph1.id = 'lastPara';
	paragraph2.id = 'lastPara';
	paragraph1.innerHTML = "Thank you very much for your participation." ;
	paragraph2.innerHTML = "Could you please give us your valuable feedback by filling following questionnaire:" ;
	paragraph2.style.fontSize = '15px';
	$(last).append(paragraph1);
	$(last).append(paragraph2);

	// var btnRow = createRow('horizontal');
	// $(last).append(btnRow);

	var aBtn = document.createElement('button');
  	aBtn.innerHTML = 'Questionnaire';
  	aBtn.classList.add("button");
 	aBtn.addEventListener('click', function () {
    	linkTo ('outSide', "con2");
    });
    $(last).append(aBtn);

  //   var aBtn2 = document.createElement('button');
  // 	aBtn2.innerHTML = '问卷（中国大陆)';
  // 	aBtn2.classList.add("button");
 	// aBtn2.addEventListener('click', function () {
  //   	linkTo ('mainland', gameCondition);
  //   });
  //   $(btnRow).append(aBtn2);
}

function linkTo (region, gameCondition){
	if(region === 'outSide'){
		
		window.location = 'https://docs.google.com/forms/d/e/1FAIpQLSdJaUToDCWn1qJoczvu_5UkJ9gIaQrBO5GXZCMZgBuOURMlJA/viewform';
	}else{
		switch(gameCondition) {
      case 'con1':
        window.location = 'https://www.wjx.cn/jq/16879957.aspx'; //问卷星
        break;
      case 'con2':
        window.location = 'https://www.wjx.cn/jq/16880247.aspx';
        break;
      case 'con3':
        window.location = 'https://www.wjx.cn/jq/16880200.aspx';
        break;
      case 'con4':
        window.location = 'https://www.wjx.cn/jq/16880163.aspx';
        break;
      case 'con5':
        window.location = 'https://www.wjx.cn/jq/18326998.aspx';
        break;
      case 'con6':
        window.location = 'https://www.wjx.cn/jq/18326993.aspx';
        break;
    	};
		// window.location = 'https://www.sojump.com/jq/14779901.aspx'; //问卷星
	}
	
}
function errorRate(){
	for (var i = 0; i < log.playerLog.length; i++){
		if(log.playerLog[i] != log.currentGameLog[i]){
			if (game.currentGame.length === 3){
				errorLevel1 ++;
			}else if(game.currentGame.length === 4){
				errorLevel2 ++;
			}else if (game.currentGame.length === 5){
				errorLevel3 = errorLevel3 + 1;
			}
		}
	}
}