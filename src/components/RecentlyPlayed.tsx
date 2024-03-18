import colors from '@utils/colors';
import {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { useFetchRecentlyPlayed } from 'src/hooks/query';

interface Props {}

const RecentlyPlayed: FC<Props> = props => {
  const {data, isLoading} = useFetchRecentlyPlayed()

  return <View style={styles.container}>
    <Text style={styles.title}>Recently played</Text>
    {data?.map(item => {
        return <View key={item.id}>
            <Text>{item.title}</Text>
        </View>

    })}
  </View>;
};

const styles = StyleSheet.create({
  container: {},
  title: {
    color: colors.CONTRAST,
    fontSize:  20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default RecentlyPlayed;
