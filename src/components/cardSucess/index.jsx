import useCardSucessHelper from "./cardSucess.helper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const CardSucess = () => {
  const { controlRestart, handleClickOpen } = useCardSucessHelper();
  return (
    <Paper
      elevation={3}
      sx={{
        mt: 4,
        pb: 3,
        textAlign: "center",
        color: "#fff",
        background:
          "linear-gradient(to right, rgb(215, 272, 138), rgb(65, 146, 104))",
      }}
    >
      <Typography
        sx={{
          pt: 3,
        }}
        variant="h4"
        noWrap
      >
        Congratulations we have a winner
      </Typography>
      <Box
        sx={{
          flexDirection: "column",
          pt: 2,
          gap: "24px",
        }}
      >
        <ButtonGroup
          variant="text"
          color="success"
          aria-label="text button group"
        >
          <Button onClick={() => handleClickOpen()}>Show highscores</Button>
          <Button onClick={() => controlRestart()}>Start a new game</Button>
        </ButtonGroup>
      </Box>
    </Paper>
  );
};

export default CardSucess;
