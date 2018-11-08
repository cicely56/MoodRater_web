function warmUpGame(catchParent){
  var rootElement = catchParent;
  clearGameDemo();
  addCountDemo(rootElement);
}

function circleDemo (id) {
  var circle = document.createElement("div");
  circle.id = id;
  circle.classList.add("gamebutton");
  circle.addEventListener('click', function (event) {
    addToPlayerDemo(this.id)
  }, false);
  return circle;
}

function createRowDemo(x) {
  var row = document.createElement('div');
  if(x === 'vertical'){
    row.classList.add('verticalRow');
    row.id = 'verticalRow';
  }
  else{
    row.classList.add('horizontalRowDemo');
    row.id = 'horizontalRow';
  }
  return row;
}

function clearGameDemo() {
  gameDemo.currentGame = [];
  gameDemo.trialCount = 0;
}

function clearElements(){
  if(document.getElementById('horizontalRow') || document.getElementById('verticalRow')){ //remove the first example before showing the next
      while(document.getElementById('horizontalRow')|| document.getElementById('verticalRow')){
        $("#horizontalRow").remove();
        $("#verticalRow").remove();
      }
    }
}

function addCountDemo(rootElement) {
  for(var i=0; i<gameDemo.noteCount; i++){
  var row = createRowDemo('vertical');
  row.appendChild(circleDemo(game.possibilities[i]));
  // if (gameCondition === 'con1' || gameCondition === 'con2' || gameCondition === 'con5'){
  //   row.appendChild(circleDemo(game.possibilities125[i]));
  // }else{
  //   row.appendChild(circleDemo(game.possibilities346[i]));
  // }
  rootElement.append(row);
  }
  generateMoveDemo(gameDemo.noteCount);
}

function generateMoveDemo(times){
  gameDemo.currentGame = [];
  for(var i = 0; i < times; i++){
    var cur = "#" + gameDemo.possibilities[(Math.floor(Math.random()*times))]
    if(checkRepeatDemo(cur)){ //make sure there's no repeat notes in the sequence
      gameDemo.currentGame.push(cur);
    }else i--;
  }
  showMovesDemo();
}

function checkRepeatDemo(randomX){
  var x = randomX;
  for(var i=0; i<=gameDemo.currentGame.length; i++){
    if(x === gameDemo.currentGame[i]){
      return false;
      break;
    }
  }
  return true;
}

function showMovesDemo() {
  var i = 0;
  var moves = setInterval(function(){
    playGameDemo(gameDemo.currentGame[i]);
    i++;
    if (i >= gameDemo.currentGame.length) {
      clearInterval(moves);
    }
  }, 400)
  clearPlayerDemo();
}

function soundMatchDemo(idName) {
  var cNotes = document.getElementById("cNotes");
  var dNotes = document.getElementById("dNotes");
  var eNotes = document.getElementById("eNotes");
  if (gameCondition === 'con1' || gameCondition === 'con2' || gameCondition === 'con5'){
    switch(idName) {
      case'#c1':
      notePlayDemo(cNotes);
      break;
    case '#c2':
      notePlayDemo(dNotes);
      break;
    case '#c3':
      notePlayDemo(eNotes);
      break;
    };
  }else{
    switch(idName) {
      case'#c3':
        notePlayDemo(cNotes);
        break;
      case '#c2':
        notePlayDemo(dNotes);
        break;
      case '#c1':
        notePlayDemo(eNotes);
        break;
    };
  }
}

function notePlayDemo(note){
  note.currentTime = 0.7;
  note.play();
}

function playGameDemo(field) {
  soundMatchDemo(field);
  setTimeout(function(){
    $(field).addClass('hover');
  }, 50);
  setTimeout(function(){
      $(field).removeClass('hover');
  }, 300);
}

function clearPlayerDemo() {
  gameDemo.player = [];
}

function addToPlayerDemo(id) {
  var field = "#"+id;
  gameDemo.player.push(field);
    playerTurnDemo(field);
} 

function playerTurnDemo(id) {
  soundMatchDemo(id);
  var check = gameDemo.player.length === gameDemo.currentGame.length; //check if input is finished
  if (check) {
    setTimeout(function(){
      if(gameDemo.trialCount<2){
        clearElements();
        setTimeout(function(){
          addCountDemo($(".page3"));
        }, 300);
        }else{
          clearElements();
          document.body.style.backgroundColor = '#362632';
          $('.backgroundRect').css("backgroundColor", "rgba(255,255,255,0.1)");
        }
      }, 400); 
      gameDemo.trialCount++;
      if(gameDemo.trialCount > 1){
      buttonEnable ();
    }
  }
}
