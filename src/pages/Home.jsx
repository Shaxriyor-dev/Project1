import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import biznes from '../assets/imgs/biznes.jpg';

function Home() {
  return (
    <div className="p-3 flex items-center justify-between mt-[9%] ml-[4%] gap-8">
      <div>
        <p className="font-[Gotu] text-5xl font-bold w-[601px] leading-16">
          The state educational platform of the{" "}
          <span className="text-[#52BFFF]">Republic of Uzbekistan</span>{" "}
        </p>
        <p className="font-[Gotu] text-[17px] w-[650px] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </p>
        <Box sx={{ "& button": { mt: 6 } }}>
          <Button sx={{fontFamily : 'Gotu' , fontWeight : '700'}} className="h-[56px] w-[210px] " variant="contained" size="large">
            Get starting
          </Button>
        </Box>
      </div>
      <div>
        <img className="h-[410px] w-[590px] rounded-2xl" src={biznes} alt="" />
      </div>
    </div>
  );
}

export default Home;
