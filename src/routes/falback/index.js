import { Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Fallback = ({ children }) => {
  return (
    <>
      <Suspense fallback={<CircularProgress />}>{children}</Suspense>
    </>
  );
};

export default Fallback;
