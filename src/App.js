import PropTypes from 'prop-types'
import { useState } from 'react'
import { Stepper } from './components'
import { makeStyles, withStyles } from '@material-ui/core/styles'
// import clsx from 'clsx'
import { Container, CssBaseline } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	container: {
		minHeight: '100vh',
		minWidth: '100vw',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
}))

function App() {
	const classes = useStyles()
	return (
		<>
			<CssBaseline />
			<Container maxWidth='sm' className={classes.container}>
				<Stepper />
			</Container>
		</>
	)
}

export default App
