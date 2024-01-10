import * as React from "react";
import Grid from "@mui/material/Grid";
import useGameMemoryHelper from "./gameMemory.helper";
import Cards from "../cards";

export default function GameMemory() {
  const { listCards, handleClickCard } = useGameMemoryHelper();

  return (
    <>
      {listCards.map((card, id) => (
        <Grid item key={id} xs={8} sm={3} md={4}>
          <Cards handleClickCard={handleClickCard} item={card} />
        </Grid>
      ))}
    </>
  );
}
