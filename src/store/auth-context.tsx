import React, {useState} from 'react';

const AuthContext = React.createContext<{
  token: null | string;
  isLoggedIn: boolean;
  localId: null | string;
  login: (_token: string, localId: string) => void;
  logout: () => void;
}>({
  token: '',
  isLoggedIn: false,
  localId: '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: (_token: string, localId: string) => {
    //set the token up and UID
  },
  logout: () => {
    //empty the token
  },
});

export const AuthContextProvider: React.FC = (props) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState<null | string>(initialToken);
  const initialUID = localStorage.getItem('UID');
  const [UID, setUID] = useState<null | string>(initialUID);

  const userIsLoggedIn = !!token;

  const loginHandler = (_token: string, localId: string) => {
    setToken(_token);
    localStorage.setItem('token', _token);
    setUID(localId);
    localStorage.setItem('UID', localId);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
    setUID(null);
    localStorage.removeItem('UID');
  };

  const contextValue: {
    token: null | string;
    isLoggedIn: boolean;
    localId: null | string;
    login: (_token: string, localId: string) => void;
    logout: () => void;
  } = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    localId: UID,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
