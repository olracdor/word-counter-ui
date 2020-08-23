import React, { useState, useEffect, ChangeEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import {
  createWordCountsAndGetResults
}
  from '../../services/WordsService';
import CardsWithImageLoader from '../../components/CardDefaultLoader';
import CardDefault, { CardDefaultProps } from '../../components/CardDefault';
import {style} from './Style';
import {initialState} from './Context';
import { TextField } from '@material-ui/core';
import DefaultButton from '../../components/DefaultButton';

export default function WordCounter() {
  const styles = style();

  const [website, setWebsite] = useState(initialState.website);
  const [words, setWords] = useState(initialState.words);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
  }, []);
  
  const handleCreateWordCountsAndGetResults = async (promotionId: string) => {
    setIsLoading(true);
    const response = await createWordCountsAndGetResults(website);
    setWords(response.data);
    setIsLoading(false);

  }

  const handleOnUrlChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setWebsite({
      url: e.target.value
    });
  }
  return (
      <div className={styles.root}>
        <Paper className={styles.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <InfoIcon fontSize="default" color="secondary" />
            </Grid>
            <Grid item xs>
              <Typography variant="body2" gutterBottom>What do you want to do?</Typography>
            </Grid>
          </Grid>
          <DefaultButton text="Start Counting Words!" onClickFunction={handleCreateWordCountsAndGetResults}/>
          <TextField
            variant="outlined"
            margin="normal"
            value={website.url}
            onChange={handleOnUrlChange}
            required
            fullWidth
            id="url"
            label="URL"
            name="url"
            autoComplete="url"
            autoFocus
          />
        </Paper>
          {isLoading ? (<CardsWithImageLoader/>) :
            (words.map((wordObj: any) => 
            <CardDefault 
            title={wordObj.word} 
            content={wordObj.count} 
            url={website.url}/>
            ))}
      </div>
  );
}
