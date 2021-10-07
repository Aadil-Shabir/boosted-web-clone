import Colors from './ProjectColors';
import styled from 'styled-components';

const TitleButton = styled.button`
  background-color: ${(props) => props.theme.tb};
  border: none;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  margin: 10px;
  margin-top: 28px;
`;

const BlueButton = styled.button`
  background-color: ${Colors.blue.btnBlue};
  border: 1px solid white;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  margin: 10px;

  &:hover {
    opacity: 0.9;
    outline: gray solid 3px;
  }

  &:focus {
    outline: #404e4d solid 3px;
  }
`;

const RedButton = styled.button`
  background-color: ${Colors.red.btnRed};
  border: 1px solid white;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  margin: 10px;

  &:hover {
    opacity: 0.9;
    outline: gray solid 3px;
  }

  &:focus {
    outline: #404e4d solid 3px;
  }
`;

const OrangeButton = styled.button`
  background-color: ${Colors.orange.btnOrange};
  border: 1px solid white;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  margin: 10px;

  &:hover {
    opacity: 0.9;
    outline: gray solid 3px;
  }

  &:focus {
    outline: #404e4d solid 3px;
  }
`;

const PinkButton = styled.button`
  background-color: ${Colors.pink.btnPink};
  border: 1px solid white;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  margin: 10px;

  &:hover {
    opacity: 0.9;
    outline: gray solid 3px;
  }

  &:focus {
    outline: #404e4d solid 3px;
  }
`;

const YellowButton = styled.button`
  background-color: ${Colors.yellow.btnYellow};
  border: 1px solid white;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  margin: 10px;

  &:hover {
    opacity: 0.9;
    outline: gray solid 3px;
  }

  &:focus {
    outline: #404e4d solid 3px;
  }
`;

const SkyBlueButton = styled.button`
  background-color: ${Colors.skyblue.btnSkyBlue};
  border: 1px solid white;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  margin: 10px;

  &:hover {
    opacity: 0.9;
    outline: gray solid 3px;
  }

  &:focus {
    outline: #404e4d solid 3px;
  }
`;

const ViridianButton = styled.button`
  background-color: ${Colors.viridian.btnViridian};
  border: 1px solid white;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  margin: 10px;

  &:hover {
    opacity: 0.9;
    outline: gray solid 3px;
  }

  &:focus {
    outline: #404e4d solid 3px;
  }
`;

const GreenButton = styled.button`
  background-color: ${Colors.green.btnGreen};
  border: 1px solid white;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  margin: 10px;

  &:hover {
    opacity: 0.9;
    outline: gray solid 3px;
  }

  &:focus {
    outline: #404e4d solid 3px;
  }
`;

const LightPurpleButton = styled.button`
  background-color: ${Colors.lightPurple.btnLightPurple};
  border: 1px solid white;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  margin: 10px;

  &:hover {
    opacity: 0.9;
    outline: gray solid 3px;
  }

  &:focus {
    outline: #404e4d solid 3px;
  }
`;

const PurpleButton = styled.button`
  background-color: ${Colors.purple.btnPurple};
  border: 1px solid white;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  margin: 10px;

  &:hover {
    opacity: 0.9;
    outline: gray solid 3px;
  }

  &:focus {
    outline: #404e4d solid 3px;
  }
`;

const LightGreenButton = styled.button`
  background-color: ${Colors.lightGreen.btnLightGreen};
  border: 1px solid white;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  margin: 10px;

  &:hover {
    opacity: 0.9;
    outline: gray solid 3px;
  }

  &:focus {
    outline: #404e4d solid 3px;
  }
`;

const PacificButton = styled.button`
  background-color: ${Colors.pacific.btnPacific};
  border: 1px solid white;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  margin: 10px;

  &:hover {
    opacity: 0.9;
    outline: gray solid 3px;
  }

  &:focus {
    outline: #404e4d solid 3px;
  }
`;

const ColorButtons = {
  TitleButton,
  BlueButton,
  RedButton,
  OrangeButton,
  YellowButton,
  PinkButton,
  SkyBlueButton,
  ViridianButton,
  GreenButton,
  LightGreenButton,
  PurpleButton,
  LightPurpleButton,
  PacificButton,
};

export default ColorButtons;
