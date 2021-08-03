import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Stepper, Step, StepLabel, Button, Container, CssBaseline, MenuItem, TextField } from '@material-ui/core'
import './Register.css'
import { createUser } from "../../sdk";
import { Link } from 'react-router-dom';

const sleep = (time) => new Promise ((acc) => setTimeout(acc, time))

const useStyles = makeStyles((theme) => ({
 
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    textAlign: 'center',
    fontFamily: 'inherit',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'right',
    backgroundColor: '#f0f0f0',
    direction: 'rtl'
  },
  whitebox: {
      backgroundColor: '#fff',
      margin: '0 auto',
      padding: '45px',
      boxShadow: '0 0 20px 4px rgba(0,0,0,0.03)'
  },
  registerfooter: {
    textAlign: 'center',
    width: '100%',
    display: 'block',
    fontSize: '20px',
    marginTop: '40px',
  },
  '& > .MuiStepLabel-label': {
      fontFamily: 'iransans-web'
  },
}));

function getSteps() {
  return ['اطلاعات کاربری', 'اطلاعات تماس'];
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [personal, setPersonal] = useState({username: '', age: ''})
  const [contact, setContact] = useState({email: '', dropdown: ''})  
  const steps = getSteps();

  const onChangePersonal = (e) => {
    setPersonal({...personal, [e.target.name] : e.target.value})
  }
  const onChangeContact = (e) => {
    setContact({...contact, [e.target.name] : e.target.value})
  }

  let user = {
    ...personal,
    ...contact
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <form onSubmit={onChangePersonal}>
              <TextField
                  required
                  id="fullname"
                  label="نام و نام خانوادگی"
                  style={{width: '100%'}}
                  value={personal.username}
                  name="username"
                  onChange={onChangePersonal}
              />
              {personal.username === '' ?
                <div
                  style={{textAlign: 'right', fontSize: '13px',color: 'red'}}>
                    لطفا نام خود را وارد نمایید
                </div>
              : '' }

              <TextField
                  style={{width: '100%'}}
                  type="number"
                  id="age"
                  label="سن"
                  value={personal.age}
                  name="age"
                  onChange={onChangePersonal}
              />
              {personal.age === '' ?
                <div
                  style={{textAlign: 'right', fontSize: '13px',color: 'red'}}>
                    لطفا سن خود را وارد نمایید
                </div>
              : '' }
            </form>
        );
      case 1:
        return (
          <form onSubmit={onChangeContact}>
                <TextField
                  style={{width: '100%'}}
                  id="email"
                  label="ایمیل"
                  value={contact.email}
                  name="email"
                  onChange={onChangeContact}
                  />
                  {contact.email === '' ?
                    <div
                      style={{textAlign: 'right', fontSize: '13px',color: 'red'}}>
                        لطفا ایمیل خود را وارد نمایید
                    </div>
                  : '' }

                <TextField
                    select
                    required
                    style={{width: '100%'}}
                    id="dropdown"
                    label="نوع خبرنامه"
                    value={contact.dropdown}
                    name="dropdown"
                    onChange={onChangeContact}
                >
                    <MenuItem key={1} value="daily">روزانه</MenuItem>
                    <MenuItem key={2} value="weekly">هفتگی</MenuItem>
                    <MenuItem key={3} value="monthly">ماهانه</MenuItem>
                </TextField>
                {contact.dropdown === '' ?
                <div
                    style={{textAlign: 'right', fontSize: '13px',color: 'red'}}>
                      لطفا نوع خبرنامه خود را انتخاب کنید
                  </div>
                : '' }
            </form>
        );
      default:
        return 'Unknown step';
    }
  }

  const handleNext = async () => {  
    await sleep(500);
    await setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 1) {
      await createUser(user)
        .then((respone) => {
            console.log('respone => ', respone)
        })
        .catch((err) => {
            console.log('Error => ', err)
        })
    }

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  
    return (
    <>
        <div className={classes.root}>
            <CssBaseline/>
            <Container>

            <div className={classes.whitebox}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div style={{textAlign: 'center'}}>
            <h2 className={classes.instructions}>
              ثبت نام موفقیت آمیز بود, نتایج در کنسول‌لاگ
            </h2>
            <Link to="/">
              <Button style={{marginTop: '20px'}} onClick={handleReset} className={classes.button} color="primary" variant="contained">
                بازگشت به خانه
              </Button>
            </Link>
          </div>
        ) : (
          <div>
            <div className={classes.instructions}>{getStepContent(activeStep)}</div>
            <span className={classes.registerfooter}>

            
              {activeStep === 1 ?
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>بازگشت</Button>
              :
                <Link to="/">
                  <Button className={classes.button}>بازگشت</Button>
                </Link>
              }

              { (activeStep === 0  && personal.username !== '' && personal.age !== '')
                ||
                (activeStep === 1 && contact.email !== '' && contact.dropdown !== '')
                ? 
                <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'ثبت نام' : 'مرحله بعد'}
              </Button>
                :
                <Button
                disabled
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'ثبت نام' : 'مرحله بعد'}
              </Button>
              }
              
              
            </span>
          </div>
        )}
      </div>
    </div>

            </Container>
        </div>
    </>
  );
}
