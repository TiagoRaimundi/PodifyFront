import PulseAnimationContainer from '@ui/PulseAnimationContainer';
import {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useQuery} from 'react-query';
import {useDispatch} from 'react-redux';
import catchAsyncError from 'src/api/catchError';
import client from 'src/api/client';
import {useFetchLatestAudios} from 'src/hooks/query';
import {updateNotification} from 'src/store/notification';

interface Props {}

const Home: FC<Props> = props => {
  const {data, isLoading} = useFetchLatestAudios();

  // if (isLoading)
  return (
    <PulseAnimationContainer>
      <Text style={{color: 'white', fontSize: 25}}>Loading</Text>
    </PulseAnimationContainer>
  );

  return (
    <View style={styles.container}>
      {data?.map(item => {
        return (
          <Text key={item.id} style={{color: 'white', paddingVertical: 10}}>
            {item.title}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
