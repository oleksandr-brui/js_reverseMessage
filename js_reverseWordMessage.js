'use strict';

function reverseMessage(message) {
  // write code here
  const splitMessage = message.split(' ');
  let trueMessage = '';

  for (let i = 0; i < splitMessage.length; i++) {
    const currentWord = splitMessage[i];
    const splitCurrentWord = currentWord.split('');
    const currentWordReverse = splitCurrentWord.reverse();
    const joinCurrentWordReverse = currentWordReverse.join('');

    trueMessage += joinCurrentWordReverse + ' ';
  }

  return trueMessage.trim();
}

decryptMessage('tpircsavaJ si eht egaugnal fo erutuf'); // 'Javascript is the language of future');
