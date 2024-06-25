import { StyleSheet } from 'react-native';

export const HomeStyle = StyleSheet.create({
  containerGlobal:{
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 50,
    backgroundColor: '#fbf7ee',
    flex: 1
  },
  containerCards: {
    marginTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  globalCard: {
    height: 130,
    width: '49%',
    marginTop: 15,
    marginBottom: 15,
    alignItems: 'center'
  },
  imagenCard: {
    flex: 1,
    borderRadius: 10,
    width: 120,
    height:120,
    borderWidth:1,
    borderColor:'#d1d1d1'
  },
  imagenPrincipal: {
    height: 200,
    width: 'auto',
    resizeMode: 'cover',
    borderRadius: 10
  },
  separatorLine:{
    height: 120,
    width: 2,
    backgroundColor: '#faeed6',
    borderRadius: 5
  },
  textGlobalCard: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10
  }
})