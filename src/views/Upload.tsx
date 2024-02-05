
import FileSelector from '@components/FileSelector';
import colors from '@utils/colors';
import {FC} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {}

const Upload: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <View style={styles.fileSelctorContainer}>
        <FileSelector
          icon={
            <MaterialComIcon
              name="image-outline"
              size={35}
              color={colors.SECONDARY}
            />
          }
          btnTitle="Select Poster"
        />
        <FileSelector
          icon={
            <MaterialComIcon
              name="file-music-outline"
              size={35}
              color={colors.SECONDARY}
            />
          }
          btnTitle="Select Audio"
          style={{marginLeft: 20}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  fileSelctorContainer: {
    flexDirection: 'row',
  },
});

export default Upload;
