
import './App.css'
import { soundBit } from './types'
import Machine from './Machine'

const soundBits: soundBit[] = [
  {
  alphabetLetter: "Q",
  url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
  description: "Heater 1"
  },
  {
  alphabetLetter: "W",
  url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
  description: "Heater 2"
  },
  {
    alphabetLetter: "E",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    description: "Heater 3"
  },
  {
  alphabetLetter: "A",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    description: "Heater 4"
  },
  {
    alphabetLetter: "S",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    description: "Clap" 
  },
  {
    alphabetLetter: "D",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    description: "Open-HH"
  },
  {
  alphabetLetter: "Z",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    description: "Kick-n'-Hat"
  },
  {
    alphabetLetter: "X",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    description: "Kick" 
  },
  {
    alphabetLetter: "C",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
    description: "Closed-HH" 
  }
]

function App() {
  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = soundBits.find((clip) => clip.alphabetLetter === e.key.toUpperCase());
    if(!clip) return;
    (document.getElementById(clip.alphabetLetter) as HTMLAudioElement) 
    .play()
    .catch(console.error);

    document.getElementById("drum-" + clip.alphabetLetter)?.focus();
    document.getElementById("display")!.innerText = clip.description;
  }
  
  return (
    
    <div id="drum-machine" onKeyDown={playAudio}>
      <h1>Drum Machine</h1>
      <div className='whole-drum'>
        {soundBits.map((clip)=>(<Machine soundBit={clip} key={clip.alphabetLetter}/>))}
      </div>

      <div id="display"></div>
    </div>  
    
  )
}

export default App
