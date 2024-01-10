import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CircularProgress from "@mui/material/CircularProgress";

import Footer from "../../components/footer";
import useCreateUserHelper from "./createUser.helper";
import InputCustom from "../../components/inputCustom";

export default function CreateUser() {
  const {
    handleSubmit,
    handleMouseDownPassword,
    handleClickShowPassword,
    handleOnChangeName,
    handleOnChangePassword,
    opneAlertSucess,
    opneAlertError,
    showPassword,
    showLoging,
    resultAlert,
    updateName,
  } = useCreateUserHelper();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Awesome Memory Game
        </Typography>
        {opneAlertError && <Alert severity="error">{resultAlert}</Alert>}
        {opneAlertSucess && (
          <Alert severity="success">User registered successfully</Alert>
        )}
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {updateName ? "Update user" : "Sign up"}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputCustom
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                error={opneAlertError}
                color={opneAlertSucess ? "success" : "primary"}
                onChange={(e) => handleOnChangeName(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <InputCustom
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="new-password"
                error={opneAlertError}
                color={opneAlertSucess ? "success" : "primary"}
                onChange={(e) => handleOnChangePassword(e)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          {showLoging ? (
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "15px",
              }}
            >
              <CircularProgress />
            </Grid>
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {updateName ? "Update" : "Sign up"}
            </Button>
          )}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer sx={{ mt: 5 }} />
    </Container>
  );
}
