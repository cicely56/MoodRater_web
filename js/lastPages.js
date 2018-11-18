
function pageExplain(){

  $(".page3").remove();
  var arrBtn = new Array();
  $(".center").remove();

  //Application.init()
  var page4 = document.createElement('div')
  page4.classList.add("page4");

  $(".gamefield").append(page4);

  var paragraph = document.createElement("p");
  var header = document.createElement("h2");

  header.id="name"
  paragraph.id = 'conditions';
  header.innerHTML = "Video clips"
  paragraph.innerHTML = "Please rate the emotion in the clip"+ timeLogIn.Arousal;

  $(".page4").append(header);
  $(".page4").append(paragraph);

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
  
  PB_CMT (6);
  var linechart = document.createElement('div');
  linechart.id="mylinechart";
  linechart.classList.add("center");
  $(".gamefield").append(linechart);

  lineplot();
  


  var btndiv = btnNext('nothing');
  $(".constant").append(btndiv);

  var btndiv = btnSave('nothing');
  $(".constant").append(btndiv);



  // logRelay("clearall");
  // logRelay("trialsLog");
  // logRelay("mov1");

}


function PB_CMT (page){
  
  var ifrm = document.createElement("iframe");
  ifrm.id = "myaudio";
  ifrm.classList.add("center");
   var para = document.createElement("p");
   para.classList.add("center");
   para.id = "displaytimes"; 
   para.innerHTML = "this is segment " ;
  // if(page === 5){
  //   para.innerHTML = "First time. " + " 第一次。";
  // }else if (page === 6){
  //   $("#displaytimes").remove();
  //   para.innerHTML = "Second time. " + " 第二次。";
  // }
  	ifrm.setAttribute("src", "https://content.jwplatform.com/players/9las3Az9-vADaJoYF.html");//jwplayer
    
    ifrm.style.width = "600px";
    ifrm.style.height = "40px";
    ifrm.style.frameborder = "0";
    ifrm.style.scrolling="auto";
  
  $(".gamefield").append(ifrm);
  $(".gamefield").append(para);
}

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



function lineplot(){

var m= timeLogIn;
var a=m.Arousal;
var v=m.Valence;
var t=m.videotime;

	trace1 = {
  type: 'scatter',
  x: t,
  y: a,
  mode: 'lines+markers',
  name: 'Arousal',
  line: {
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
    color: 'rgb(55, 128, 191)',
    width: 1
  },
  marker:{size:16, color:'rgb(55, 128, 191)'}
};

var layout = {
  width: 600,
  height: 200,
  margin: {
    l: 50,
    r: 20,
    b: 20,
    t: 20,
    pad: 3
  },
  autosize: false,
  
};

var data = [trace1, trace2];
linediv=document.getElementById('mylinechart');
linediv.id="linechart";

Plotly.newPlot(linechart, data, layout);
}

var errorLevel1 = 0;
var errorLevel2 = 0;
var errorLevel3 = 0;

function showResults(){//*****************
	clearElements();
	document.body.style.backgroundColor = '#362632';
	var result = document.createElement('div')
    result.classList.add("center");
    result.id = "showResults";
    $("#playGround").append(result);
	var paragraph1 = document.createElement("p");
	paragraph1.id = 'showResults';
	paragraph1.innerHTML = "Here is your correct score." + "<br>" + "这是您的正确率。";
	$('#showResults').append(paragraph1);
	//draw 3 progress bars **************************
	var backdrop = document.createElement('div');
	backdrop.classList.add('backgroundRect');
	backdrop.id = 'backgroundRect';
	$('#showResults').append(backdrop);

	var result1Row = document.createElement('div');
	result1Row.classList.add("center");
	result1Row.id = 'threeCircleRow';
	$(backdrop).append(result1Row);

	var result1 = document.createElement("p");
	result1.innerHTML = "The level with 3 circles: 三个圆环：";
	result1.style.fontSize = '15px';
	result1.style.marginTop = '40px';
	result1.style.marginRight = '30px';
	$('#threeCircleRow').append(result1);

	progressBar('result1');
	moveProgressBar('results1');

	var result1 = document.createElement("p");
	result1.innerHTML = "The level with 4 circles: 四个圆环：";
	result1.style.fontSize = '15px';
	result1.style.marginTop = '40px';
	result1.style.marginRight = '30px';
	$('#threeCircleRow').append(result1);
	progressBar('result2');
    moveProgressBar('results2');

	var result1 = document.createElement("p");
	result1.innerHTML = "The level with 5 circles: 五个圆环：";
	result1.style.fontSize = '15px';
	result1.style.marginTop = '40px';
	result1.style.marginRight = '30px';
	$('#threeCircleRow').append(result1);
	progressBar('result3');
	moveProgressBar('results3');
	//---------------
	console.log("error..." + errorLevel1 + errorLevel2 + errorLevel3);
	var btndiv = btnNext('showResults');
  	$(result).append(btndiv);
}
function lastPage(){
	$("#showResults").remove();//******************
	// clearElements();
	// document.body.style.backgroundColor = '#362632';
	var last = document.createElement('div')
    last.classList.add("center");
    last.id = "lastPage";
    $("body").append(last);

    var paragraph1 = document.createElement("p");
    var paragraph2 = document.createElement("p");
	paragraph1.id = 'lastPara';
	paragraph2.id = 'lastPara';
	paragraph1.innerHTML = "Thank you very much for your participation." + "<br>" + "非常感谢您的参与！";
	paragraph2.innerHTML = "Could you please give us your valuable feedback by filling following questionnaire:" + "<br>" + "最后请填写如下问卷，您的意见会给我们很大帮助。";
	paragraph2.style.fontSize = '15px';
	$(last).append(paragraph1);
	$(last).append(paragraph2);

	var btnRow = createRow('horizontal');
	$(last).append(btnRow);

	var aBtn = document.createElement('button');
  	aBtn.innerHTML = 'Questionnaire';
  	aBtn.classList.add("button");
 	aBtn.addEventListener('click', function () {
    	linkTo ('outSide', gameCondition);
    });
    $(btnRow).append(aBtn);

    var aBtn2 = document.createElement('button');
  	aBtn2.innerHTML = '问卷（中国大陆)';
  	aBtn2.classList.add("button");
 	aBtn2.addEventListener('click', function () {
    	linkTo ('mainland', gameCondition);
    });
    $(btnRow).append(aBtn2);
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