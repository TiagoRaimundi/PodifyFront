import {NavigationContainer} from '@react-navigation/native';
import {getFromAsyncStorage, Keys} from '@utils/asyncStorage';
import {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import client from 'src/api/client';
import {getAuthState, updateLoggedInState, updateProfile} from 'src/store/auth';
import AuthNavigator from './AuthNavigation';
import TabNavigator from './TabNavigator';

interface Props {}

const AppNavigator: FC<Props> = props => {
  const {loggedIn} = useSelector(getAuthState);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAuthInfo = async () => {
      try {
        const token = await getFromAsyncStorage(Keys.AUTH_TOKEN);
        if (!token) return;

        const {data} = await client.get('/auth/is-auth', {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });

        dispatch(updateProfile(data.profile));
        dispatch(updateLoggedInState(true));
        
        console.log('My auth profile:', data);
      } catch (error) {
        console.log('Auth error: ', error);
      }
    };

    fetchAuthInfo();
  }, []);

  return (
    <NavigationContainer>
      {loggedIn ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
