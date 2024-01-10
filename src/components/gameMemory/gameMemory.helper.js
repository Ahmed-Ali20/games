import { useApp } from "../../context/AppContext";
import { useEffect, useMemo, useState } from "react";

const useGameMemoryHelper = () => {
  const { gameList, setShowCard, showRestart } = useApp();
  const [listCards, setListCards] = useState([]);
  const [listCard, setShow] = useState(false);

  const game = useMemo(() => {
    let list = [];
    for (let i = 0; i < 12; i++) {
      list.push(gameList[i]);
    }
    return list.sort(() => Math.random() - 0.5);
  }, [gameList]);

  let gameCompare = [];
  let gameCount = 0;
  let startGame = false;
  let valueTotalSucess = 0;

  useEffect(() => {
    setListCards(game);
  }, [game]);

  useEffect(() => {
    if (valueTotalSucess === listCards.length && listCard === true) {
      setShowCard(true);
    }
    if (showRestart === true) {
      setShow(false);
    }
  }, []);

  const handleClickCard = (cardShow, setCardActive, key) => {
    if (!cardShow && !startGame) {
      setCardActive(true);
      gameCount++;
      valueTotalSucess++;
      gameCompare.push({ cardShow, setCardActive, key });

      if (gameCount === 2) {
        startGame = true;
        gameCount = 0;

        if (gameCompare[0].key !== gameCompare[1].key) {
          setTimeout(() => {
            if (gameCompare[0].key !== gameCompare[1].key) {
              gameCompare[0].setCardActive(false);
              gameCompare[1].setCardActive(false);
              valueTotalSucess -= 2;
            }
            gameCompare.pop();
            gameCompare.pop();
            startGame = false;
          }, 1000);
        } else {
          setTimeout(() => {
            gameCompare.pop();
            gameCompare.pop();
            startGame = false;
          }, 30);
          gameCompare.pop();
          gameCompare.pop();
          startGame = false;

          if (valueTotalSucess === listCards.length) {
            setShowCard(true);
            setShow(true);
          }
        }
      }
    }
  };

  return {
    listCards,
    handleClickCard,
  };
};

export default useGameMemoryHelper;
