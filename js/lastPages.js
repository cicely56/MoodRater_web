
function pageExplain(){
	
	$(".page2").remove();
	$(".center").remove();

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

	var exp_section1 = document.createElement("h3");
	var exp_section2 = document.createElement("h3");
	var exp_section3 = document.createElement("h3");
	var exp_section4 = document.createElement("h3");
	$(".page4").append(task);
	$(".page4").append(paragraph);
	$(".page4").append(exp_section1);

	paragraph.id = 'conditions';
	task.id="task";
	task.classList.add("explainheader");
	exp_section1.id="section1"



	task.innerHTML="Task 2"

	  
	  paragraph.innerHTML = "Please confirm your ratings, and provide the reasons behind your choices. We would like to know what music features led to some emotion ratings you have just made."+'<br>'+ "<br>" +
		"<ol><li>Please watch the short section again and review your emotion ratings. This can be done by<strong> hovering on the timeline graph below the player</strong> , your previous emotion ratings will show up on the VA space on the right.</li> " +
	 	"<li><strong> Click on each rating point</strong> to raise a pop-up window where you can <strong>confirm that rating</strong> or <strong>discard the rating </strong> only if you disagree with your previous rating.</li>"+
	 	" <li>If a rating is confirmed, we would like you to <strong> tell how clear is the emotion portrayed by music at the rating point </strong>, and <strong>write down the reasons behind the rating</strong>. If you have the same reason for a cluster of points, please select <i>same reason as points nearby</i> after wrting down the reason for one point.</li>"+
	 	"<pre> Examples of possible reasons might be:" 
	 	+"<br>" +
		"<ul> <li>the melody is rising</li>"+
		"<li>the harmonies is very tense</li>"+
		"<li>the cello plays soft sound</li>"+
		"<li> ...</li></ul>"
		+"<br>" +
		"There is no right or wrong answer on your reason. Please let us know as much as possible.</pre>"
		+ "<br>" +
		" <li>If a rating is discarded, please skip step 3, and move on to the next rating.</li></ol>"
		 	+ "<br>" +
		 	
		"You will be asked to do this for the ratings in the following 6 short sections."


	exp_section1.innerHTML = "Short Section 1/6"
	exp_section2.innerHTML = "<br>"+"<br>"+"<br>"+"Short Section 2/6"
	//******************************************************
	//*********section1*********
	//******************************************************
	var audioclip1 = document.createElement('div');
	  	audioclip1.id="myaudio1";
	  	//audioclip1.classList.add("page4");
	  	$(".page4").append(audioclip1);

	PB_CMT ("myaudio1");

	var linechart1 = document.createElement('div');
	      
	  	linechart1.id="mylinechart1";
	  	
	  //linechart1.classList.add("center");
	  $(".page4").append(linechart1);

 

	var vachart1 = document.createElement('div');
	  	vachart1.id="myvachart1";
	  	$(".page4").append(vachart1);
	  	vachart1.classList.add('ddd');
	    vachart1.style.position = "relative";
	    vachart1.style.left = "740px";
	    vachart1.style.top = "-530px";
	    vachart1.style.marginBottom = "-350px";

	  	var canvas_1 = document.createElement("canvas");
	     canvas_1.id = "mycanvasE1"
	     canvas_1.position="absolute";
	     canvas_1.width = 320*canvasscale;
	     canvas_1.height = 320*canvasscale;
	  	$("#myvachart1").append(canvas_1); 

	  	var datalabel1 = document.createElement('div');

	    datalabel1.classList.add("emotionlabel");
	    datalabel1.id="emotionlabel1";
	    
	    document.getElementById("myvachart1").append(datalabel1);


		canvasrating("myvachart1","mycanvasE1","emotionlabel1");

		lineplotandcmes("mylinechart1",70,123,"mycanvasE1","emotionlabel1",commentLogIn1,"section1");

	//******************************************************
	//*********section2*********
	//******************************************************
		$(".page4").append(exp_section2);

		var audioclip2 = document.createElement('div');
	  	audioclip2.id="myaudio2";
	  	//audioclip1.classList.add("page4");
	  	$(".page4").append(audioclip2);

	 	 PB_CMT ("myaudio2");

 	var linechart2 = document.createElement('div');
      
  		linechart2.id="mylinechart2";
  	
	  	linechart2.classList.add("center");
	 	 $(".page4").append(linechart2);


    var vachart2 = document.createElement('div');
      	vachart2.id="myvachart2";
	    $(".page4").append(vachart2);
	    vachart2.classList.add('ddd');
	    vachart2.style.position = "relative";
	    vachart2.style.left = "740px";
	    vachart2.style.top = "-530px";
	    vachart2.style.marginBottom = "-350px";

    var canvas_2 = document.createElement("canvas");
	     canvas_2.id = "mycanvasE2"
	     canvas_2.position="absolute";
	     canvas_2.width = 320*canvasscale;
	     canvas_2.height = 320*canvasscale;
	   	 $("#myvachart2").append(canvas_2); 

    var datalabel2 = document.createElement('div');
        datalabel2.classList.add("emotionlabel");
    	datalabel2.id="emotionlabel2";
    
    document.getElementById("myvachart2").append(datalabel2);


    canvasrating("myvachart2","mycanvasE2","emotionlabel2");

    lineplotandcmes("mylinechart2",181,228,"mycanvasE2","emotionlabel2",commentLogIn2,"section2");
    


 // var vachart = document.createElement('div');
 // 	varchart.id="myvachart1";



	// var linechart2 = document.createElement('div');
 //  linechart2.id="mylinechart2";
 //  //linechart1.classList.add("center");
 //  $(".page4").append(linechart2);

 //  lineplotandcmes("mylinechart2");

 //lineplotandcomments("mylinechart2");

  	var btndiv = btnNext('explain_s1');
  	$(".constant").append(btndiv);

  	

}

