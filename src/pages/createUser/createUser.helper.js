import { useState } from "react";
import { useApp } from "../../context/AppContext";

const useCreateUserHelper = () => {
  const { updateName } = useApp();
  const [opneAlertError, setOpenAlertError] = useState(false);
  const [opneAlertSucess, setOpenAlertSucess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showLoging, setShowLoging] = useState(false);
  const [resultAlert, setResultAlert] = useState(false);

  const [nameCreate, setNameCreate] = useState();
  const [passwordCreate, setPasswordCreate] = useState();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOnChangeName = (event) => {
    event.preventDefault();
    setOpenAlertError(false);
    setOpenAlertSucess(false);
    setNameCreate(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    event.preventDefault();
    setOpenAlertError(false);
    setOpenAlertSucess(false);
    setPasswordCreate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowLoging(true);

    setOpenAlertError(false);
    if (nameCreate && passwordCreate) {
      const list = JSON.parse(localStorage.getItem("listUser") || "null");
      console.log(list);
      if (list !== null) {
        localStorage.setItem(
          "listUser",
          JSON.stringify([
            ...list,
            {
              nameUser: nameCreate,
              password: passwordCreate,
              login: false,
            },
          ])
        );
      } else {
        localStorage.setItem(
          "listUser",
          JSON.stringify([
            {
              nameUser: nameCreate,
              password: passwordCreate,
              login: false,
            },
          ])
        );
      }

      console.log("nameUsers 3", list);
      setTimeout(() => {
        setOpenAlertSucess(true);
        setShowLoging(false);
      }, 2000);

      setOpenAlertError(false);
    } else {
      setOpenAlertSucess(false);
      setTimeout(() => {
        setShowLoging(false);
        if (!nameCreate && passwordCreate) {
          setResultAlert("Name is a required field");
          return setOpenAlertError(true);
        } else if (!passwordCreate && nameCreate) {
          setResultAlert("Password is a mandatory field");
          return setOpenAlertError(true);
        } else if (!passwordCreate && !nameCreate) {
          setResultAlert("All fields are mandatory");
          return setOpenAlertError(true);
        }
      }, 2000);
    }
  };

  return {
    handleSubmit,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleOnChangeName,
    handleOnChangePassword,
    showPassword,
    opneAlertSucess,
    opneAlertError,
    showLoging,
    resultAlert,
    updateName,
  };
};

export default useCreateUserHelper;
