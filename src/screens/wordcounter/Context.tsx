export interface Website {
  url: string;
}

export interface Word {
  word: string;
  count: number;
}

export interface WordsResponse {
  average: number;
  words: Array<Word>;
}

export interface WordsState {
  website: Website;
  wordsresponse: WordsResponse;
}

export const initialState: WordsState = {
  website: {
    url: ""
  },
  wordsresponse: {
    average: 0,
    words: []
  }
};