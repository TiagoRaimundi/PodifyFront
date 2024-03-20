import AppView from '@components/AppView';
import PublicProfileContainer from '@components/profile/PublicProfileContainer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {HomeNavigatorStackParamList} from 'src/@types/navigation';
import {useFetchPublicProfile} from 'src/hooks/query';

type Props = NativeStackScreenProps<
  HomeNavigatorStackParamList,
  'PublicProfile'
>;

const PublicProfile: FC<Props> = ({route}) => {
  const {profileId} = route.params;
  const {data} = useFetchPublicProfile(profileId);

  return (
    <AppView>
      <View style={styles.container}>
        <PublicProfileContainer profile={data} />
      </View>
    </AppView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default PublicProfile;