function pageExplain2(){
	
	$(".page4").remove();
	$(".center").remove();

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

	var exp_section1 = document.createElement("h3");
	var exp_section2 = document.createElement("h3");
	var exp_section3 = document.createElement("h3");
	var exp_section4 = document.createElement("h3");
	$(".page4").append(task);
	// $(".page4").append(paragraph);
	$(".page4").append(exp_section3);

	paragraph.id = 'conditions';
	task.id="task";
	task.classList.add("explainheader");
	exp_section3.id="section3"



	task.innerHTML="Task 2"

	  
	  paragraph.innerHTML = "Please confirm your ratings, and provide the reasons behind your choices. We would like to know what music features led to some emotion ratings you have just made."+'<br>'+ "<br>" +
		"<ol><li>Please watch the short section again and review your emotion ratings. This can be done by<strong> hovering on the timeline graph below the player</strong> , your previous emotion ratings will show up on the VA space on the right.</li> " +
	 	"<li><strong> Click on each rating point</strong> to raise a pop-up window where you can confirm that rating</strong> or <strong>discard the rating </strong> only if you disagree with your previous rating.</li>"+
	 	" <li>If a rating is confirmed, we would like you to <strong> tell how clear is the emotion portrayed by music at the rating point </strong>, and <strong>write down the reasons behind the rating</strong>.</li>"+
	 	"<pre> Examples of possible reasons might be:"
	 	+"<br>" +
		"<ul> <li>the melody is rising</li>"+
		"<li>the harmonies is very tense</li>"+
		"<li>the cello plays soft sound</li>"+
		"<li> ...</li></ul>"
		+"<br>" +
		"There is no right or wrong answer on your reason. Please let us know as much as possible.</pre>"
		+ "<br>" +
		" <li>If a rating is discarded, please skip step 3, and move on to the next rating.</li></ol>"
		 	+ "<br>" +
		 	
		"You will be asked to do this for the ratings in the following 6 short sections."


	exp_section3.innerHTML = "Short Section 3/6"
	exp_section4.innerHTML = "<br>"+"<br>"+"<br>"+"Short Section 4/6"
	//******************************************************
	//*********section1*********
	//******************************************************
	var audioclip3 = document.createElement('div');
	  	audioclip3.id="myaudio3";
	  	//audioclip1.classList.add("page4");
	  	$(".page4").append(audioclip3);

	PB_CMT ("myaudio3");

	var linechart3 = document.createElement('div');
	      
	  	linechart3.id="mylinechart3";
	  	
	  //linechart1.classList.add("center");
	  $(".page4").append(linechart3);

 

	var vachart3 = document.createElement('div');
	  	vachart3.id="myvachart3";
	  	$(".page4").append(vachart3);
	  	vachart3.classList.add('ddd');
	    vachart3.style.position = "relative";
	    vachart3.style.left = "740px";
	    vachart3.style.top = "-530px";
	    vachart3.style.marginBottom = "-350px";

	  	var canvas_3 = document.createElement("canvas");
	     canvas_3.id = "mycanvasE3"
	     canvas_3.position="absolute";
	     canvas_3.width = 320*canvasscale;
	     canvas_3.height = 320*canvasscale;
	  	$("#myvachart3").append(canvas_3); 

	  	var datalabel3 = document.createElement('div');

	    datalabel3.classList.add("emotionlabel");
	    datalabel3.id="emotionlabel3";
	    
	    document.getElementById("myvachart3").append(datalabel3);


		canvasrating("myvachart3","mycanvasE3","emotionlabel3");

		lineplotandcmes("mylinechart3",248,314,"mycanvasE3","emotionlabel3",commentLogIn3,"section3");

	//******************************************************
	//*********section2*********
	//******************************************************
		$(".page4").append(exp_section4);

		var audioclip4 = document.createElement('div');
	  	audioclip4.id="myaudio4";
	  	//audioclip1.classList.add("page4");
	  	$(".page4").append(audioclip4);

	 	 PB_CMT ("myaudio4");

 	var linechart4 = document.createElement('div');
      
  		linechart4.id="mylinechart4";
  	
	  	linechart4.classList.add("center");
	 	 $(".page4").append(linechart4);


    var vachart4 = document.createElement('div');
      	vachart4.id="myvachart4";
	    $(".page4").append(vachart4);
	    vachart4.classList.add('ddd');
	    vachart4.style.position = "relative";
	    vachart4.style.left = "740px";
	    vachart4.style.top = "-530px";
	    vachart4.style.marginBottom = "-350px";

    var canvas_4 = document.createElement("canvas");
	     canvas_4.id = "mycanvasE4"
	     canvas_4.position="absolute";
	     canvas_4.width = 320*canvasscale;
	     canvas_4.height = 320*canvasscale;
	   	 $("#myvachart4").append(canvas_4); 

    var datalabel4 = document.createElement('div');
        datalabel4.classList.add("emotionlabel");
    	datalabel4.id="emotionlabel4";
    
    document.getElementById("myvachart4").append(datalabel4);


    canvasrating("myvachart4","mycanvasE4","emotionlabel4");

    lineplotandcmes("mylinechart4",463,602,"mycanvasE4","emotionlabel4",commentLogIn4,"section4");
    


 // var vachart = document.createElement('div');
 // 	varchart.id="myvachart1";



	// var linechart2 = document.createElement('div');
 //  linechart2.id="mylinechart2";
 //  //linechart1.classList.add("center");
 //  $(".page4").append(linechart2);

 //  lineplotandcmes("mylinechart2");

 //lineplotandcomments("mylinechart2");

  	var btndiv = btnNext('explain_s2');
  	$(".constant").append(btndiv);
 	

}

