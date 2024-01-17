import {FC, useEffect, useRef, useState} from 'react';
import {Keyboard, StyleSheet, TextInput, View} from 'react-native';
import AppLink from '@ui/AppLink';
import AuthFormContainer from '@components/AuthFormContainer';
import OTPField from '@ui/OTPField';
import AppButton from '@ui/AppButton';
import { AuthStackParamList } from 'src/@types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import client from 'src/api/client';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<AuthStackParamList, "Verification">

const otpFields = new Array(6).fill('');

const Verification: FC<Props> = ({route}) => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const [otp, setOtp] = useState([...otpFields]);
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);

  const {userInfo} = route.params

  const inputRef = useRef<TextInput>(null);

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];

    if (value === 'Backspace') {
      // moves to the previous only if the field is empty
      if (!newOtp[index]) setActiveOtpIndex(index - 1);
      newOtp[index] = '';
    } else {
      // update otp and move to the next
      setActiveOtpIndex(index + 1);
      newOtp[index] = value;
    }

    setOtp([...newOtp]);
  };
  
  const handlePaste = (value: string) => {
    if(value.length === 6){
      Keyboard.dismiss()
      const newOtp = value.split('')
      setOtp([...newOtp])
    }
  }
  
  const isValidOtp = otp.every(value => {
    return value.trim()
  })

  const handleSubmit = async () => {
    if(!isValidOtp) return;

    try {
      const {data} = await client.post('/auth/verify-email', {userId: userInfo.id, token: otp.join('')})
      //navigate back to sign in
      navigation.navigate('SignIn') 
    } catch (error) {
      console.log("Error inside Verification: ", error)
      
    }
   
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  return (
    <AuthFormContainer heading="Please look at your email.">
      <View style={styles.inputContainer}>
        {otpFields.map((_, index) => {
          return (
            
            <OTPField
              ref={activeOtpIndex === index ? inputRef : null}
              key={index}
              placeholder="*"
              onKeyPress={({nativeEvent}) => {
                handleChange(nativeEvent.key, index);
                
              }}
              onChangeText={handlePaste}
              keyboardType='numeric'
              value={otp[index] || ''}
            />
          );
        })}
      </View>

      <AppButton title="Submit" onPress={handleSubmit}/>

      <View style={styles.linkContainer}>
        <AppLink title="Re-send OTP" />
      </View>
    </AuthFormContainer>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  linkContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'flex-end',
  },
});

export default Verification;
