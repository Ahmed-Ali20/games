import { createContext, useContext, useState, useEffect } from "react";
import fetchGetPhotos from "../../services/getPhotos";

export const AppStateContext = createContext({});

export const AppProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState(
    JSON.parse(localStorage.getItem("userLogin") || "{}")
  );
  const [imagesList, setImagens] = useState();
  const [gameList, setGameList] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [timerGame, getTimer] = useState();
  const [open, setOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showRestart, setsSowRestart] = useState(false);
  const [updateName, setUpdateName] = useState(false);
  const [timeGameUser, setTimeGameUser] = useState(0);
  const [newNameUser, setNewNameUser] = useState();

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  };

  const openInput = (update) => {
    setUpdateName(update);
  };

  const openModal = (modal, newName) => {
    setOpen(modal);
    setNewNameUser(newName);
  };

  const getValueTimer = (time) => {
    setTimeGameUser(time);
  };

  const getListPhotos = (images) => {
    const list = [
      {
        id: 1,
        key: 1,
        src: images[0].src.small,
        active: false,
      },
      {
        id: 2,
        key: 1,
        src: images[0].src.small,
        active: false,
      },
      {
        id: 3,
        key: 2,
        src: images[1].src.small,
        active: false,
      },
      {
        id: 4,
        key: 2,
        src: images[1].src.small,
        active: false,
      },
      {
        id: 5,
        key: 3,
        src: images[2].src.small,
        active: false,
      },
      {
        id: 6,
        key: 3,
        src: images[2].src.small,
        active: false,
      },
      {
        id: 7,
        key: 4,
        src: images[3].src.small,
        active: false,
      },
      {
        id: 8,
        key: 4,
        src: images[3].src.small,
        active: false,
      },
      {
        id: 9,
        key: 5,
        src: images[4].src.small,
        active: false,
      },
      {
        id: 10,
        key: 5,
        src: images[4].src.small,
        active: false,
      },
      {
        id: 11,
        key: 6,
        src: images[5].src.small,
        active: false,
      },
      {
        id: 12,
        key: 6,
        src: images[5].src.small,
        active: false,
      },
    ];
    setGameList(list);
  };

  const getPhoto = (path) => {
    fetchGetPhotos(path)
      .then((data) => {
        getListPhotos(data.photos);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getOnePhotos = (images) => {
    setImagens(images.small);
  };
  const getOnePhoto = (path) => {
    fetchGetPhotos(path)
      .then((data) => {
        getOnePhotos(data.src);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPhoto("search?query=people");
    getOnePhoto("photos/7644275");
  }, []);

  return (
    <AppStateContext.Provider
      value={{
        itemList,
        userLogin,
        imagesList,
        gameList,
        timerGame,
        open,
        timeGameUser,
        showCard,
        showRestart,
        updateName,
        newNameUser,
        setUserLogin,
        setItemList,
        getTimer,
        setOpen,
        setTimeGameUser,
        formatTime,
        getValueTimer,
        setShowCard,
        setsSowRestart,
        setUpdateName,
        openInput,
        openModal,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useApp = () => useContext(AppStateContext);
