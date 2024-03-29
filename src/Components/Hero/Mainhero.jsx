import { Box } from "@mui/material";
import TopHeader from "./TopHeader";
import Slider from "./Slider";
import JoinNow from "./JoinNow";
import { useEffect } from "react";

const Mainhero = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div className="heightS  flex justify-between ">
      <Box className=" overflow-auto w-1/3 hiddenTop ">
        <TopHeader />
      </Box>
      <Box className=" w-full ">
        <Slider />
      </Box>
      <Box className=" overflow-auto w-1/3 h-full whunderd padding  ">
        <JoinNow />
      </Box>
    </div>
  );
};

export default Mainhero;