function pageExplain3(){
	
	$(".page4").remove();
	$(".center").remove();

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

	var exp_section1 = document.createElement("h3");
	var exp_section2 = document.createElement("h3");
	var exp_section5 = document.createElement("h3");
	var exp_section6 = document.createElement("h3");
	$(".page4").append(task);
	// $(".page4").append(paragraph);
	$(".page4").append(exp_section5);

	paragraph.id = 'conditions';
	task.id="task";
	task.classList.add("explainheader");
	exp_section5.id="section5";
	exp_section6.id="section6"



	task.innerHTML="Task 2"

	  
	  paragraph.innerHTML = "Please confirms your ratings, and provide the reasons behind your choices. We would like to know what music features led to some emotion ratings you have just made."+'<br>'+ "<br>" +
		"<ol><li>Please watch the short section again and review your emotion ratings. This can be done by <strong> hovering on the timeline graph below the player</strong> , your previous emotion ratings will show up on the VA space on the right.</li> " +
	 	"<li><strong> Click on each rating point</strong> to raise a pop-up window where you can confirm that rating or discard the rating.</li>"+
	 	"<li>If a rating is confirmed, we would like you to write down the reasons behind the rating.  </li>"
	 	" <li>If a rating is confirmed, we would like you to write down the reasons behind the rating. </li>"
	 	+"<br>"+
	 	"<pre> Examples of possible reasons might be:"
	 	+"<br>" +
		"<ul> <li>the melody is rising and uplifting</li>"+
		"<li>the harmonies sound very tense</li>"+
		"<li> ...</li></ul>"
		+"<br>" +
		"There is no right or wrong answer on your reason. Please let us know as much as possible.</pre>"
		+ "<br>" +
		" <li>If a rating is discarded, please just leave the reason area blank to submit, then move on to the next rating.</li></ol>"
		 	+ "<br>" +
		 	
		"You will be asked to do this for the ratings in the following 6 short sections."


	exp_section5.innerHTML = "Short Section 5/6"
	exp_section6.innerHTML = "<br>"+"<br>"+"<br>"+"Short Section 6/6"
	//******************************************************
	//*********section1*********
	//******************************************************
	    var audioclip5 = document.createElement('div');
        audioclip5.id="myaudio5";
        //audioclip1.classList.add("page4");
        $(".page4").append(audioclip5);

    PB_CMT ("myaudio5");

    var linechart5 = document.createElement('div');
          
        linechart5.id="mylinechart5";
        
      //linechart1.classList.add("center");
      $(".page4").append(linechart5);

 

    var vachart5 = document.createElement('div');
        vachart5.id="myvachart5";
        $(".page4").append(vachart5);
        vachart5.classList.add('ddd');
        vachart5.style.position = "relative";
        vachart5.style.left = "740px";
        vachart5.style.top = "-530px";
        vachart5.style.marginBottom = "-350px";

        var canvas_5 = document.createElement("canvas");
         canvas_5.id = "mycanvasE5"
         canvas_5.position="absolute";
         canvas_5.width = 320*canvasscale;
         canvas_5.height = 320*canvasscale;
        $("#myvachart5").append(canvas_5); 

        var datalabel5 = document.createElement('div');

        datalabel5.classList.add("emotionlabel");
        datalabel5.id="emotionlabel5";
        
        document.getElementById("myvachart5").append(datalabel5);


        canvasrating("myvachart5","mycanvasE5","emotionlabel5");

        lineplotandcmes("mylinechart5",680,733,"mycanvasE5","emotionlabel5",commentLogIn5,"section5");

	//******************************************************
	//*********section2*********
	//******************************************************
		$(".page4").append(exp_section6);
		var audioclip6 = document.createElement('div');
        audioclip6.id="myaudio6";
        //audioclip1.classList.add("page4");
        $(".page4").append(audioclip6);

    PB_CMT ("myaudio6");

    var linechart6 = document.createElement('div');
          
        linechart6.id="mylinechart6";
        
      //linechart1.classList.add("center");
      $(".page4").append(linechart6);

 

    var vachart6 = document.createElement('div');
        vachart6.id="myvachart6";
        $(".page4").append(vachart6);
        vachart6.classList.add('ddd');
        vachart6.style.position = "relative";
        vachart6.style.left = "740px";
        vachart6.style.top = "-530px";
        vachart6.style.marginBottom = "-350px";

        var canvas_6 = document.createElement("canvas");
         canvas_6.id = "mycanvasE6"
         canvas_6.position="absolute";
         canvas_6.width = 320*canvasscale;
         canvas_6.height = 320*canvasscale;
        $("#myvachart6").append(canvas_6); 

        var datalabel6 = document.createElement('div');

        datalabel6.classList.add("emotionlabel");
        datalabel6.id="emotionlabel6";
        
        document.getElementById("myvachart6").append(datalabel6);


        canvasrating("myvachart6","mycanvasE6","emotionlabel6");

        lineplotandcmes("mylinechart6",788,888,"mycanvasE6","emotionlabel6",commentLogIn6,"section6");
    


 // var vachart = document.createElement('div');
 // 	varchart.id="myvachart1";



	// var linechart2 = document.createElement('div');
 //  linechart2.id="mylinechart2";
 //  //linechart1.classList.add("center");
 //  $(".page4").append(linechart2);

 //  lineplotandcmes("mylinechart2");

 //lineplotandcomments("mylinechart2");

  	var btndiv = btnNext('explain_s3');
  	$(".constant").append(btndiv);
 	

}

  // logRelay("clearall");
  // logRelay("trialsLog");
  // logRelay("mov1");



