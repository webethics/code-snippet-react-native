import { StyleSheet } from 'react-native';
import { Color } from '../../constants/Color';
import { Typography } from '../../constants/Typography';

const WelcomeStyle = StyleSheet.create({
  container: {
    backgroundColor: '#161618',
  },

  contentContainerStyle: {
    backgroundColor: '#000',
    padding: 0,
    margin: 0,
    flexGrow: 1,
  },
  title: {
    marginBottom: 24,
    fontFamily: Typography.Font.PrimarySemiBold,
    fontSize: Typography.FontSize.xxl,
  },
  form: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  inputHolder: {
    // gap: 8,
  },
  forgotPassword: {
    fontSize: 15,
    color: Color.Gray,
    fontFamily: Typography.Font.PrimaryMedium,
    textDecorationLine: 'underline',
    marginTop: 16,
    textAlign: 'right',
  },
  button: {
    marginTop: 36,
  },
  or: {
    textAlign: 'center',
    fontFamily: Typography.Font.PrimaryMedium,
    marginVertical: 12,
  },
  dontHaveAccount: {
    marginTop: 20,
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: Typography.Font.PrimaryRegular,
    fontSize: Typography.FontSize.md,
  },
  signUp: {
    color: Color.Primary,
    textDecorationLine: 'underline',
    fontFamily: Typography.Font.PrimaryBold,
    fontSize: Typography.FontSize.md,
  },
  error: {
    fontSize: Typography.FontSize.xs,
    alignSelf: 'flex-start',
    color: Color.Error,
    marginLeft: 10,
  },
  marginTop: {
    marginTop: 15,
  },
});

export default WelcomeStyle;
