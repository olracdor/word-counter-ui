import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import { getWords } from '../../services/WordsService';
import CardsWithImageLoader from '../../components/CardDefaultLoader';
import CardDefault from '../../components/CardDefault';
import {style} from './Style';
import {initialState, Word} from './Context';

export default function Home() {
  const styles = style();

  const [words, setWords] = useState(initialState.words);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getWordsAsync = async () => {
      const response = await getWords();

      setWords(response.data);
      setIsLoading(false);
    }
    getWordsAsync();
  }, []);

  return (
      <div className={styles.root}>
        <Paper className={styles.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <InfoIcon fontSize="default" color="secondary" />
            </Grid>
            <Grid item xs>
              <Typography variant="body2" gutterBottom>Welcome to "admin" page!</Typography>
            </Grid>
          </Grid>
          </Paper>
          {isLoading ? (<CardsWithImageLoader/>) :
            (words.map((word: Word) => 
            <CardDefault 
            title={word.word} 
            content={word.count.toString()} 
            url={word.partitionKey}/>
            ))}
      </div>
  );
}
