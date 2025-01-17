import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Signup.css";
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  Button,
  Input,
  Checkbox,
  Alert,
  Stack,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function SignUp() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);
  const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formValid, setFormValid] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleUsername = () => {
    if (!usernameInput) {
      setUsernameError(true);
      return;
    }
    setUsernameError(false);
  };

  const handleEmail = () => {
    if (!isEmail(emailInput)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
  };

  const handlePassword = () => {
    if (!passwordInput || passwordInput.length < 5 || passwordInput.length > 20) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };

  const handleSubmit = () => {
    setSuccess(null);

    if (usernameError || !usernameInput) {
      setFormValid("Username is set between 5 - 15 characters long. Please Re-Enter");
      return;
    }

    if (emailError || !emailInput) {
      setFormValid("Email is Invalid. Please Re-Enter");
      return;
    }

    if (passwordError || !passwordInput) {
      setFormValid("Password is set between 5 - 20 characters long. Please Re-Enter");
      return;
    }
    setFormValid(null);

    

    setSuccess("Form Submitted Successfully");

   
    navigate('/');
  };

  return (
    <div className="hj">
      <fieldset className="sign" style={{marginLeft:'490px',width:'370px',borderRadius:"20px",marginTop:'60px'}}>
        <img src='./Image/Projectlog.jpg' width="50px" heigth="50px" style={{borderRadius:"50px",marginLeft:"158px",marginTop:"10px"}} alt="Project Logo" />
        <h2 style={{marginLeft:"140px"}}>Sign up</h2>
        <div style={{ marginTop: "10px" }}>
          <TextField
            error={usernameError}
            label="Username"
            id="standard-basic"
            variant="standard"
            sx={{ width: "100%" }}
            size="small"
            value={usernameInput}
            InputProps={{}}
            onChange={(event) => {
              setUsernameInput(event.target.value);
            }}
            onBlur={handleUsername}
          />
        </div>

        <div style={{ marginTop: "5px" }}>
          <TextField
            label="Email Address"
            fullWidth
            error={emailError}
            id="standard-basic"
            variant="standard"
            sx={{ width: "100%" }}
            value={emailInput}
            InputProps={{}}
            size="small"
            onBlur={handleEmail}
            onChange={(event) => {
              setEmailInput(event.target.value);
            }}
          />
        </div>
        <div style={{ marginTop: "5px" }}>
          <FormControl sx={{ width: "100%" }} variant="standard">
            <InputLabel
              error={passwordError}
              htmlFor="standard-adornment-password"
            >
              Password
            </InputLabel>
            <Input
              error={passwordError}
              onBlur={handlePassword}
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              onChange={(event) => {
                setPasswordInput(event.target.value);
              }}
              value={passwordInput}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        <div style={{ marginTop: "10px" }}>
          <br/>
          <Button
            variant="contained"
            fullWidth
            startIcon={<LoginIcon />}
            onClick={handleSubmit}
          >
            SIGN UP
          </Button>
        </div>

        {formValid && (
          <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
            <Alert severity="error" size="small">
              {formValid}
            </Alert>
          </Stack>
        )}

        {success && (
          <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
            <Alert severity="success" size="small">
              {success}
            </Alert>
          </Stack>
        )}

        <div style={{ marginTop: "10px", fontSize: "14px",marginLeft:"60px",marginBottom:"20px" }} margin="left">
          <a href="/">
            <p style={{color:'blue'}}>Log in</p>
          </a>
        </div>
      </fieldset>
    </div>
  );
}