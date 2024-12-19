import React, { useState } from 'react';
import Happy from './happy.png';
import Like from './like.png';
import Sad from './sad.png';

function EmojiDisplay() {
  const [inputText, setInputText] = useState('');
  const [displayImage, setDisplayImage] = useState(null);

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    switch(text.toLowerCase()) {
      case 'happy':
        setDisplayImage(Happy);
        break;
      case 'like':
        setDisplayImage(Like);
        break;
      case 'sad':
        setDisplayImage(Sad);
        break;
      default:
        setDisplayImage(null);
    }
  }

  return (
    <div>
      <input 
        type="text" 
        value={inputText} 
        onChange={handleInputChange} 
        placeholder="Type Happy, Like, or Sad"
      />
      {displayImage && <img src={displayImage} alt={inputText} />}
    </div>
  );
}

export default EmojiDisplay;
