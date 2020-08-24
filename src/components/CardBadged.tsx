import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import 'date-fns';
import Typography from '@material-ui/core/Typography';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Paper, Badge } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
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


export interface CardDefaultProps {
  title?: string;
  content: string;
  url?: string;
}

export default function CardBadged(props: CardDefaultProps) {
  const styles = useStyles();
  const {title, content, url} = props;
  return (<React.Fragment>
        <Badge badgeContent={content} color="primary" max={999}>
          <Typography><div style={{fontSize: (parseInt(content))} as React.CSSProperties}>{title}</div></Typography>
        </Badge>
        <Grid>&nbsp;&nbsp;</Grid>
        </React.Fragment>
  );
}
