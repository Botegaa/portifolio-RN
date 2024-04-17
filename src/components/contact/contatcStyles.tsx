import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'center'
  },
  blocos:{
    margin:5,
    borderRadius:8,
    backgroundColor: 'rgba(54, 187, 130, 0.32)',
   
    width:300,
    flexDirection:'row',
    padding:5,
    opacity:0.8
  },
  imagem:{
    width:30,
    height:30,
    opacity:1
        
  },
  texto:{
    paddingLeft:5,
    alignSelf:'center',
    justifyContent:'center',
    color:'white',
   
  }
});