import React from 'react'

const WordbyWordText = ({text}) => {

    const words = text.split(' ');

  return (
    <div className="word-by-word">
      {words.map((word, index) => (
        <span
          key={index}
          className="word"
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          {word}
        </span>
      ))}
    </div>
  );
 
}

export default WordbyWordText