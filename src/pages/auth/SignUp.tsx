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
    const [firstName, setFirstName] = React.useState("");
    const [firstNameError, setFirstNameError] = React.useState(false);
    const [firstNameErrorText, setFirstNameErrorText] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [lastNameError, setLastNameError] = React.useState(false);
    const [lastNameErrorText, setLastNameErrorText] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorText, setPasswordErrorText] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorText, setEmailErrorText] = React.useState("");

    React.useEffect(() => {
        if (alert.type === "alert-success") {
            removeAllErrorText();
            setPassword("");
            setEmail("");
        }
    }, [alert]);

    const removeAllErrorText = () => {
        setFirstNameError(false);
        setFirstNameErrorText("")
        setLastNameError(false)
        setLastNameErrorText("")
        setPasswordError(false);
        setPasswordErrorText('');
        setEmailError(false);
        setEmailErrorText('');
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        removeAllErrorText();
        let hasValidationError = false;

        if (!firstName) {
            setFirstNameError(true);
            setFirstNameErrorText('Please provide your first name');
            hasValidationError = true;
        }
        if (!lastName) {
            setLastNameError(true);
            setLastNameErrorText('Please provide your last name');
            hasValidationError = true;
        }

        if (!email || !EMAIL_ADDRESS_REGEX.test(email)) {
            setEmailError(true);
            setEmailErrorText('Please enter valid email address');
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


        let res = props.register({ first_name: firstName, last_name: lastName, email: email, password: password });
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
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={event => { setFirstName(event.target.value) }}
                                    error={firstNameError}
                                    helperText={firstNameErrorText}
                                    value={firstName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    onChange={event => { setLastName(event.target.value) }}
                                    error={lastNameError}
                                    helperText={lastNameErrorText}
                                    value={lastName}
                                />
                            </Grid>
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
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}


function mapState(state: any) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    register: userActions.register
};

const connectedLoginPage = connect(mapState, actionCreators)(SignUp);
export { connectedLoginPage as SignUp };