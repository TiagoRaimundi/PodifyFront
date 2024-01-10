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
  const [errorInfo, setErrorInfo] = useState({
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
        errorMsg={errorInfo.name}
      />
      <AuthInputField 
        placeholder="johndoe@gmail.com"
        label="Email"
        keyboardType='email-address'
        containerStyle={styles.marginBottom}
        onChange={(text) => {
          setUserInfo({...userInfo, email: text})
        }}
        errorMsg={errorInfo.email}
      />
      <AuthInputField 
        placeholder="********"
        label="Password"
        autoCapitalize='none'
        secureTextEntry
        onChange={(text) => {
          setUserInfo({...userInfo, password: text})
        }}
        errorMsg={errorInfo.password}
      />
      <Button 
      onPress={() => {
        if(!userInfo.name) return setErrorInfo({
          email: '',
          password: '',
          name: "Name is missing!"
          
        })
        if(!userInfo.email) return setErrorInfo 
        ({
          name: '',
          password: '',
          email: "Email is missing!"
          
        })
        if(!userInfo.password) 
        return setErrorInfo 
        ({
          name:'',
          email: '',
          password: "Password is missing!"
          
        });
        ({
          name:'',
          email: '',
          password: "Password is missing!"
          
        })
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
