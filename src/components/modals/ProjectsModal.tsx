import React, {useContext} from 'react';
import {Backdrop, Box, Modal, Fade, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import TimelineContext from '../../store/timeline-context';
import ProjectsChildModal from './ProjectsChildModal';
import NewProjectList from '../../pages/timeline/NewProjectList';

const style = {
  position: 'absolute' as const,
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '1rem',
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles({
  main: {
    justifyContent: 'center',
    textAlign: 'center',
  },
});

const ProjectsModal: React.FC = () => {
  const classes = useStyles();
  const tmCtx = useContext(TimelineContext);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={tmCtx.showModal}
        onClose={tmCtx.closeModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={tmCtx.showModal}>
          <Box sx={style}>
            <div className={classes.main}>
              <Typography
                id="transition-modal-title"
                variant="h5"
                component="h2"
              >
                Projects
              </Typography>
              <ProjectsChildModal />
            </div>
            <NewProjectList />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ProjectsModal;
