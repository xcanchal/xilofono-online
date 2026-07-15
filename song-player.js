(function(){
  "use strict";

  var FREQ = {
    "Do":523.25, "Re":587.33, "Mi":659.25, "Fa":698.46,
    "Sol":783.99, "La":880.00, "Si":987.77, "Do'":1046.50
  };
  var BEAT = 60000 / 170;
  var ctx = null;
  var playing = false;

  function audio(){
    if(!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if(ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  function strike(freq){
    var ac = audio(), t = ac.currentTime;
    var out = ac.createGain();
    out.gain.setValueAtTime(0.5, t);
    out.connect(ac.destination);

    [[1, 1.0, 0.9], [3, 0.35, 0.35], [6.3, 0.12, 0.12]].forEach(function(p){
      var o = ac.createOscillator(), g = ac.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(freq * p[0], t);
      g.gain.setValueAtTime(p[1], t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + p[2]);
      o.connect(g); g.connect(out);
      o.start(t); o.stop(t + p[2] + 0.05);
    });

    var len = ac.sampleRate * 0.02;
    var buf = ac.createBuffer(1, len, ac.sampleRate);
    var data = buf.getChannelData(0);
    for(var i=0;i<len;i++) data[i] = (Math.random()*2-1) * (1 - i/len);

    var n = ac.createBufferSource(), ng = ac.createGain(), hp = ac.createBiquadFilter();
    hp.type = "highpass"; hp.frequency.value = 2000;
    ng.gain.setValueAtTime(0.25, t);
    n.buffer = buf; n.connect(hp); hp.connect(ng); ng.connect(out);
    n.start(t);
  }

  function buildSequence(sheet){
    var seq = [];
    sheet.querySelectorAll(".row").forEach(function(row){
      var rowSeq = [];
      Array.prototype.forEach.call(row.children, function(el){
        if(el.classList.contains("chip")) rowSeq.push(el);
        if(el.classList.contains("gap")) rowSeq.push(null);
      });
      var repeat = row.querySelector(".rep") ? 2 : 1;
      for(var i=0;i<repeat;i++){
        seq = seq.concat(rowSeq);
        seq.push(null);
      }
    });
    return seq;
  }

  document.querySelectorAll(".listen-song").forEach(function(button){
    var sheet = document.querySelector(".note-card.sheet");
    if(!sheet) return;
    var seq = buildSequence(sheet);
    if(!seq.length) return;

    button.addEventListener("click", function(){
      if(playing) return;
      playing = true;
      button.disabled = true;
      button.textContent = "Escuchando...";
      audio();

      seq.forEach(function(chip, idx){
        setTimeout(function(){
          if(chip){
            strike(FREQ[chip.textContent]);
            chip.classList.add("glow");
            setTimeout(function(){ chip.classList.remove("glow"); }, BEAT * 0.72);
          }
          if(idx === seq.length - 1){
            setTimeout(function(){
              playing = false;
              button.disabled = false;
              button.textContent = "▶ Escuchar";
            }, BEAT);
          }
        }, idx * BEAT);
      });
    });
  });
})();
