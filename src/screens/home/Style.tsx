import 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import 'date-fns';

export const style = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 140,

    },
    root: {
      width: '100%',
      marginBottom: 10
    },
    accordion: {
      padding: theme.spacing(2),
      margin: 'auto',
      width: '100%',
      marginBottom: 10
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      width: '100%',
      marginBottom: 10
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
);