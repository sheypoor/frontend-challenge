import { TextField } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
}))

function StepOne(props) {
	const { nameValue, ageValue } = props
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<TextField
				id='name'
				name='name'
				label='Name'
				type='text'
				variant='filled'
				InputLabelProps={{
					shrink: true,
				}}
				margin='dense'
				required
				defaultValue={nameValue}
			/>
			<TextField
				id='age'
				name='age'
				label='Age'
				type='number'
				variant='filled'
				InputLabelProps={{
					shrink: true,
				}}
				margin='dense'
				required
				defaultValue={ageValue}
			/>
		</div>
	)
}

StepOne.propTypes = {
	nameValue: PropTypes.string.isRequired,
	ageValue: PropTypes.number.isRequired,
}

export default StepOne
