import React, {useState} from 'react';

const AuthContext = React.createContext<{
  token: null | string;
  isLoggedIn: boolean;
  login: (_token: string) => void;
  logout: () => void;
}>({
  token: '',
  isLoggedIn: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: (_token: string) => {
    //set the token up
  },
  logout: () => {
    //empty the token
  },
});

export const AuthContextProvider: React.FC = (props) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState<null | string>(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (_token: string) => {
    setToken(_token);
    localStorage.setItem('token', _token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const contextValue: {
    token: null | string;
    isLoggedIn: boolean;
    login: (_token: string) => void;
    logout: () => void;
  } = {
    token: token,
    isLoggedIn: userIsLoggedIn,
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
