import { StyleSheet } from 'react-native';
import { Color } from '../constants/Color';
import { Typography } from '../constants/Typography';

const WelcomeStyle = StyleSheet.create({
  container: {
    backgroundColor: '#161618',
    flex: 1,
  },

  contentContainerStyle: {
    flex: 1,
  },
  title: {
    marginBottom: 8,
    fontSize: Typography.FontSize.xxl,
    fontFamily: Typography.Font.PrimaryBold,
  },
  form: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 24,

    flex: 1,
  },
  inputHolder: {
    gap: 8,
  },
  button: {
    marginTop: 56,
  },
  dontHaveAccount: {
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
  SignUpOptions: {
    fontSize: Typography.FontSize.lg,
    fontFamily: Typography.Font.PrimaryRegular,
    Color: Color.Gray,
    marginBottom: 28,
  },
  CheckboxField: {
    height: 50,
    backgroundColor: Color.lightBlue,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Color.InputBorder,
    marginBottom: 8,
  },
  CheckboxLabel: {
    fontSize: Typography.FontSize.md,
    color: Color.Gray,
    fontFamily: Typography.Font.PrimaryRegular,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    height: 24,
    width: 24,
    backgroundColor: Color.lightBlue,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 15,
    width: 15,
    borderRadius: 5,
    backgroundColor: Color.Primary,
  },
  radioButtonText: {
    fontSize: Typography.FontSize.md,
    marginLeft: 16,
  },
});

export default WelcomeStyle;
