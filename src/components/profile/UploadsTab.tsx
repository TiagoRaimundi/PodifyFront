import AudioListle from '@ui/AudioListle';
import colors from '@utils/colors';
import {FC} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import {useFetchUploadsByProfile} from 'src/hooks/query';

interface Props {}

const UploadsTab: FC<Props> = props => {
  const {data, isLoading} = useFetchUploadsByProfile();

  return (
    <ScrollView style={styles.container}>
      {data?.map(item => {
        return ( <AudioListle audio={item}/>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
 
});

export default UploadsTab;
