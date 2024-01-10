import { useApp } from "../../context/AppContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useGameHelper = () => {
  const { userLogin, showCard, openModal, openInput, timerGame } = useApp();
  const navigate = useNavigate();

  const [newName, setNewName] = useState();

  const handleLogout = () => {
    const Logout = {
      nameUser: userLogin.nameUser,
      password: userLogin.password,
      login: false,
    };
    localStorage.setItem("userLogin", JSON.stringify(Logout));
    navigate("/");
  };

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("userLogin") || "{}");

    setNewName(list.nameUser);
  }, []);

  const handleClickOpen = () => {
    openModal(true, newName);
  };

  const handleClickUpdate = () => {
    openInput(true);
    const Logout = {
      nameUser: userLogin.nameUser,
      password: userLogin.password,
      login: false,
    };
    localStorage.setItem("userLogin", JSON.stringify(Logout));
    navigate("/update");
  };

  return {
    userLogin,
    showCard,
    newName,
    handleLogout,
    handleClickOpen,
    handleClickUpdate,
  };
};

export default useGameHelper;
