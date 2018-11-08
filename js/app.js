var Application = {
  moods: [
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
    ['sad',0.08,0.39,0.31,16]
  ],
 
  init: function() {
    this.is_touch_device = 'ontouchstart' in document.documentElement;
    this.canvas = document.getElementById('canvas');
    this.label = document.getElementById('label');
    this.draw();
    this.lastClick = new Date();

    if (this.is_touch_device) {
      this.canvas.addEventListener('touchstart', function(event) {
        Application.onMouseUp(event.targetTouches[0]);
      });
    }
    else {
      this.canvas.addEventListener('click', function(event) {
        Application.onMouseUp(event);
      });
    }
  },

  tl: { r: 200, g: 0, b: 0 },
  tr: { r: 200, g: 150, b: 0 },
  bl: { r: 0, g: 50, b: 100 },
  br: { r: 200, g: 230, b: 80 },
  
  interpolateColor: function(a, b, x) {
    return {
      r: Math.floor(a.r + (b.r - a.r) * x),
      g: Math.floor(a.g + (b.g - a.g) * x),
      b: Math.floor(a.b + (b.b - a.b) * x)
    };
  },

  draw: function() {
    var step = 20;
    var ctx = this.canvas.getContext("2d");  
    ctx.clearRect(0, 0, 320, 320);

    var list = [];

    for (var y = 0; y < 320; y += step) {
      var left = this.interpolateColor(this.tl, this.bl, y / 320);
      var right = this.interpolateColor(this.tr, this.br, y / 320);
      for (var x = 0; x < 320; x += step) {
        var color = this.interpolateColor(left, right, x / 320);
        ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
        ctx.fillRect(x, y, step, step);
      }
    }

    ctx.beginPath();
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.moveTo(0, 160);
    ctx.lineTo(320, 160);
    ctx.stroke();
    
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.beginPath();
    ctx.moveTo(320, 160);
    ctx.lineTo(310, 150);
    ctx.lineTo(310, 170);
    ctx.fill();

    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.moveTo(160, 320);
    ctx.lineTo(160, 0);
    ctx.stroke();
    
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.beginPath();
    ctx.moveTo(160, 0);
    ctx.lineTo(150, 10);
    ctx.lineTo(170, 10);
    ctx.fill();

    ctx.font = "16px Arial";
    ctx.fillText("Valence", 200, 158);  
    
    ctx.save();
    ctx.translate(158, 120);
    ctx.rotate(Math.PI * 1.5);
    ctx.font = "16px Arial";
    ctx.fillText("Arousal", 0, 0);  
    ctx.restore();
 
    if (this.marker) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.beginPath();
      ctx.arc(this.marker.x, this.marker.y, 20, 0, Math.PI*2, true); 
      ctx.fill();
    }
  },
 
  request: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.send(null);
  },

  onMouseUp: function(event) {
    if ((new Date() - this.lastClick) > 1000) {
      this.setMarker(event);
      this.sendPosition(event);
      this.draw();
      this.lastClick = new Date();
    }
  },

  sendPosition: function(event) {
    var x = event.pageX / 320;
    var y = 1 - event.pageY / 320;

    this.request("/moodconductor/mood?x=" + x + "&y=" + y);
  },

  setMarker: function(event) {
    this.marker = {
      x: event.pageX,
      y: event.pageY
    };

    var x = event.pageX / 320;
    var y = 1 - event.pageY / 320;

    this.label.innerHTML = this.findMood(x, y);
  },

  findMood: function(x, y) {
    var distance = 1;
    var index = null;
    
    for (var i = 0; i < this.moods.length; i++) {
      var mood = this.moods[i];
      var dx = Math.abs(mood[1] - x);
      var dy = Math.abs(mood[2] - y);
      var d = Math.sqrt(dx * dx + dy * dy);

      if (d < distance) {
        distance = d;
        index = i;
      }
    }

    return this.moods[index][0];
  }
};
