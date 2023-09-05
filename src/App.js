import './App.css';
import TodoApp from './TodoApp';
import { TodosProvider } from './contexts/todoContext';
import NinaAudio from './assets/Nina.mp3';
import { useState } from 'react';

function App() {
  const [audioPlayed, setAudioPlayed] = useState(false);

  const handleStartClick = () => {
    if (!audioPlayed) {
      const audio = new Audio(NinaAudio);
      setAudioPlayed(true);
      audio.play();
    }
  };
  return (
    <div className="landing-page">
      <div className={`overlay ${audioPlayed ? 'hidden' : ''}`}>
        <div style={{display:'flex',flexDirection:'column'}}>
        <h3 >Welcome 😴 Nini</h3>
        <button className='bg-gray-700 opacity-70 text-white p-2 rounded active:bg-gray-900'  onClick={handleStartClick}><span >Click Me 🤗</span>
        </button>
        </div>
      </div>
      <TodosProvider>
        <TodoApp />
      </TodosProvider>
    </div>
  );
}

export default App;
