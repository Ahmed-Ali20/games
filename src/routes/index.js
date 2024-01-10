import { lazy } from "react";
import {
  BrowserRouter,
  Routes as ReactRoutes,
  Route as ReactRoute,
} from "react-router-dom";
import Fallback from "./falback";
import { useApp } from "../context/AppContext";

const Home = lazy(() => import("../pages/home"));
const Game = lazy(() => import("../pages/game"));
const CreateUser = lazy(() => import("../pages/createUser"));
const NotFound = lazy(() => import("../pages/notFound"));

export default function Routes() {
  const { userLogin, updateName } = useApp();
  return (
    <BrowserRouter>
      <ReactRoutes>
        <ReactRoute
          path="/"
          element={
            <Fallback>
              <Home />
            </Fallback>
          }
        />
        {userLogin?.login === true && (
          <>
            <ReactRoute
              path="/game"
              element={
                <Fallback>
                  <Game />
                </Fallback>
              }
            />
          </>
        )}
        <ReactRoute
          path={`${updateName ? "/update" : "/createUser"}`}
          element={
            <Fallback>
              <CreateUser />
            </Fallback>
          }
        />
        <ReactRoute
          path="*"
          element={
            <Fallback>
              <NotFound />
            </Fallback>
          }
        />
      </ReactRoutes>
    </BrowserRouter>
  );
}
