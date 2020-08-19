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
    paddingTop: 66,
  },

  titleNoteInfo: {
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

  noteContent: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 29,
    paddingVertical: 17,

    shadowColor: '#fff',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    marginBottom: 36,
    minWidth: 340,
    minHeight: 113,

  },

  titleNote: {
    fontFamily: 'Overlock_700Bold',
    fontSize: 24,
    color: '#061B50',
  },

  textNote: {
    fontFamily: 'Overlock_400Regular',
    fontSize: 16,
    color: '#142349',
    lineHeight: 20,
    marginVertical: 14,
    maxHeight: 455,
    maxWidth: 292,
    alignSelf: 'baseline'
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