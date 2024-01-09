import AppInput from '@ui/AppInput';
import colors from '@utils/colors';
import {FC} from 'react';
import {StyleSheet, View, TextInput, SafeAreaView, Text} from 'react-native';

interface Props {}

const SignUp: FC<Props> = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
      <Text style={styles.label}>Name</Text>
      <AppInput
        placeholder="João Henrique"
        style={{borderColor: 'yellow'}}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="joao@gmail.com"
        placeholderTextColor={colors.INACTIVE_CONTRAST}
        style={styles.input}
        keyboardType='email-address'
        autoCapitalize='none'
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="********"
        placeholderTextColor={colors.INACTIVE_CONTRAST}
        style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}
      />
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

  input: {
    borderWidth: 2,
    borderColor: colors.SECONDARY,
    height: 45,
    borderRadius: 25,
    color: colors.CONTRAST,
    padding: 10,
  },
  label:{
    color: colors.CONTRAST
  },
  formContainer:{
    width: '95%',
    paddingHorizontal: 15,
  }
});

export default SignUp;
