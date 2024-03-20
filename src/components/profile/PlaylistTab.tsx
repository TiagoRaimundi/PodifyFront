import EmptyRecords from '@ui/EmptyRecords';
import PlaylistItem from '@ui/PlaylistItem';
import {FC} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {useFetchPlaylist} from 'src/hooks/query';

interface Props {}

const PlaylistTab: FC<Props> = props => {
  const {data, isLoading} = useFetchPlaylist();

  return (
    <ScrollView style={styles.container}>
      {!data?.length ? (
        <EmptyRecords title="There is no playlist!"/>

      ) : null}
      
      {data?.map(playlist => {
        return <PlaylistItem key={playlist.id} playlist={playlist} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default PlaylistTab;
