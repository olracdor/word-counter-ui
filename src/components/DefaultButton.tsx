import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AssessmentIcon from '@material-ui/icons/Assessment';

interface SaveButtonProperties {
  onClickFunction: any;
  text: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    save: {
      margin: 10,
      color: '#FEFEFE'
    },
  }),
);

export default function DefaultButton(props: SaveButtonProperties) {
  const classes = useStyles();
  const {onClickFunction, text} = props;
  return (<Button
    className={classes.save}
    variant="contained"
    color="primary"
    size="small"
    onClick={onClickFunction}
    startIcon={<AssessmentIcon/>}
    >
    {text}
  </Button>);
}
