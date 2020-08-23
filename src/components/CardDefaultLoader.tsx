import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      width: '100%',
      marginBottom: 10
    }
  }),
);

export default function CardDefaultLoader() {
    const styles = useStyles();
    return (<React.Fragment>
        {Array(9).fill(0, 4).map((value, index) => (
          <Paper className={styles.paper}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      <Skeleton />
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <Skeleton variant="rect" width="100%"/>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <MoreHorizIcon />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </React.Fragment>);
}