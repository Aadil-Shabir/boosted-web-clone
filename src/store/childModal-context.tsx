import React, {useState} from 'react';
import Colors from '../components/projects/ProjectColors';

type ChildModalContextObj = {
  bgColor: string;
  titleBtnColor: string;
  redColor: () => void;
  orangeColor: () => void;
  pinkColor: () => void;
  yellowColor: () => void;
  skyBlueColor: () => void;
  blueColor: () => void;
  greenColor: () => void;
  lightGreenColor: () => void;
  purpleColor: () => void;
  viridianColor: () => void;
  pacificColor: () => void;
  lightPurpleColor: () => void;
};

const ChildModalContext = React.createContext<ChildModalContextObj>({
  bgColor: `linear-gradient(${Colors.red.bgRed}, black)`,
  titleBtnColor: 'red',
  redColor: () => {
    //changes the backgroungColor to RedColor
  },
  orangeColor: () => {
    //changes the background color to OrangeColor
  },
  pinkColor: () => {
    //changes the background color to PinkColor
  },
  yellowColor: () => {
    //changes the background color to YellowColor
  },
  skyBlueColor: () => {
    //changes the background color to SkyBlueColor
  },
  blueColor: () => {
    //changes the background color to BlueColor
  },
  greenColor: () => {
    //changes the background color to GreenColor
  },
  lightGreenColor: () => {
    //changes the background color to LightGreenColor
  },
  purpleColor: () => {
    //changes the background color to PurpleColor
  },
  viridianColor: () => {
    //changes the background color to ViridianColor
  },
  pacificColor: () => {
    //changes the background color to PacificColor
  },
  lightPurpleColor: () => {
    //changes the background color to LightPurpleColor
  },
});

export const ChildModalContextProvider: React.FC = (props) => {
  const [bgColor, setBgColor] = useState<string>(
    `linear-gradient(${Colors.red.bgRed}, black)`,
  );
  const [titleBtnColor, setTitleBtnColor] = useState<string>(Colors.red.btnRed);

  const redColorHandler = () => {
    setBgColor(`linear-gradient(${Colors.red.bgRed}, black)`);
    setTitleBtnColor(Colors.red.btnRed);
  };

  const orangeColorHandler = () => {
    setBgColor(`linear-gradient(${Colors.orange.bgOrange}, black)`);
    setTitleBtnColor(Colors.orange.btnOrange);
  };

  const pinkColorHandler = () => {
    setBgColor(`linear-gradient(${Colors.pink.bgPink}, black)`);
    setTitleBtnColor(Colors.pink.btnPink);
  };

  const yellowColorHandler = () => {
    setBgColor(`linear-gradient(${Colors.yellow.bgYellow}, black)`);
    setTitleBtnColor(Colors.yellow.btnYellow);
  };

  const skyBlueColorHandler = () => {
    setBgColor(`linear-gradient(${Colors.skyblue.bgSkyBlue}, black)`);
    setTitleBtnColor(Colors.skyblue.btnSkyBlue);
  };

  const blueColorHandler = () => {
    setBgColor(`linear-gradient(${Colors.blue.bgBlue}, black)`);
    setTitleBtnColor(Colors.blue.btnBlue);
  };

  const greenColorHandler = () => {
    setBgColor(`linear-gradient(${Colors.green.bgGreen}, black)`);
    setTitleBtnColor(Colors.green.btnGreen);
  };

  const lightGreenColorHandler = () => {
    setBgColor(`linear-gradient(${Colors.lightGreen.bgLightGreen}, black)`);
    setTitleBtnColor(Colors.lightGreen.btnLightGreen);
  };

  const purpleColorHandler = () => {
    setBgColor(`linear-gradient(${Colors.purple.bgPurple}, black)`);
    setTitleBtnColor(Colors.purple.btnPurple);
  };

  const ViridianColorHandler = () => {
    setBgColor(`linear-gradient(${Colors.viridian.bgViridian}, black)`);
    setTitleBtnColor(Colors.viridian.btnViridian);
  };

  const pacificColorHandler = () => {
    setBgColor(`linear-gradient(${Colors.pacific.bgPacific}, black)`);
    setTitleBtnColor(Colors.pacific.btnPacific);
  };

  const lightPurpleColorHandler = () => {
    setBgColor(`linear-gradient(${Colors.lightPurple.bgLightPurple}, black)`);
    setTitleBtnColor(Colors.lightPurple.btnLightPurple);
  };

  const contextValue: ChildModalContextObj = {
    bgColor: bgColor,
    titleBtnColor: titleBtnColor,
    redColor: redColorHandler,
    orangeColor: orangeColorHandler,
    pinkColor: pinkColorHandler,
    yellowColor: yellowColorHandler,
    skyBlueColor: skyBlueColorHandler,
    blueColor: blueColorHandler,
    greenColor: greenColorHandler,
    lightGreenColor: lightGreenColorHandler,
    purpleColor: purpleColorHandler,
    viridianColor: ViridianColorHandler,
    pacificColor: pacificColorHandler,
    lightPurpleColor: lightPurpleColorHandler,
  };
  return (
    <ChildModalContext.Provider value={contextValue}>
      {props.children}
    </ChildModalContext.Provider>
  );
};

export default ChildModalContext;
