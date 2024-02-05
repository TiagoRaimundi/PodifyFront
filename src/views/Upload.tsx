import FileSelector from '@components/FileSelector';
import colors from '@utils/colors';
import {FC} from 'react';
import {View, StyleSheet, Text, Pressable, TextInput, ScrollView} from 'react-native';

import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {}

const Upload: FC<Props> = props => {
  return (
    <ScrollView style={styles.container}>
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
      <View style={styles.formContainer}>
        <TextInput
        placeholderTextColor={colors.INACTIVE_CONTRAST} 
        placeholder="Title"
        style={styles.input} />
        <TextInput
        placeholderTextColor={colors.INACTIVE_CONTRAST} 
        placeholder="About"
        style={styles.input} 
        numberOfLines={10}
        multiline/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  fileSelctorContainer: {
    flexDirection: 'row',
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: colors.SECONDARY,
    borderRadius: 7,
    padding: 10,
    fontSize: 18,
    color: colors.CONTRAST,
    marginBottom: 20,
    textAlignVertical: 'top'
  },
});

export default Upload;
