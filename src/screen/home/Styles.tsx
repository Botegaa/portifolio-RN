import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';





export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textName: {
    alignSelf: 'center',
    margin: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  Bttn: {
    margin: 5,
    borderRadius: 8,
    backgroundColor: 'rgba(54, 187, 130, 0.32)',
    justifyContent: 'center',
    width: 300,
    alignSelf: 'center',
    padding: 5,
    opacity: 0.8

  },
  conteudo:{
    marginTop:150
  }


});