import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Nav from '../../components/Nav';
import styles from '../../styles/Home.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Sign in with Google', 'Link Discord', 'Link  Github'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Sign in with IIITP provided email id`;
    case 1:
      return 'Authenticate you Discord account';
    case 2:
      return `Authenticate your Github account.`;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <main className={styles.main2}>
        <div className={styles.side}>
            <Header />
            <Nav />
        </div>
        <div className={styles.main}>
            <div className={styles.maincon}>
                <div className={classes.root}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                                </div>
                            </div>
                            </StepContent>
                        </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} className={classes.resetContainer}>
                        <Typography>All steps completed - you&apos;re finished</Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
                        </Button>
                        </Paper>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    </main>
  );
}
