import { StyleSheet } from 'react-native';
import { Color } from '../../constants/Color';
import { Typography } from '../../constants/Typography';

const WelcomeStyle = StyleSheet.create({
  container: {
    backgroundColor: '#161618',
  },
  contentContainerStyle: {
    padding: 0,
    margin: 0,
    flexGrow: 1,
  },
  titleOuter: {
    backgroundColor: Color.White,
    paddingHorizontal: 20,
    marginTop: -1,
  },
  ShowBorder: {
    borderWidth: 1,
    borderColor: Color.Error,
    borderRadius: 4,
  },
  title: {
    marginTop: 25.77,
    marginBottom: 24,
    fontFamily: Typography.Font.PrimarySemiBold,
    fontSize: Typography.FontSize.xxl,
  },
  form: {
    backgroundColor: Color.White,
    paddingHorizontal: 20,
    paddingBottom: 24,
    marginTop: 'auto',
    flex: 1,
  },
  inputHolder: {
    gap: 0,
  },
  button: {
    marginTop: 40,
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
  doubleInput: {
    width: '47.5%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    fontSize: 15,
    color: Color.Dark,
    fontFamily: Typography.Font.PrimarySemiBold,
    marginLeft: 8,
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
