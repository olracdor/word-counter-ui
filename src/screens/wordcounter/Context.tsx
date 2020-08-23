export interface Website {
  url: string;
}

export interface Word {
  key: string;
  word: string;
  count: number;
  average: number;
}

export interface WordsState {
  website: Website;
  words: Array<Word>;
}

export const initialState: WordsState = {
  website: {
    url: ""
  },
  words: []
};