import React, { useState } from "react";
import validation from "./validation";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, TextField, Typography, IconButton } from "@mui/material";
import "../css/Signup.css";

type RegisterFormValues = {
  username: string;
  password: string;
};

type ValidationErrors = {
  username?: string;
  password?: string;
};

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState<RegisterFormValues>({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});

  // Handle change event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const sendRequest = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username: values.username,
        password: values.password,
      });

      const data = res.data;
      return data;
    } catch (err) {
      console.error("Error occurred:", err);
      return null;
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validation(values));

    sendRequest().then((data) => {
      if (data) {
        navigate("/login");
      } else {
        console.error("Failed to register");
      }
    });
  };

  return (
    <div className="sign-content">
      <div id="box">
        <form id="black" onSubmit={handleFormSubmit}>
          {/* <IconButton onClick={() => navigate("/")}>
            <FaArrowLeft size={22} />
          </IconButton> */}
          <Typography variant="h5">Sign Up</Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Username"
            variant="outlined"
            name="username"
            value={values.username}
            onChange={handleChange}
            error={!!errors.username}
            helperText={errors.username}
            className="input"
            style={{ marginBottom: "16px" }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            className="input"
            style={{ marginBottom: "16px" }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
          <Typography variant="body2" style={{ marginTop: '10px' }}>
            Already have an account?{" "}
            <Link to="/login" className="link">
              Login
            </Link>
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default Register;
