import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";

const useHomeHelper = () => {
  const [opneAlert, setOpenAlert] = useState(false);
  const [resultAlert, setResultAlert] = useState(false);
  const navigate = useNavigate();
  const { setUserLogin } = useApp();

  const handleOnChange = (event) => {
    event.preventDefault();
    setOpenAlert(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    setOpenAlert(false);
    setResultAlert("");

    if (name) {
      const list = JSON.parse(localStorage.getItem("listUser") || "[]");

      if (list !== null) {
        const itens = list?.filter((item) => {
          if (name === item.nameUser) {
            return item;
          } else {
            return null;
          }
        });

        if (itens.length > 0) {
          setOpenAlert(false);
          const login = {
            nameUser: itens[0].nameUser,
            login: true,
          };
          localStorage.setItem("userLogin", JSON.stringify(login));
          navigate("/game");
          setUserLogin(JSON.parse(localStorage.getItem("userLogin") || "{}"));
        } else {
          setResultAlert("User is not registered, please register");
          setOpenAlert(true);
        }
      }
    } else {
      if (!name) {
        setResultAlert("Name is a required field");
        return setOpenAlert(true);
      }
    }
  };

  return {
    handleSubmit,
    handleOnChange,
    opneAlert,
    resultAlert,
  };
};

export default useHomeHelper;
