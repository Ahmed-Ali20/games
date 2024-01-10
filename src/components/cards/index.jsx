import useCardsHelper from "./cards.helper";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const Cards = ({ handleClickCard, item }) => {
  const { cardActive, setCardActive, imagesList } = useCardsHelper();
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={() => handleClickCard(cardActive, setCardActive, item?.key)}
    >
      <CardMedia
        component="div"
        sx={{
          pt: "56.25%",
        }}
        image={cardActive ? item?.src : imagesList}
      />
    </Card>
  );
};

export default Cards;
