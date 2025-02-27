var metronome = new Metronome();
var tempo = document.getElementById('tempo');
tempo.textContent = metronome.tempo;
var measureLength = document.getElementById('measureLength');
measureLength.textContent = metronome.measureLength;


var playPauseIcon = document.getElementById('play-pause-icon');

var playButton = document.getElementById('play-button');
playButton.addEventListener('click', function() {
    metronome.startStop();

    if (metronome.isRunning) {
        playPauseIcon.className = 'pause';
    }
    else {
        playPauseIcon.className = 'play';
    }

});

var tempoChangeButtons = document.getElementsByClassName('tempo-change');
for (var i = 0; i < tempoChangeButtons.length; i++) {
    tempoChangeButtons[i].addEventListener('click', function() {
        metronome.tempo += parseInt(this.dataset.change);
        tempo.textContent = metronome.tempo;
    });
}

var measureLengthChangeButtons = document.getElementsByClassName('measureLength-change');
console.log(measureLengthChangeButtons);
for (var i = 0; i < measureLengthChangeButtons.length; i++) {
  measureLengthChangeButtons[i].addEventListener('click', function() {
    metronome.measureLength += parseInt(this.dataset.change);
    measureLength.textContent = metronome.measureLength;
    console.log(22);
  });
}
