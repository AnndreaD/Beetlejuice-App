import {combineReducers} from 'redux';

const INITIAL_STATE = {
  claims: [],
  question: [],
  dilemma: [],
  currentGame: [],
  categories: [],
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  game: gameReducer,
});
