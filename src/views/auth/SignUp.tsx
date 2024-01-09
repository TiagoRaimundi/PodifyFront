import AuthInputField from '@components/AuthInputField';
import colors from '@utils/colors';
import {FC} from 'react';
import {StyleSheet, View, TextInput, SafeAreaView, Text} from 'react-native';

interface Props {}

const SignUp: FC<Props> = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
      <AuthInputField placeholder="John Doe" label="Name" containerStyle={styles.marginBottom}/>
      <AuthInputField placeholder="johndoe@gmail.com" label="Email" keyboardType='email-address' containerStyle={styles.marginBottom}/>
      <AuthInputField placeholder="********" label="Password" autoCapitalize='none' secureTextEntry/>
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
