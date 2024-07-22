import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Login.css";
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
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Mycon from "../CreateContext/CreateContext";


const isValidUsername = (username) => username.length >= 5;

export default function Login() {
  const navigate = useNavigate(); 
  const [showPassword, setShowPassword] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formValid, setFormValid] = useState("");
  const [success, setSuccess] = useState("");
  const {use,setUse} = useContext(Mycon);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  
  const handleUsername = () => {
    setUsernameError(!isValidUsername(usernameInput));
  };

  const handlePassword = () => {
    setPasswordError(
      !passwordInput || passwordInput.length < 5 || passwordInput.length > 20
    );
  };

  const handleSubmit = () => {
    setSuccess("");
    if (usernameError || !usernameInput) {
      setFormValid("Username should contain at least 5 letters");
      return;
    }
    if (passwordError || !passwordInput) {
      setFormValid("Password is set between 5 - 20 characters long. Please Re-Enter");
      return;
    }
    setFormValid("");
    setUse(usernameInput);

    navigate("/Home"); 

    console.log("Username : " + usernameInput);
    console.log("Password : " + passwordInput);
    console.log("Remember : " + rememberMe);

    setSuccess("Form Submitted Successfully");
  };

  return (
    <div className="mn">
      <div className="login-form-container">
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <h2>Login</h2>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <TextField
            label="Username"
            fullWidth
            variant="standard"
            size="small"
            error={usernameError}
            value={usernameInput}
            onBlur={handleUsername}
            onChange={(event) => setUsernameInput(event.target.value)}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="standard-adornment-password" error={passwordError}>Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              error={passwordError}
              value={passwordInput}
              onBlur={handlePassword}
              onChange={(event) => setPasswordInput(event.target.value)}
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

        <div style={{ fontSize: "14px", marginBottom: "15px" }}>
          <Checkbox
            {...label}
            size="small"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
          />
          Remember Me
        </div>

        <div style={{ marginBottom: "15px" }}>
          <Button
            variant="contained"
            fullWidth
            startIcon={<LockOpenIcon />}
            onClick={handleSubmit}
          >
            LOGIN
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

        <div style={{ fontSize: "14px", textAlign: "center" }}>
          <span style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}>Forgot Password</span>{" "}
          <span>Do you have an account?</span>{" "}
          <span style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}>
            <a href="/signup">
            Sign Up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}