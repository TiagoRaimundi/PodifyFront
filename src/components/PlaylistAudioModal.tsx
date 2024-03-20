import AppModal from '@ui/AppModal';
import {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getPlaylistModalState,
  updatePlaylistVisibility,
} from 'src/store/PlaylistModal';

interface Props {}

const PlaylistAudioModal: FC<Props> = props => {
  const {visible} = useSelector(getPlaylistModalState);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(updatePlaylistVisibility(false));
  };
  return (
    <AppModal visible={visible} onRequestClose={handleClose}>
      <View/>
    </AppModal>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default PlaylistAudioModal;
