
export interface Word {
  word: string;
  count: number;
  rowKey: string;
  partitionKey: string;
  timestamp: string;
  eTag: string;
}

export interface WordsState {
  words: Array<Word>;
}

export const initialState: WordsState = {
  words: []
};