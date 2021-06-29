import {Fragment} from 'react';
import {useDispatch} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core';
import SignUpMultiStepForm from 'components/signUpMultiStepForm';
import * as userAction from 'actions/user';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  border: {
    border: '0.15rem solid #2A8BFF',
    borderRadius: '20px',
    padding: '2%',
    width: '19rem',
    textAlign: 'center',
  },
  topLayout: {
    margin: '4rem 0',
    [theme.breakpoints.down('xs')]: {
      margin: '1rem 0',
    },
  },
  paperLayout: {
    padding: '2rem',
    [theme.breakpoints.up('md')]: {
      width: '35em',
    },
    marginTop: '10rem',
    margin: 'auto',
    border: '1px solid #ebedf0',
    borderRadius: '4px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '3rem',
    },
  },
}));

export default function SignUp() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const handleSignUp = async (data: any) => {
    try {
      await dispatch(userAction.create(data));
      history.push('/');
    } catch (error) {}
  };
  return (
    <Fragment>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.topLayout}
      >
        <Grid item md={11} xs={11}>
          <Paper className={classes.paperLayout}>
            <Grid container>
              <Grid item md={12} xs={12}>
                <SignUpMultiStepForm onSubmit={handleSignUp} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}
