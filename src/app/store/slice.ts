import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Question } from '../data';
import { shuffleArray } from '../utils/shuffleArray';

export interface InitialState {
  index: number;
  questions: Question[];
  started: boolean;
  finished: boolean;
  status: null | 'loading' | 'finished' | 'error';
  error: null | Error;
}

export const fetchQuestions = createAsyncThunk('test/fetchQuestions', async function (_, { rejectWithValue }) {
  try {
    const response = await fetch('./data.json');

    if (!response.ok) {
      throw new Error('ErrorServer');
    }

    return (await response.json()) as Question[];
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

const initialState: InitialState = {
  index: 0,
  questions: [],
  started: false,
  finished: false,
  status: null,
  error: null,
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    start(state) {
      state.index = 0;
      state.questions = [];
      state.started = true;
      state.finished = false;
      state.error = null;
    },
    setAnswer(state, action) {
      state.questions[state.index].answerUserIndex = action.payload.answerIndex;
    },

    nextQuestion(state) {
      if (state.index === state.questions.length - 1) {
        state.started = false;
        state.finished = true;
      } else if (state.index < state.questions.length - 1) {
        state.index++;
      }
    },

    prevQuestion(state) {
      state.index = state.index > 0 ? state.index - 1 : state.index;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(fetchQuestions.fulfilled, (state, actions) => {
      state.status = 'finished';
      state.index = 0;
      state.questions = shuffleArray(actions.payload);
      state.started = true;
      state.finished = false;
      state.error = null;
    });

    builder.addCase(fetchQuestions.rejected, (state, actions) => {
      state.status = 'error';
      state.error = actions.payload as Error;
    });
  },
});

export const { start, setAnswer, nextQuestion, prevQuestion } = testSlice.actions;

export default testSlice.reducer;
