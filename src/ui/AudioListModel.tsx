import colors from '@utils/colors';
import {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AppModal from './AppModal';
import {AudioData} from 'src/@types/audio';
import {FlatList} from 'react-native-gesture-handler';
import AudioListItem from './AudioListItem';
import AudioListLoadingUI from './AudioListLoadingUI';

interface Props {
  data: AudioData[];
  header?: string;
  visible: boolean;
  onRequestClose(): void;
  onItemPress(item: AudioData, data: AudioData[]): void;
  loading?: boolean;
}

const AudioListModel: FC<Props> = ({
  header,
  visible,
  loading,
  data,
  onItemPress,
  onRequestClose,
}) => {
  return (
    <AppModal visible={visible} onRequestClose={onRequestClose}>
      <View style={styles.container}>
        {loading ? (
          <AudioListLoadingUI />
        ) : (
          <>
            <Text style={styles.header}>{header}</Text>
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <AudioListItem
                    onPress={() => onItemPress(item, data)}
                    audio={item}
                  />
                );
              }}
            />
          </>
        )}
      </View>
    </AppModal>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.CONTRAST,
    paddingVertical: 10,
  },
});

export default AudioListModel;
