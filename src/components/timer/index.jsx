import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import useTimerHelper from "./timer.helper";
const Timer = () => {
  const { formatTime, timer } = useTimerHelper();
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Typography variant="h6" align="center" color="text.primary" paragraph>
        Timer
      </Typography>
      {formatTime(timer)}
    </Box>
  );
};

export default Timer;
