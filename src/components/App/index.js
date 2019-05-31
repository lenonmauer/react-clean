import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import ReduxToastr from 'react-redux-toastr';

import '~/config/reactotron';

import { store, persistor } from '~/store';
import Navbar from '~/components/Navbar';
import history from '~/routes/history';
import Routes from '~/routes';

import GlobalStyle from '~/styles/global';
import { Container, Content } from './styles';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Container>
          <GlobalStyle />
          <ReduxToastr
            closeOnToastrClick
            timeOut={3000}
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            position="bottom-right"
          />

          <Content>
            <Navbar />
            <Routes />
            <ReduxToastr
              closeOnToastrClick
              timeOut={3000}
              transitionIn="fadeIn"
              transitionOut="fadeOut"
              position="bottom-right"
            />
          </Content>
        </Container>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
