import { useState } from 'react';
import './App.css';

function App() {
  const emojis = ['🤠', '👽', '🤖', '💩', '🦒', '🐲', '🦖', '🐦‍🔥', '🧜‍♀️', '🎢', '🕶️', '🍉'];
  const [contador, setContador] = useState(0);
  const [emojiAtual, setEmojiAtual] = useState(null);

  function apertar() {
    let n = Math.floor(Math.random() * emojis.length);
    setEmojiAtual(emojis[n]);
    setContador(contador + 1);
  }

  function reiniciar() {
    setEmojiAtual(null);
    setContador(0);
  }

  return (
    <div className='container-geral'>
      <div className='container-header'>
        <h1>Histórias ao Acaso</h1>
        <h1>🎲✨</h1>
        <p>A cada rodada, uma nova imagem será sorteada, e sua missão é criar uma história única a partir dela.</p>
      </div>
        
      <div className='container-emoji'>
        <h2>{emojiAtual || '⁉️'}</h2>
      </div>
        
      <div className='container-botão'>
        <button onClick={apertar}>Jogar</button>
      </div>

      <div className='container-reiniciar'> 
        <button onClick={reiniciar}>Reiniciar</button>
      </div>
        
      <div className='container-contador'>
        <p>Emojis sorteados: {contador}</p>
      </div>
    </div>
  );
}

export default App;
