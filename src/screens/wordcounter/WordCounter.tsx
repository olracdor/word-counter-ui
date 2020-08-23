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
import {style} from './Style';
import {initialState} from './Context';
import { TextField, Snackbar } from '@material-ui/core';
import DefaultButton from '../../components/DefaultButton';
import CardBadged from '../../components/CardBadged';

export default function WordCounter() {
  const styles = style();

  const [website, setWebsite] = useState(initialState.website);
  const [wordsresponse, setWordsresponse] = useState(initialState.wordsresponse);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    show: false,
    message: ''
  });

  useEffect(() => {
  }, []);
  
  const handleCreateWordCountsAndGetResults = async () => {
    setIsLoading(true);
    try{
      const response = await createWordCountsAndGetResults(website);
      setWordsresponse(response.data);
      setIsLoading(false);
      
    }catch(error){
      setIsLoading(false);
      setWordsresponse(initialState.wordsresponse);
      setError({
        show: true,
        message: 'No Results!'
      });
    }
  }
  const handleCloseErrorPopUp = () => {
    setError({ show: false,
      message: ''});
  };
  const handleOnUrlChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setWebsite({
      url: e.target.value
    });
  }
  return (
      <div className={styles.root}>
         <Snackbar
        open={error.show}
        onClose={handleCloseErrorPopUp}
        message={error.message}
      />
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
            (wordsresponse.words.map((wordObj: any) => 
            <CardBadged 
            title={wordsresponse.average > wordObj.count ? wordObj.word.toLowerCase() : wordObj.word.toUpperCase() } 
            content={wordObj.count} 
            url="Word"/>
            ))}
      </div>
  );
}
