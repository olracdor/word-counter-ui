import { makeStyles } from '@material-ui/core/styles';


export const styleSheet = makeStyles((theme) => ({
 
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  iconBtn: {
    '&:hover': {
      color: "#5FB3EC",
    },
    color: "#757575",
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration: 'none',
    color: "#757575",
    '&:hover': {
      color: "#5FB3EC",
    },
    '&:active': {
      color: "#fff",
    }
  },
}));
