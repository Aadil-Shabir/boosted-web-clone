import styled, { ThemeProvider } from 'styled-components';
import {
    ThemeProvider as MuiThemeProvider,
    StylesProvider,
} from '@material-ui/core/styles';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Calendar from './pages/Calendar';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Timeline from './pages/Timeline';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/UI/Layout';
import theme from './theme';

const Container = styled.div`
    display: flex;
    margintop: 50px;
`;

const App = () => {
    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    <Container>
                        <Layout />
                        <Switch>
                            <Route path="/timeline" exact>
                                <Timeline />
                            </Route>
                            <Route path="/reports" exact>
                                <Reports />
                            </Route>
                            <Route path="/calendar" exact>
                                <Calendar />
                            </Route>
                            <Route path="/settings" exact>
                                <Settings />
                            </Route>
                            <Route path="/login" exact>
                                <Login />
                            </Route>
                            <Route path="/signup" exact>
                                <Signup />
                            </Route>
                        </Switch>
                    </Container>
                </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>
    );
};

export default App;
