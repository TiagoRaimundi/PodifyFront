import AppInput from '@ui/AppInput';
import colors from '@utils/colors';
import {FC} from 'react';
import {View, StyleSheet, Text, TextInput, TextInputProps, StyleProp, ViewStyle} from 'react-native';

interface Props {
  label?: string;
  errorMsg?: string;
  placeholder?: string;
  keyboardType?: TextInputProps['keyboardType'];
  autoCapitalize?: TextInputProps['autoCapitalize']
  secureTextEntry?:boolean;
  containerStyle?: StyleProp<ViewStyle>
  onChange?:(text: string) => void
}

const AuthInputField: FC<Props> = props => {
  const {
      label,
      placeholder,
      keyboardType,
      autoCapitalize,
      secureTextEntry,
      containerStyle,
      errorMsg,
      onChange
} = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.errorMsg}>{errorMsg}</Text>

      </View>
      <AppInput 
        placeholder={placeholder}
        keyboardType={keyboardType} 
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        onChangeText={onChange}
         />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  label: {
    color: colors.CONTRAST,
  },
  errorMsg: {
    color: colors.ERROR
  },
  labelContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5
  },

});

export default AuthInputField;
