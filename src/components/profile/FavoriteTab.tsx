import AudioListLoadingUI from '@ui/AudioListLoadingUI';
import AudioListle from '@ui/AudioListle';
import EmptyRecords from '@ui/EmptyRecords';
import {FC} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import { useFetchFavorites } from 'src/hooks/query';

interface Props {}

const FavoriteTab: FC<Props> = (props) => {
    const {data, isLoading} = useFetchFavorites();

    if(isLoading) return <AudioListLoadingUI/>
  
    if(!data?.length) return <EmptyRecords title="There is no favorite audio!"/>
  
    return (
      <ScrollView style={styles.container}>
        {data?.map(item => {
          return ( <AudioListle key={item.id} audio={item}/>
          );
        })}
      </ScrollView>
    );
 }
 
 const styles = StyleSheet.create({
   container: {} 
}) 
  
export default FavoriteTab; 