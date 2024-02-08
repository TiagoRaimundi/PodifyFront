import AppContainer from '@components/AppContainer';
import {clearAsyncStorage} from '@utils/asyncStorage';
import {Provider} from 'react-redux';
import AppNavigator from 'src/navigation';
import store from 'src/store';

const App = () => {

  return (
    <Provider store={store}>
      <AppContainer>
        <AppNavigator />
      </AppContainer>
    </Provider>
  );
};

export default App;
