import { TextField, MenuItem } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
}))

function StepTwo(props) {
	const classes = useStyles()
	const { emailValue, newsletterValue } = props
	return (
		<div className={classes.root}>
			<TextField
				id='email'
				name='email'
				label='Email'
				type='text'
				variant='filled'
				InputLabelProps={{
					shrink: true,
				}}
				margin='dense'
				required
				defaultValue={emailValue}
			/>
			<TextField
				id='newsletter'
				name='newsletter'
				label='New Letter'
				type='number'
				variant='filled'
				InputLabelProps={{
					shrink: true,
				}}
				select
				margin='dense'
				required
				defaultValue={newsletterValue}
			>
				<MenuItem value='daily'>Daily</MenuItem>
				<MenuItem value='weekly'>Weekly</MenuItem>
				<MenuItem value='monthly'>Monthly</MenuItem>
			</TextField>
		</div>
	)
}

StepTwo.propTypes = {
	emailValue: PropTypes.string.isRequired,
	newsletterValue: PropTypes.string.isRequired,
}

export default StepTwo
