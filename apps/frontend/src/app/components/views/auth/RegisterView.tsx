import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../../../helpers/config";
import { IRegsitrationRequestParams } from "../../../helpers/types";
import { useNotificationContext } from "../../contexts/NotificationContext";

export const RegisterView = () => {

    const [name, setName] = useState<string>("")
    const [display_name, setDisplay_name] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [contact_no, setContact_no] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string>("")

    const { notify } = useNotificationContext();
    const navigate = useNavigate();


    // console.log(process.env[NX_BACKEND_BASE_URL])
    const handleSubmit = async () => {
        if(name && display_name && email && contact_no && password){
            const registerReqParams:IRegsitrationRequestParams = {
                name: name,
                display_name: display_name,
                email: email,
                contact_no: contact_no,
                password: password
            }
            const data = await fetch(`${config.backendBaseUrl}/register`, {
                headers: {
                    "Content-Type": "application/json"
                  },                
                method: "POST",
                body: JSON.stringify(registerReqParams)
            })
            if(data.status === 200) {
                const res = await data.json()
                console.log(res)
                notify({
                    message: res.message,
                    type: "success"
                });
                navigate('/login');


            }
            if(data.status === 400){
                const error = await data.json()
                console.log(error)
                notify({
                    message: error.sqlMessage,
                    type: "error"
                });
            }
        } else {
            setError("Please enter all the values in the fields");
        }
    }
    return(

        <Container component="main" maxWidth="sm">
        <Box
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 6,
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(e)=> {
                setName(e.target.value)
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="display_name"
              label="Display Name"
              name="display_name"
              autoComplete="display_name"
              autoFocus
              onChange={(e)=> {
                setDisplay_name(e.target.value)
              }}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=> {
                setEmail(e.target.value)
              }}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="contact_no"
              label="Contact No"
              name="contact_no"
              autoComplete="contact_no"
              autoFocus
              onChange={(e)=> {
                setContact_no(e.target.value)
              }}

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
              onChange={(e)=> {
                setPassword(e.target.value)
              }}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Typography color={'red'}>
                {error}
            </Typography>
            <Button
            //   type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="login" variant="body2">
                  {"Alredy have an account? sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  

    )
}