import GridView from '@ui/GridView';
import RecentlyPlayedCard from '@ui/RecentlyPlayedCard';
import colors from '@utils/colors';
import {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useFetchRecentlyPlayed} from 'src/hooks/query';

interface Props {}

const RecentlyPlayed: FC<Props> = props => {
  const {data, isLoading} = useFetchRecentlyPlayed();
  const source = require('../assets/music.png');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recently played</Text>
      <GridView
        data={data || []}
        renderItem={item => {
          return (
            <View key={item.id} style={styles.listStyle}>
              <RecentlyPlayedCard
                key={item.id}
                title={item.title}
                poster={item.poster ?? source}
                onPress={() => {}}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    color: colors.CONTRAST,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  listStyle: {
    marginBottom: 10,
  },
});

export default RecentlyPlayed;
