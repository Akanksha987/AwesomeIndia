import React, { useState } from "react";
import validation from "./validation";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, TextField, Typography, IconButton, Box } from "@mui/material";

type LoginFormValues = {
  username: string;
  password: string;
};

type ValidationErrors = {
  username?: string;
  password?: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState<LoginFormValues>({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const sendRequest = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: values.username,
        password: values.password,
      });

      const data = res.data;
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validation(values));
    sendRequest().then(() => {
      navigate("/");
    });
  };

  return (
    <div className="sign-content">
      <div id="box">
        <form id="black" onSubmit={handleFormSubmit}>
          {/* <IconButton onClick={() => navigate("/")}>
            <FaArrowLeft size={22} />
          </IconButton> */}
          <Typography variant="h5">Login</Typography>

          <Box mb={2}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              name="username"
              value={values.username}
              onChange={handleChange}
              error={!!errors.username}
              helperText={errors.username}
              style={{ marginBottom: "16px" }}
            />
          </Box>

          <Box mb={2}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              value={values.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              style={{ marginBottom: "16px" }}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Login
          </Button>

          <Typography variant="body2" style={{ marginTop: "10px" }}>
            Don't have an account?{" "}
            <Link to="/register" className="link">
              Sign Up
            </Link>
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default Login;
