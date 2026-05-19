
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

interface Properties {
    children: React.ReactNode;
}

export default function Theme(props: Properties) {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    )
}