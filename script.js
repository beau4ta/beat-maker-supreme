const bpmNumber = document.querySelector('.number');

function sequencer(){
    const bass = new Tone.Player('./drums/808.wav').toDestination();
    const snare = new Tone.Player('./drums/snare.wav').toDestination();
    const closedhh = new Tone.Player('./drums/closedhh.wav').toDestination();
    const openhh = new Tone.Player('./drums/openhh.wav').toDestination();
    const kick = new Tone.Player('./drums/kick.wav').toDestination();
    let index = 0;

    Tone.Transport.scheduleRepeat(repeat,'16n')
    Tone.Transport.bpm.value = 120;
    Tone.Transport.start();
    
    function repeat(){
        let step = index % 16;
        let bassInputs = document.querySelector(`.bass input:nth-child(${step + 1 })`)
        if (bassInputs.checked) {
            bass.start();
        }
        let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`)
        if (snareInputs.checked) {
            snare.start();
        }
        let closedHHInputs = document.querySelector(`.closedhh input:nth-child(${step + 1})`)
        if (closedHHInputs.checked) {
            closedhh.start();
        }
        let openHHInputs = document.querySelector(`.openhh input:nth-child(${step + 1})`)
        if (openHHInputs.checked) {
            openhh.start();
        }
        let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`)
        if (kickInputs.checked) {
            kick.start();
        }
        index++
    }
}

document.getElementById('bpmInputId').addEventListener('input', e => {
    Tone.Transport.bpm.rampTo(+e.target.value, 0.1)
  })


sequencer();