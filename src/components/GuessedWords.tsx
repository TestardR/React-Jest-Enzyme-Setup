import React from 'react';
import PropTypes, { string } from 'prop-types';

interface IProps {
  guessedWord: [
    {
      guessedWord: string;
      letterMatchCount: number;
    }
  ];
}

const GuessedWords: React.FC<IProps> = props => {
  if (props.guessedWord.length === 0) {
    content = (
      <span data-text="guess-instructions">Try to guess the scret word !</span>
    );
  }

  return <div data-test="component-guessed-words">{content}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
