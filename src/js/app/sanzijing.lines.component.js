  var audio = document.getElementById('player');
  
  if (!(audio.canPlayType && (audio.canPlayType('audio/mp3') || audio.canPlayType('audio/mpeg')) )) {
    alert('Please use a browser that can play MP3s like Chrome, Safari, IE9');
  }
  
  // create aligner
  var aligner = new AudioAligner(document.getElementById('target'), audio); 
  
  // load and align
  aligner.align('assets/karaoke/sanzijing/szjtw.mp3', 'assets/karaoke/sanzijing/szjtw.json'); 