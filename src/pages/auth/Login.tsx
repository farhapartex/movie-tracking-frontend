import React, { useState } from "react";
import { connect } from 'react-redux';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { CssBaseline, TextField, Box, Grid, Container, Avatar, Button, Alert, Typography } from "@mui/material";
import { EMAIL_ADDRESS_REGEX } from "../../constants/user";
import { userActions } from "../../_actions/user.actions";


const theme = createTheme();


const Login = (props: any) => {
    const { alert } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailErrorText, setEmailErrorText] = useState("");
    const [passwordErrorText, setPasswordErrorText] = useState("");

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let hasValidationError = false;
        if (!email || !EMAIL_ADDRESS_REGEX.test(email)) {
            setEmailError(true);
            setEmailErrorText('Please enter valid email address');
            hasValidationError = true;
        }

        if (!password) {
            setPasswordError(true);
            setPasswordErrorText('Please provide your password');
            hasValidationError = true;
        }

        if (hasValidationError) {
            return;
        }

        props.login(email, password);

    }

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
                    {alert.message && <Alert severity="error">{alert.message.response.data.detail}</Alert>}

                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>

                    <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={event => { setEmail(event.target.value) }}
                            error={emailError}
                            helperText={emailErrorText}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            error={passwordError}
                            helperText={passwordErrorText}
                            onChange={event => { setPassword(event.target.value) }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>

                        <Grid container>
                            <Grid item>
                                <Link href="/sign-up" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>
            </Container>

        </ThemeProvider>
    )
}

function mapState(state: any) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(Login);
export { connectedLoginPage as Login };