import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {getFromAsyncStorage, Keys} from '@utils/asyncStorage';
import {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import client from 'src/api/client';
import {
  getAuthState,
  updateBusyState,
  updateLoggedInState,
  updateProfile,
  loginSuccess,
} from 'src/store/auth';
import AuthNavigator from './AuthNavigation';
import TabNavigator from './TabNavigator';
import {View, StyleSheet} from 'react-native';
import Loader from '@ui/Loader';
import colors from '@utils/colors';

interface Props {}

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.PRIMARY,
    primary: colors.CONTRAST,
  },
};

const AppNavigator: FC<Props> = props => {
  const {loggedIn, busy} = useSelector(getAuthState);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAuthInfo = async () => {
      dispatch(updateBusyState(true));
      try {
        const token = await getFromAsyncStorage(Keys.AUTH_TOKEN);
        if (!token) {
          return dispatch(updateBusyState(false));
        }

        const {data} = await client.get('/auth/is-auth', {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });

        dispatch(loginSuccess({profile: data.profile}));
        dispatch(updateLoggedInState(true));

        dispatch(updateProfile(data.profile));
      } catch (error) {
        console.log('Auth error: ', error);
      }

      dispatch(updateBusyState(false));
    };

    fetchAuthInfo();
  }, []);

  return (
    <NavigationContainer theme={AppTheme}>
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
