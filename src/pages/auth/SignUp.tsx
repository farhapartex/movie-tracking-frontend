import * as React from 'react';
import { connect } from 'react-redux';
import { Avatar, Alert, Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { EMAIL_ADDRESS_REGEX } from '../../constants/user';
import { userActions } from '../../_actions/user.actions';

const theme = createTheme();

const SignUp = (props: any) => {
    const { alert } = props;

    const [rapidApiKey, setRapidApiKey] = React.useState("");
    const [rapidApiKeyError, setRapidApiKeyError] = React.useState(false);
    const [rapidApiKeyErrorText, setRapidApiKeyErrorText] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorText, setPasswordErrorText] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorText, setEmailErrorText] = React.useState("");

    React.useEffect(() => {
        if (alert.type === "alert-success") {
            removeAllErrorText();
            setRapidApiKey("");
            setPassword("");
            setEmail("");
        }
    }, [alert]);

    const removeAllErrorText = () => {
        setRapidApiKeyError(false);
        setRapidApiKeyErrorText('');
        setPasswordError(false);
        setPasswordErrorText('');
        setEmailError(false);
        setEmailErrorText('');
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        removeAllErrorText();
        let hasValidationError = false;

        if (!email || !EMAIL_ADDRESS_REGEX.test(email)) {
            setEmailError(true);
            setEmailErrorText('Please enter valid email address');
            hasValidationError = true;
        }

        if (!rapidApiKey) {
            setRapidApiKeyError(true);
            setRapidApiKeyErrorText('Please provide Rapid API Key');
            hasValidationError = true;
        }
        if (!password) {
            setPasswordError(true);
            setPasswordErrorText('Please provide a strong password');
            hasValidationError = true;
        }

        if (hasValidationError) {
            return;
        }


        let res = props.register({ email: email, rapid_api_key: rapidApiKey, password: password });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {alert.message && <Alert severity={alert.type === "alert-danger" ? "error" : "success"}>{alert.message}</Alert>}
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={event => { setEmail(event.target.value) }}
                                    error={emailError}
                                    helperText={emailErrorText}
                                    value={email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="rapidAPIKey"
                                    label="Rapid API Key"
                                    name="rapidApiKey"
                                    autoComplete="email"
                                    onChange={event => { setRapidApiKey(event.target.value) }}
                                    error={rapidApiKeyError}
                                    helperText={rapidApiKeyErrorText}
                                    value={rapidApiKey}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    name="password"
                                    type={"password"}
                                    onChange={event => { setPassword(event.target.value) }}
                                    error={passwordError}
                                    helperText={passwordErrorText}
                                    value={password}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 5, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link component="a" target={"blank"} href="https://rapidapi.com/" variant="body2" >
                                    Click to get your Rapid API Key
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}


function mapState(state: any) {
    console.log(state);
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    register: userActions.register
};

const connectedLoginPage = connect(mapState, actionCreators)(SignUp);
export { connectedLoginPage as SignUp };