import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },

  linearGradient: {
    flex: 1,
  },

  topInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 37,
    paddingVertical: 66,
  },

  titleNote: {
    fontFamily: 'Overlock_700Bold',
    color: '#061B50',
    lineHeight: 37,
    fontSize: 30,
    left: 75,
  },

  noteItem: {
    marginVertical: 58,
    paddingHorizontal: 37,
    flexDirection: 'column',
    alignItems: 'center',
  },

  buttons: {
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 10,
  },

  checkIcon: {
    padding: 20,
    marginRight: 7,
  },

  line: {
    height: '100%',
  },

  closeIcon: {
    padding: 20,
    marginLeft: 7,
  },
});

export default styles;