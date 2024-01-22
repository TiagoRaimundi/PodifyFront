import {NavigationContainer} from '@react-navigation/native';
import {getFromAsyncStorage, Keys} from '@utils/asyncStorage';
import {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import client from 'src/api/client';
import {
  getAuthState,
  updateBusyInState,
  updateLoggedInState,
  updateProfile,
} from 'src/store/auth';
import AuthNavigator from './AuthNavigation';
import TabNavigator from './TabNavigator';
import {View, StyleSheet} from 'react-native';
import Loader from '@ui/loader';
import colors from '@utils/colors';

interface Props {}

const AppNavigator: FC<Props> = props => {
  const {loggedIn, busy} = useSelector(getAuthState);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAuthInfo = async () => {
      dispatch(updateBusyInState(true));
      try {
        const token = await getFromAsyncStorage(Keys.AUTH_TOKEN);
        if (!token) {
          return dispatch(updateBusyInState(false));
        }

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

      dispatch(updateBusyInState(false));
    };

    fetchAuthInfo();
  }, []);

  return (
    <NavigationContainer>
      {busy ? ( 
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: colors.OVERLAY,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
          }}>
          <Loader />
        </View>
      ) : null}
      {loggedIn ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
