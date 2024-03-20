import AudioListItem from '@ui/AudioListItem';
import AudioListLoadingUI from '@ui/AudioListLoadingUI';
import EmptyRecords from '@ui/EmptyRecords';
import {FC} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import { useSelector } from 'react-redux';
import {useFetchFavorite} from 'src/hooks/query';
import useAudioController from 'src/hooks/useAudioController';
import { getPlayerState } from 'src/store/player';

interface Props {}

const FavoriteTab: FC<Props> = props => {
  const {onGoingAudio} = useSelector(getPlayerState)
  const {data, isLoading} = useFetchFavorite();
  const {onAudioPress} = useAudioController();

  if (isLoading) return <AudioListLoadingUI />;

  if (!data?.length)
    return <EmptyRecords title="There is no favorite audio!" />;

  return (
    <ScrollView style={styles.container}>
      {data?.map(item => {
        return (
          <AudioListItem
            onPress={() => onAudioPress(item, data)}
            key={item.id}
            audio={item}
            isPlaying={onGoingAudio?.id === item.id}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default FavoriteTab;
