import { useState } from "react";
import { useApp } from "../../context/AppContext";

const useCardsHelper = () => {
  const { imagesList } = useApp();
  const [cardActive, setCardActive] = useState(false);

  return {
    cardActive,
    imagesList,
    setCardActive,
  };
};

export default useCardsHelper;
