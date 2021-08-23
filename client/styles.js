import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: '#192229',
      width: '100%',
      height: '100%',
      paddingTop: '25%',
    },

    textStyle: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 24,
        color: '#EFF3F5'
    },

    imageStyle: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        borderColor: '#fdffff',
        borderWidth: .2,
    },

    buttons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 30
    },

    imageContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#212E36',
        alignContent: 'space-between',
        padding: '10%',
    },

    titleContainer: {
      backgroundColor: '#1c313a',
      height: 50,
      paddingTop: 10,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },

    bttStyle: {
      borderRadius: 50,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      borderWidth: 1,
      borderColor: '#52A5E0',
    },

    bttnDisable: {
      borderRadius: 50,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      borderWidth: 1,
      borderColor: 'gray'
    },

    textBttn: {
      color: '#52A5E0',
      fontSize: 20
    },

    textBttnDisable: {
      color: 'gray',
      fontSize: 20
    }

  });
  