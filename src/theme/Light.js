import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
const lightTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#1565c0',
        },
        secondary: purple,
    },
});

export default lightTheme;
