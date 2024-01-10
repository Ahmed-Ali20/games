import React from "react";
import useModalHelper from "./modal.helper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const Modal = ({ newName }) => {
  const { handleClose, formatTime, listHighscores, updateGame,imagesList, open } =
    useModalHelper(newName);

  return (
    <Dialog fullWidth={false} maxWidth="sm" onClose={handleClose} open={open}>
      <DialogTitle>Highscores</DialogTitle>
      <DialogContent>
        <DialogContentText>See your score:</DialogContentText>
        <Box
          noValidate
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 4,
            width: "fit-content",
          }}
        >
          {listHighscores &&
            listHighscores.sort().map((item, id) => {
              const highscores = id + 1;
              return (
                <List
                  key={id}
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={imagesList} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item?.user}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {highscores} - {formatTime(item?.timer)}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </List>
              );
            })}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
