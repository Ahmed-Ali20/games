import { useApp } from "../../context/AppContext";

const useCardSucessHelper = () => {
  const { setsSowRestart, setOpen } = useApp();
  const controlRestart = () => {
    window.location.reload(true);
    localStorage.setItem("gameList", JSON.stringify([]));
    setsSowRestart(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return {
    controlRestart,
    handleClickOpen,
  };
};

export default useCardSucessHelper;
