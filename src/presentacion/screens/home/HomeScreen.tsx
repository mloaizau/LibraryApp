import React from 'react'
import { Image, ImageBackground, Pressable, Text, View } from 'react-native'
import { HomeStyle } from '../../styles/HomeStyle'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigator/StackNavigator';

export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  
  const funcion = () => {
    navigation.navigate('SearchScreen');
  }

  return (
      <View style={HomeStyle.containerGlobal}>
        {/* Card principal - Header */}
        <View>
          <Image style={HomeStyle.imagenPrincipal} 
          source={require('../../../assets/imagenPrincipal.jpeg')}></Image>
        </View>

        {/* Iconos de redireccion */}
        <View style={HomeStyle.containerCards}>
          <Pressable style={HomeStyle.globalCard} onPress={()=>funcion()}>
            <Image style={HomeStyle.imagenCard} 
            source={require('../../../assets/image1.jpg')}></Image>
            <Text style={HomeStyle.textGlobalCard}>Libros leídos</Text>
          </Pressable>
          <View style={HomeStyle.separatorLine}></View>
          <Pressable style={HomeStyle.globalCard}>
          <Image style={HomeStyle.imagenCard} 
            source={require('../../../assets/image4.jpg')}></Image>
            <Text style={HomeStyle.textGlobalCard}>Libros comprados</Text>
          </Pressable>
          <Pressable style={HomeStyle.globalCard}>
          <Image style={HomeStyle.imagenCard} 
            source={require('../../../assets/image3.jpg')}></Image>
            <Text style={HomeStyle.textGlobalCard}>Libros deseados</Text>
          </Pressable>
          <View style={HomeStyle.separatorLine}></View>

          <Pressable style={HomeStyle.globalCard}>
          <Image style={HomeStyle.imagenCard} 
            source={require('../../../assets/image2.jpg')}></Image>
            <Text style={HomeStyle.textGlobalCard}>Reseñas</Text>
          </Pressable>
        </View>
        
      </View>
  )
}
