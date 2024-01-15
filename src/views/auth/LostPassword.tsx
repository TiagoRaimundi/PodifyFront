import AuthInputField from '@components/form/AuthInputField';
import Form from '@components/form';
import {FC} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import * as yup from 'yup';
import SubmitBtn from '@components/form/SumitBtn';
import AppLink from '@ui/AppLink';
import AuthFormContainer from '@components/AuthFormContainer';

const LostPasswordSchema = yup.object({
  email: yup
    .string()
    .trim('Email is missing!')
    .email('Invalid email!')
    .required('Email is required!'),
  password: yup
    .string()
    .trim('Password is missing!')
    .min(8, 'Password is too short!')
    .required('Password is required!'),
});

interface Props {}

const initialValues = {
  email: '',
};

const LostPassword: FC<Props> = props => {
  return (
    <Form
      onSubmit={values => {
        console.log(values);
      }}
      initialValues={initialValues}
      validationSchema={LostPasswordSchema}>
      <AuthFormContainer heading="Forget Password!" subHeading="Oops, did you forget your password? Don't worry, we'll help you get back in.">
        <View style={styles.formContainer}>
          <AuthInputField
            name="email"
            placeholder="john@email.com"
            label="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            containerStyle={styles.marginBottom}
          />
          <SubmitBtn title="Send link" />
          <View style={styles.linkContainer}>
            <AppLink title="Sign in" />
            <AppLink title="Sign up" />
          </View>
        </View>
      </AuthFormContainer>
    </Form>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
  },
  marginBottom: {
    marginBottom: 20,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default LostPassword;
