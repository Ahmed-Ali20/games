import { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext";

const useModalHelper = (newName) => {
  const { imagesList, open, openModal, userLogin } = useApp();

  const [listHighscores, setScores] = useState();
  const [updateGame, setUpdateGame] = useState();

  useEffect(() => {
    if (open === true) {
      const uniqueList = JSON.parse(
        localStorage.getItem("listHighscores") || "null"
      );

      if (uniqueList !== null) {
        setScores(uniqueList);
      }
    }
  }, [open]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  };

  const handleClose = () => {
    openModal(false, newName);
  };

  return {
    listHighscores,
    updateGame,
    imagesList,
    open,
    handleClose,
    formatTime,
  };
};

export default useModalHelper;
