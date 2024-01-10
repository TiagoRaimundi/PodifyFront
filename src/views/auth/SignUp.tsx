import AuthInputField from '@components/AuthInputField';
import colors from '@utils/colors';
import {FC, useState} from 'react';
import {StyleSheet, View, TextInput, SafeAreaView, Text, Button} from 'react-native';

interface Props {}

const SignUp: FC<Props> = props => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: ''
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
      <AuthInputField 
        placeholder="John Doe"
        label="Name"
        containerStyle={styles.marginBottom}
        onChange={(text) => {
          setUserInfo({...userInfo, name: text})
        }}
      />
      <AuthInputField 
        placeholder="johndoe@gmail.com"
        label="Email"
        keyboardType='email-address'
        containerStyle={styles.marginBottom}
        onChange={(text) => {
          setUserInfo({...userInfo, email: text})
        }}
      />
      <AuthInputField 
        placeholder="********"
        label="Password"
        autoCapitalize='none'
        secureTextEntry
        onChange={(text) => {
          setUserInfo({...userInfo, password: text})
        }}
      />
      <Button 
      onPress={() => {
        console.log(userInfo)
      }}
      title='Sign up'/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  formContainer:{
    width: '95%',
    paddingHorizontal: 15,
  },
  marginBottom: {
    marginBottom: 20,
  }
});

export default SignUp;
