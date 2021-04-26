import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
    direction: "rtl",
    overrides: {
        MuiFormHelperText: {
            root: {
                "&$error": {
                    "position": "absolute"
                }
            }
        },
    },
    palette: {
        secondary: {
            main: '#28b5b5',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: 'IRANSans'
    },
});

export default theme;
