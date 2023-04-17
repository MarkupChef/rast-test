import { createSlice } from '@reduxjs/toolkit';
import { QUESTIONS_STORE } from '../constants';
import { Question } from '../data';

export interface InitialState {
  index: number;
  questions: Question[];
  error: boolean;
  started: boolean;
  finished: boolean;
}

const localStore = localStorage.getItem(QUESTIONS_STORE);

const initialState: InitialState = localStore
  ? JSON.parse(localStore)
  : {
      index: 0,
      questions: [],
      error: false,
      started: false,
      finished: false,
    };

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    start(state) {
      state.index = 0;
      state.questions = [
        { id: 1, expression: '1 + "2"', answerIndex: 1, answerUserIndex: 0, options: [3, '"12"', 'NaN', false] },
        { id: 2, expression: 'true + true', answerIndex: 0, answerUserIndex: 0, options: [2, true, '"2"', false] },
        {
          id: 3,
          expression: 'true + "true"',
          answerIndex: 1,
          answerUserIndex: 0,
          options: ['"true"', '"truetrue"', 2, true],
        },
      ];
      state.started = true;
      state.finished = false;
      state.error = false;

      localStorage.setItem(QUESTIONS_STORE, JSON.stringify(state));
    },
    setAnswer(state, action) {
      state.questions[state.index].answerUserIndex = action.payload.answerIndex;
      localStorage.setItem(QUESTIONS_STORE, JSON.stringify(state));
    },
    nextQuestion(state) {
      if (state.index === state.questions.length - 1) {
        state.started = false;
        state.finished = true;
      } else if (state.index < state.questions.length - 1) {
        state.index++;
      }
      localStorage.setItem(QUESTIONS_STORE, JSON.stringify(state));
    },
    prevQuestion(state) {
      state.index = state.index > 0 ? state.index - 1 : state.index;
      localStorage.setItem(QUESTIONS_STORE, JSON.stringify(state));
    },
  },
});

export const { start, setAnswer, nextQuestion, prevQuestion } = testSlice.actions;

export default testSlice.reducer;
