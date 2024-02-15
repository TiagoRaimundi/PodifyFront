import LatestUploads from '@components/LatestUploads';
import OptionsModal from '@components/OptionsModal';
import RecommendedAudios from '@components/RecommendedAudios';
import colors from '@utils/colors';
import {FC, useState} from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {}

const Home: FC<Props> = props => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <View style={styles.container}>
      <LatestUploads
        onAudioPress={item => {
          console.log(item);
        }}
        onAudioLongPress={() => {
          setShowOptions(true);
        }}
      />
      <RecommendedAudios
        onAudioPress={item => {
          console.log(item);
        }}
        onAudioLongPress={() => {
          setShowOptions(true);
        }}
      />
      <OptionsModal
        visible={showOptions}
        onRequestClose={() => {
          setShowOptions(false);
        }}
        options={[
          {title: 'Add to playlist', icon: 'playlist-music'},
          {title: 'Add to favorite', icon: 'cards-heart'},
        ]}
        renderItem={item => {
          return (
            <Pressable style={styles.optionContainer}>
              <MaterialComIcon
                size={24}
                color={colors.PRIMARY}
                name={item.icon}
              />
              <Text style={styles.optionLabel}>{item.title}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionLabel: {
    color: colors.PRIMARY,
    fontSize: 16,
    marginLeft: 5},
});

export default Home;
