import {ReactNode, FC} from 'react';
import {Grid, makeStyles} from '@material-ui/core';

type Props = {
  children: ReactNode;
};

const useStyles = makeStyles({
  root: {
    height: '100%',
    maxHeight: '100%',
  },
});

const LayoutBase: FC<Props> = ({children}) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {children}
    </Grid>
  );
};

export default LayoutBase;
