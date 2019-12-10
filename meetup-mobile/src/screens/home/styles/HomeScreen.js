import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "$blackBlueColor"
  },
  topContainer: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red"
  },
  bottomContainer: {
    flex: 1,
    // backgroundColor: "blue"
  }
});

export default styles;