import {
	Stepper as Mstepper,
	Step,
	StepLabel,
	Snackbar,
	Button,
	Typography,
	Paper,
} from '@material-ui/core'
import { useState } from 'react'
import { StepOne, StepTwo } from '../index'
import { createUser } from '../../sdk'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
	wrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		padding: theme.spacing(2, 2),
	},
	button: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4),
	},
}))

function getSteps() {
	return ['Step One', 'Step Two']
}

function Stepper(props) {
	const classes = useStyles()
	const [states, setStates] = useState({
		step: 0,
		name: '',
		age: '',
		newsletter: '',
		email: '',
		openSnack: false,
		snackMessage: 'Successfuly done',
	})
	const getStepContent = (step) => {
		switch (step) {
			case 0:
				return <StepOne nameValue={states.name} ageValue={states.age} />
			case 1:
				return (
					<StepTwo
						newsletterValue={states.newsletter}
						emailValue={states.email}
					/>
				)
			default:
				return 'Unknown step'
		}
	}
	const steps = getSteps()
	const handleNext = (e) => {
		e.preventDefault()
		if (states.step === 0) {
			const age = e.target.elements.age.value
			const name = e.target.elements.name.value
			setStates((prevStatest) => ({
				...prevStatest,
				name,
				age,
				step: prevStatest.step + 1,
			}))
		} else if (states.step === 1) {
			const email = e.target.elements.email.value
			const newsletter = e.target.elements.newsletter.value
			const user = {
				email,
				newsletter,
				name: states.name,
				age: states.age,
			}
			createUser(user)
				.then((response) =>
					setStates((prevStatest) => ({
						...prevStatest,
						openSnack: true,
					}))
				)
				.catch((e) =>
					setStates((prevStatest) => ({
						...prevStatest,
						openSnack: true,
						snackMessage: 'Something went wrong',
					}))
				)
		}
	}

	const handleBack = () => {
		setStates((prevStatest) => ({
			...prevStatest,
			step: prevStatest.step - 1,
		}))
	}

	const handleClose = () => {
		setStates((prevStatest) => ({
			...prevStatest,
			openSnack: false,
		}))
	}
	return (
		<Paper elevation={1} className={classes.wrapper}>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={states.openSnack}
				onClose={handleClose}
				message={states.snackMessage}
				autoHideDuration={800}
			/>
			<div>
				<form onSubmit={handleNext}>
					<Typography className={classes.instructions}>
						{getStepContent(states.step)}
					</Typography>
					<div>
						<Button
							disabled={states.step === 0}
							onClick={handleBack}
							className={classes.button}
						>
							Back
						</Button>
						<Button
							variant='contained'
							color='primary'
							className={classes.button}
							type='submit'
						>
							{states.step === steps.length - 1 ? 'Finish' : 'Next'}
						</Button>
					</div>
				</form>
			</div>
			<Mstepper alternativeLabel activeStep={states.step}>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel></StepLabel>
					</Step>
				))}
			</Mstepper>
		</Paper>
	)
}

Stepper.propTypes = {}

export default Stepper
