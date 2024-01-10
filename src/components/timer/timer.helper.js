import { useEffect, useState } from "react";
import { useApp } from "../../context/AppContext";

const useTimerHelper = () => {
  const {
    open,
    formatTime,
    getValueTimer,
    showCard,
    userLogin,
    showRestart,
    updateName,
  } = useApp();
  const [timer, setTimer] = useState(0);
  let secondsTimer = null;

  useEffect(() => {
    if (open === true || showCard === true || updateName === true) {
      clearTimeout(secondsTimer);
      getValueTimer(timer);

      if (showRestart === true) {
        setTimer(0);
      }
    } else {
      startTimer();
    }
  });

  useEffect(() => {
    if (open === true) {
      const lists = JSON.parse(
        localStorage.getItem("listHighscores") || "null"
      );
      if (lists !== null) {
        localStorage.setItem(
          "listHighscores",
          JSON.stringify([...lists, { user: userLogin.nameUser, timer: timer }])
        );
        removedDuplicate(lists);
      } else {
        localStorage.setItem(
          "listHighscores",
          JSON.stringify([{ user: userLogin.nameUser, timer: timer }])
        );
      }
    }
  }, [open]);

  const removedDuplicate = (listGame) => {
    let updateUser = null;
    listGame.filter((item, index) => {
      if (item.user === userLogin.nameUser) {
        const newArray = listGame.length - 1;
        if (newArray === index) {
          return (updateUser = item);
        }
      }
    });

    const setPerson = new Set();

    const result = listGame.filter((person) => {
      if (person.user !== userLogin.nameUser) {
        const duplicatedPerson = setPerson.has(person.user);
        setPerson.add(person.user);
        return !duplicatedPerson;
      }
    });

    const listItem = JSON.parse(
      localStorage.getItem("listHighscores") || "null"
    );

    if (listItem !== null) {
      localStorage.setItem(
        "listHighscores",
        JSON.stringify([...result, { user: userLogin.nameUser, timer: timer }])
      );
    } else {
      localStorage.setItem("listHighscores", JSON.stringify([updateUser]));
    }
  };

  const startTimer = () => {
    secondsTimer = setTimeout(() => {
      setTimer(timer + 1);
    }, 1300);

    return secondsTimer;
  };

  return {
    formatTime,
    timer,
  };
};

export default useTimerHelper;
