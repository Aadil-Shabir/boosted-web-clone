import React, { useState } from 'react';

const LayoutContext = React.createContext<{
  sidebar: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}>({
  sidebar: false,
  openDrawer: () => {
    //Open the Drawer
  },
  closeDrawer: () => {
    //Close the Drawer
  }
});

export const LayoutContextProvider: React.FC = (props) => {
  const [open, setOpen] = useState(false);

  const handlerDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const LayoutValue: {
    sidebar: boolean;
    openDrawer: () => void;
    closeDrawer: () => void;
  } = {
    sidebar: open,
    openDrawer: handlerDrawerOpen,
    closeDrawer: handleDrawerClose
  };

  return (
    <LayoutContext.Provider value={LayoutValue}>
      {props.children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