function PB_CMT (audioID){

  var audiodiv= document.getElementById(audioID);

   // audiodiv.id="myaudio"
  //var ifrm = document.createElement("div");
 // ifrm.id = "myaudio";
 var filepath;
  //player
  switch(audioID) {
    case "myaudio1":
      filepath= "https://content.jwplatform.com/videos/Pk9bJNBJ-7xqDv6Uz.mp4";//segment2
      break;
    case "myaudio2":
     filepath= "https://content.jwplatform.com/videos/eGWfpH6u-7xqDv6Uz.mp4";
    break;
    case "myaudio3":
     filepath= "https://content.jwplatform.com/videos/seiXhSMW-7xqDv6Uz.mp4";
    break;
    case "myaudio4":
     filepath= "https://content.jwplatform.com/videos/XGlOvNjg-7xqDv6Uz.mp4";
    break;
    case "myaudio5":
     filepath= "https://content.jwplatform.com/videos/TXgpIczu-7xqDv6Uz.mp4";
    break;
    case "myaudio6":
     filepath= "https://content.jwplatform.com/videos/RmyI3AUF-7xqDv6Uz.mp4";
    break;

	};	
	// filepath="https://content.jwplatform.com/videos/QkhnzpwU-QBzDmDmf.m4a";

	const player1 =jwplayer(audioID).setup({
    
      //file: "https://content.jwplatform.com/videos/eToUBrbD-RRiR9dl9.mp4",
      //wangwang
      //file:"https://content.jwplatform.com/videos/9las3Az9-To6C1UXs.mp4",
      // file:"https://content.jwplatform.com/videos/yAY0yvTN-u8GeqODi.mp4",
      // wholemovmen

      // file: "https://content.jwplatform.com/videos/QkhnzpwU-QBzDmDmf.m4a",
      file: filepath,
      
      width: 710,
      height: 410,
      repeat: false,
      //aspectratio: '16:9',
      autostart: false,
      controls:true,
      displayPlaybackLabel:true

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

// function commentsforrating (commentID) {

// 	var commentdiv= document.getElementById(commentID);
// 	commentdiv.classList.add("commentdiv");
//     var x = document.createElement("textarea");
//  	x.id="comment_R1";
//  	x.setAttribute("type", "text");
//  	x.setAttribute("cols", "40");
//     x.setAttribute("value", "");
//     x.setAttribute("placeholder","Rating 1: ..");    
//     commentdiv.appendChild(x);
// 	commentdiv.appendChild(document.createElement("br"));   
//  	var x2= document.createElement("textarea");
//  	x2.id="comment_R2";
//  	x2.setAttribute("cols", "40");
//  	x2.setAttribute("type", "text");
//     x2.setAttribute("value", "");
//     x2.setAttribute("placeholder","Rating 2: ..");
//     commentdiv.appendChild(x2);
//     commentdiv.appendChild(document.createElement("br")); 
//     var x3= document.createElement("textarea");
//  	x3.id="comment_R3";
//  	x3.setAttribute("cols", "40");
//  	x3.setAttribute("type", "text");
//     x3.setAttribute("value", "");
//     x3.setAttribute("placeholder","Rating 3: ..");
//     commentdiv.appendChild(x3);
//     commentdiv.appendChild(document.createElement("br")); 
// 	var x4= document.createElement("textarea");
//  	x4.id="comment_R4";
//  	x4.setAttribute("cols", "40");
//  	x4.setAttribute("type", "text");
//     x4.setAttribute("value", "");
//     x4.setAttribute("placeholder","Rating 4: ..");
//     commentdiv.appendChild(x4);
//     commentdiv.appendChild(document.createElement("br")); 
// 	var x5= document.createElement("textarea");
//  	x5.id="comment_R5";
//  	x5.setAttribute("cols", "40");
//  	x5.setAttribute("type", "text");
//     x5.setAttribute("value", "");
//     x5.setAttribute("placeholder","Rating 5 or More: ..");
//     commentdiv.appendChild(x5);


// }

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

	//linediv.id="linechartforplotyly";

	return Plotly.newPlot(linechartID, data, layout,{responsive: false});


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
	//
	$(".page4").remove();
	$(".center").remove();



	//var arrBtn = new Array();
	clearElements();
	// document.body.style.backgroundColor = '#362632';
	var page5 = document.createElement('div')
  	page5.classList.add("page5");
   	$(".gamefield").append(page5);

	// var last = document.createElement('div')
 //   	last.classList.add("page5");
 //   	last.id = "lastPage";
 //    $("page5").append(last);

    var paragraph1 = document.createElement("p");
    var paragraph2 = document.createElement("p");
	paragraph1.id = 'lastPara';
	paragraph2.id = 'lastPara';
	paragraph1.innerHTML = "Thank you very much for your participation." ;
	paragraph2.innerHTML = "Could you please give us your valuable feedback by filling following questionnaire:" 
	+ "<br>" +"Please type in your ID: "+game.userID+"<br> in the questionniare."
	paragraph2.style.fontSize = '15px';
	$(".page5").append(paragraph1);
	$(".page5").append(paragraph2);

	// var btnRow = createRow('horizontal');
	// $(last).append(btnRow);

	var aBtn = document.createElement('button');
  	aBtn.innerHTML = 'Questionnaire';
  	aBtn.classList.add("button");
 	aBtn.addEventListener('click', function () {
 		openWin();
    	//linkTo ('outSide', "con2");
    });
    $(".page5").append(aBtn);

    var btndiv = btnSave('nothing');
  	$(".constant").append(btndiv);

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