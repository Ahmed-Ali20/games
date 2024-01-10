import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Footer from "../../components/footer";
import useGameHelper from "./game.helper";
import CardSucess from "../../components/cardSucess";
import Timer from "../../components/timer";
import Modal from "../../components/modal";
import GameMemory from "../../components/gameMemory";

export default function Game() {
  const {
    userLogin,
    showCard,
    newName,
    handleLogout,
    handleClickOpen,
    handleClickUpdate,
  } = useGameHelper();

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Awesome Memory Game
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            textAlign: "center",
          }}
        >
          <Typography variant="h3" color="inherit" noWrap>
            Awesome Memory Game
          </Typography>
        </Box>
        {showCard && <CardSucess />}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            <Grid
              item
              xs={8}
              sm={8}
              md={8}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid container spacing={4}>
                <GameMemory />
              </Grid>
            </Grid>

            <Grid item xs={4} sm={4} md={4}>
              <Grid
                container
                spacing={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Grid item xs={12} sm={12} md={12}>
                  {userLogin && (
                    <>
                      <Typography
                        variant="h6"
                        align="center"
                        color="text.primary"
                        paragraph
                      >
                        User
                      </Typography>

                      {newName && (
                        <Typography
                          variant="h7"
                          align="center"
                          color="text.secondary"
                          paragraph
                        >
                          {newName}
                        </Typography>
                      )}
                    </>
                  )}
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Timer />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button variant="text" onClick={() => handleClickOpen()}>
                    Show highscores
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => handleClickUpdate()}
                  >
                    Change username
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button variant="contained" onClick={() => handleLogout()}>
                    Logout
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Modal newName={newName} />
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Footer />
      </Box>
      {/* End footer */}
    </>
  );
}
