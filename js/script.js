$(document).ready(function(){
  
  $('.box').mousedown(function(){
      playNote(this.id);
  });
  
  $(window).keypress(function(letter) {
    var key = letter.keyCode
    if (key === 97)
    {
      playNote("c");
    }
    else if (key === 115)
    {
      playNote("d");
    }
    else if (key === 100)
    {
      playNote("e");
    }
    else if (key === 102)
    {
      playNote("f");
    }
    else if (key === 103)
    {
      playNote("g");
    }
    else if (key === 104)
    {
      playNote("a");
    }
    else if (key === 106)
    {
      playNote("b");
    }
  });
  
  function playNote(letter){          
    document.getElementById(letter+"Audio").currentTime = 0;
    document.getElementById(letter+"Audio").play();
  }  
});



///EXAMPLE OF JS BEFORE REFRACTORING - THIS WAS THE LONG ORIGINAL VERSION//////

//$(document).ready(function(){
//  var cNote = document.getElementById('cAudio');
//  $('#c').mousedown(function(){
//      cNote.currentTime = 0;
//      cNote.play();
//  });
//  
//  var dNote = document.getElementById('dAudio');
//  $('#d').mousedown(function(){
//      dNote.currentTime = 0;
//      dNote.play();
//  });
//  
//  var eNote = document.getElementById('eAudio');
//  $('#e').mousedown(function(){
//      eNote.currentTime = 0;
//      eNote.play();
//  });
//  
//  var fNote = document.getElementById('fAudio');
//  $('#f').mousedown(function(){
//      fNote.currentTime = 0;
//      fNote.play();
//  });
//  
//  var gNote = document.getElementById('gAudio');
//  $('#g').mousedown(function(){
//      gNote.currentTime = 0;
//      gNote.play();
//  });
//  
//  var aNote = document.getElementById('aAudio');
//  $('#a').mousedown(function(){
//      aNote.currentTime = 0;
//      aNote.play();
//  });
//  
//  var bNote = document.getElementById('bAudio');
//  $('#b').mousedown(function(){
//      bNote.currentTime = 0;
//      bNote.play();
//  });
//});