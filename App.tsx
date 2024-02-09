import AppContainer from '@components/AppContainer';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import AppNavigator from 'src/navigation';
import store from 'src/store';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppContainer>
          <AppNavigator />
        </AppContainer>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
