import { soundBit } from "./types"


interface MachineProps{
  soundBit: soundBit
}

const Machine = ({soundBit}: MachineProps) => {
    const playClip = (clip: soundBit) => {
      (document.getElementById(clip.alphabetLetter) as HTMLAudioElement) 
      .play()
      .catch(console.error);

      document.getElementById("display")!.innerText = clip.description;
    }

  return (
    <button 
      className="drum-pad" 
      id={`drum-${soundBit.alphabetLetter}`} 
      onClick={() => playClip(soundBit)}
      >
      <audio src={soundBit.url} id={soundBit.alphabetLetter} className="clip" />
    {soundBit.alphabetLetter}
    </button>
  )
}

export default Machine