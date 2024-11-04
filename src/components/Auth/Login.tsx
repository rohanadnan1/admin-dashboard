import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  InputAdornment,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const { data } = useQuery("login", async () => {
    const res = await fetch("../../../mock.json");
    const jsonData = await res.json();
    console.log(jsonData, "jsonData");
    return jsonData;
  });

  const handleClose = () => {
    setOpen(false);
  };

  const loginUser = () => {
    data.map((item: any) => {
      if (item.email === email && password === "12345") {
        // Store user session in local storage
        localStorage.setItem(
          "userSession",
          JSON.stringify({ email: item.email, loggedIn: true })
        );

        // Navigate to the dashboard
        navigate("/dashboard");
      } else if (item.email !== email || password !== "12345") {
        setOpen(true);
      }
    });
  };

  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#1F211F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "white",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "50%",
            gap: "20px",
            padding: "40px",
            backgroundColor: "#1F211F",
            border: "0.1px solid white",
            boxShadow: "4px 4px 9px rgba(255, 255, 255, 0.4)",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h4" align="center" sx={{ color: "white" }}>
            Login
          </Typography>
          <TextField
            label="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              width: "80%",
              input: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                  outline: "none",
                },
              },
            }}
            // InputProps={{ style: { color: 'white'}, notchedOutline: { borderColor: 'white' }}}
            InputLabelProps={{ style: { color: "white" } }}
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              width: "80%",
              input: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                  outline: "none",
                },
              },
            }}
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    sx={{ "&:focus": { outline: "none" } }}
                  >
                    {showPassword ? (
                      <Visibility sx={{ color: "white" }} />
                    ) : (
                      <VisibilityOff sx={{ color: "white" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green",
              width: "80%",
              padding: "10px",
              "&:hover": { backgroundColor: "green", opacity: "0.8" },
            }}
            onClick={loginUser}
          >
            Login
          </Button>
        </Paper>
      </Container>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Invalid Email or Password
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginPage;
