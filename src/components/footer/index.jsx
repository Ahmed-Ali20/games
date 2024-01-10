import Typography from "@mui/material/Typography";

const Footer = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      Author Ahmed - {new Date().getFullYear()}
    </Typography>
  );
};

export default Footer;
