import deepEqual from 'deep-equal';
import TrackPlayer, {
  Track,
  usePlaybackState,
  State,
} from 'react-native-track-player';
import {useDispatch, useSelector} from 'react-redux';
import {AudioData} from 'src/@types/audio';
import {
  getPlayerState,
  updateOnGoingAudio,
  updateOnGoingList,
} from 'src/store/player';

const updateQueue = async (data: AudioData[]) => {
  const lists: Track[] = data.map(item => {
    return {
      id: item.id,
      title: item.title,
      url: item.file,
      artwork: item.poster || require('../assets/music.png'),
      artist: item.owner.name,
      gender: item.category,
      isLiveStream: true,
    };
  });
  await TrackPlayer.add([...lists]);
};

const useAudioController = () => {
  const {state: playbackState} = usePlaybackState() as {state?: State};
  const {onGoingAudio, onGoingList} = useSelector(getPlayerState);
  const dispatch = useDispatch();

  const isPlayerReady = playbackState !== State.None;

  const onAudioPress = async (item: AudioData, data: AudioData[]) => {
    if (!isPlayerReady) {
      //Playing audio for the first time.
      await updateQueue(data);
      const index = data.findIndex(audio => audio.id === item.id);
      await TrackPlayer.skip(index);
      await TrackPlayer.play();
      dispatch(updateOnGoingAudio(item));
      return dispatch(updateOnGoingList(data));
    }

    if (playbackState === State.Playing && onGoingAudio?.id === item.id) {
      //same audio is already playing (handle pause)
      return await TrackPlayer.pause();
    }

    if (playbackState === State.Paused && onGoingAudio?.id === item.id) {
      //same audio no need to load handle resume
      return await TrackPlayer.play();
    }

    if (onGoingAudio?.id !== item.id) {
      //playing new audio from same list
      const fromSameList = deepEqual(onGoingList, data);
      if(fromSameList){
        //playing new audio from different list

      }else{
        //playing new audio from different list
      }
    }
  };

  return {onAudioPress};
};

export default useAudioController;
