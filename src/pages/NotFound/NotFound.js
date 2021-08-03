import React from 'react'
import { Container, Typography, Button, CssBaseline, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      minHeight: '100vh',
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#f0f0f0'
    },
    whitebox: {
        backgroundColor: '#fff',
        margin: '0 auto',
        padding: '45px',
        boxShadow: '0 0 20px 4px rgba(0,0,0,0.03)'
    },
    title: {
        fontFamily: 'iransans-web',
        fontWeight: 'bold',
        color: '#333',
        fontSize: '40px',
        marginBottom: '40px',
    },
    registerbtn: {
        fontFamily: 'iransans-web',
        fontSize: '20px',
        padding: '10px 20px',
    }
});

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Container>
                <Grid container  className={classes.whitebox}>
                    <Grid item md={12}>
                        <Typography
                            className={classes.title}
                            gutterBottom
                            variant="h5"
                        >
                            صفحه مورد نظر پیدا نشد
                        </Typography>
                    </Grid>
                    <Grid item md={12}>
                        <Link to="/">
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.registerbtn}
                            >
                                بازگشت به صفحه اول
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}


export default Home