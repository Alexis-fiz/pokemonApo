import { BehaviorSubject } from 'rxjs';

import { getPokemonWordle } from '../api/pokemon';
import { MAX_WORDLE_TRIES } from '../constants/constants';
import { getRandomInt } from '../helpers/damage';
import { encodeString, decodeString, compareStrings } from '../helpers/stringHelpers';

const wordle$ = new BehaviorSubject(
  {
    tries: [],
    currentTry: 0,
    wordLength: 0,
    winnerWord: '',
    isGameOver: false,
    isGameWon: false,
    score: 0,
    tips: {},
  }
);

export const WordleGame = {
  startWordle: async wordsArray => {
    const randomIndex = getRandomInt(386);
    const itemSelected = wordsArray[randomIndex];
    const tips = await getPokemonWordle(itemSelected.url);
    const { name } = itemSelected;
    const { length } = name;
    const tries = [...Array(MAX_WORDLE_TRIES)].map((_, index) => {
      return {
        id: index,
        wordTyped: '',
        comparedStrings: [],
      };
    });
    const tempGame = WordleGame.getValue();
    WordleGame.update({
      ...tempGame,
      tries,
      tips,
      winnerWord: encodeString(name),
      wordLength: length,
      isGameWon: false,
      isGameOver: false,
      currentTry: 0,
    });
  },
  resetScore: () => {
    const _wordleInfo = WordleGame.getValue();
    WordleGame.update({ ..._wordleInfo, score: 0 });
  },
  gameLogic: (keyValue, keyboard) => {
    const isValidKeyPress = keyboard.some(key => (key.value === keyValue));
    if (!isValidKeyPress) return console.log('NOT VALID KEYPRESS');
    if (keyValue === 'enter' || keyValue === 'backspace') {
      const specialKey = keyboard.find(key => key.value === keyValue);
      specialKey.action();
      return;
    }
    if (WordleGame.lettersInWordReached()) return;
    WordleGame.onUpdateWordTyped(keyValue);
  },
  returnTry: () => {
    const tempGame = WordleGame.getValue();
    const { currentTry: index, tries, wordLength, winnerWord } = tempGame;
    return { index, tryObj: tries[index], wordLength, winnerWord };
  },
  onUpdateWordTyped: keyValue => {
    const { index, tryObj } = WordleGame.returnTry();
    const newTry = { ...tryObj, wordTyped: tryObj.wordTyped + keyValue };
    const _wordleInfo = WordleGame.getValue();
    _wordleInfo.tries[index] = newTry;
    WordleGame.update({ ..._wordleInfo });
  },
  onPressBackSpace: () => {
    const { index, tryObj } = WordleGame.returnTry();
    const newTry = { ...tryObj, wordTyped: tryObj.wordTyped.slice(0, -1) };
    const _wordleInfo = WordleGame.getValue();
    _wordleInfo.tries[index] = newTry;
    WordleGame.update({ ..._wordleInfo });
  },
  onPressEnter: () => {
    const { index, tryObj, winnerWord } = WordleGame.returnTry();
    const { wordTyped } = tryObj;
    const decodedWinnerWord = decodeString(winnerWord);
    const _wordleInfo = WordleGame.getValue();
    console.log(decodedWinnerWord, wordTyped);
    if (decodedWinnerWord === wordTyped) {
      console.log('WON');
      const comparedStrings = compareStrings(decodedWinnerWord, wordTyped);
      const newTryObj = { ...tryObj, comparedStrings };
      _wordleInfo.tries[index] = newTryObj;
      WordleGame.update({ ..._wordleInfo, isGameWon: true, score: _wordleInfo.score + 1 });
      return;
    }
    if (index === MAX_WORDLE_TRIES - 1) {
      WordleGame.update({ ..._wordleInfo, isGameOver: true, score: 0 });
      return;
    }
    const comparedStrings = compareStrings(decodedWinnerWord, wordTyped);
    const newTryObj = { ...tryObj, comparedStrings };
    _wordleInfo.tries[index] = newTryObj;
    WordleGame.update({ ..._wordleInfo, currentTry: _wordleInfo.currentTry + 1 });
  },
  lettersInWordReached: () => {
    const { wordLength, tryObj } = WordleGame.returnTry();
    const { wordTyped } = tryObj;
    const isMaxReached = wordTyped.length >= wordLength;
    return isMaxReached;
  },
  update: wordleInfo => {
    wordle$.next(wordleInfo);
  },
  subscribe: setWordleGame => wordle$.subscribe(setWordleGame),
  getValue: () => wordle$.value,

};

export default {
  WordleGame,
};
