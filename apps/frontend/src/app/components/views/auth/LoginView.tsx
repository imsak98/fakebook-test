import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { type } from 'os';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { config } from '../../../helpers/config';
import { ILoginRequestParams } from '../../../helpers/types';
import { useNotificationContext } from '../../contexts/NotificationContext';

export const LoginView = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('second');
  const [error, setError] = useState<string>('');

  const { notify } = useNotificationContext();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (email && password) {
      const loginReqParams: ILoginRequestParams = {
        email: email,
        password: password,
      };
      const data = await fetch(`${config.backendBaseUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginReqParams),
      });
      if (data.status === 200) {
        const res = await data.json();
        notify({
          message: res.message,
          type: 'success',
        });
        navigate('/dashboard');
      }
      if (data.status === 401) {
        const err = await data.json();
        console.log(err);
        notify({
          message: err.message,
          type: 'error',
        });
      }
      if (data.status === 404) {
        const err = await data.json();
        console.log(err);
        notify({
          message: err.message,
          type: 'error',
        });
      }
    } else {
      setError('All fields are mandatory');
    }
  };
  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
          <Typography color={'red'}>{error}</Typography>

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
