import React, {useContext, useState} from 'react';
import NewProjectButton from '../projects/NewProjectButton';
import {
  Modal,
  Box,
  Button,
  makeStyles,
  TextField,
  Backdrop,
} from '@material-ui/core';
import ColorButtons from '../projects/ColorButtons';
import {ProjectBackgroundColor} from '../projects/NewProjectBgColor';
import ChildModalContext from '../../store/childModal-context';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  borderRadius: '1rem',
  boxShadow: 24,
  height: 350,
};

const useStyles = makeStyles({
  center: {
    position: 'absolute',
    left: '48%',
    top: '25%',
    transform: 'translate(-50%, -50%)',
    display: 'inline-block',
    whiteSpace: 'nowrap',
  },
  input: {
    color: 'white',
  },
  floatingLabelFocusStyle: {
    color: 'white',
  },
  btnArea: {
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    display: 'flex',
    flexDirection: 'row-reverse',
    margin: '1rem',
    color: 'white',
  },
});

const ChildModal: React.FC = () => {
  const cmCtx = useContext(ChildModalContext);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState('');
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const saveHandler = () => {
    console.log(value);
    console.log(cmCtx.titleBtnColor);
    console.log(Date.now());
  };

  return (
    <React.Fragment>
      <NewProjectButton handleOpen={handleOpen} />

      <Modal
        // hideBackdrop
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{...style, width: 350}}>
          <ProjectBackgroundColor>
            <div className={classes.center}>
              <ColorButtons.TitleButton />
              <TextField
                id="standard-basic"
                label="New Project"
                variant="standard"
                InputLabelProps={{
                  className: classes.floatingLabelFocusStyle,
                }}
                inputProps={{className: classes.input}}
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
            </div>
          </ProjectBackgroundColor>
          <div className={classes.btnArea}>
            <ColorButtons.RedButton onClick={cmCtx.redColor} />
            <ColorButtons.OrangeButton onClick={cmCtx.orangeColor} />
            <ColorButtons.PinkButton onClick={cmCtx.pinkColor} />
            <ColorButtons.YellowButton onClick={cmCtx.yellowColor} />
            <ColorButtons.SkyBlueButton onClick={cmCtx.skyBlueColor} />
            <ColorButtons.BlueButton onClick={cmCtx.blueColor} />
            <ColorButtons.LightGreenButton onClick={cmCtx.lightGreenColor} />
            <ColorButtons.GreenButton onClick={cmCtx.greenColor} />
            <ColorButtons.ViridianButton onClick={cmCtx.viridianColor} />
            <ColorButtons.PurpleButton onClick={cmCtx.purpleColor} />
            <ColorButtons.LightPurpleButton onClick={cmCtx.lightPurpleColor} />
            <ColorButtons.PacificButton onClick={cmCtx.pacificColor} />
          </div>
          <div className={classes.actionBtn}>
            <Button onClick={saveHandler}>Save</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default ChildModal;
