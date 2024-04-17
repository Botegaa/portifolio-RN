import React from 'react';
import { View, Text, Button, Image, Pressable } from 'react-native';
import { Photo } from '../../components/photos/Photo';
import { styles } from '../home/Styles'
import { Contact } from '../../components/contact/contact';
import { LinearGradient } from 'expo-linear-gradient';
export function Home({ navigation }: any) {


    function navGallery() {
        navigation.navigate('skills')
    }

    return (

        <View style={styles.container}
        >

            <LinearGradient
                style={{
                    height: '100%',
                    width: '100%',
                }}

                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={['#132138', '#418266', '#132138',]}>

                <View style={styles.conteudo}>
                    <Photo />
                    <Text style={styles.textName}>Pedro Henrique Botega</Text>
                    <Contact></Contact>

                    <Pressable style={styles.Bttn}
                        onPress={navGallery}>
                        <Text style={styles.textName} >Minhas skills</Text>
                    </Pressable>
                </View>
            </LinearGradient>
        </View>

    );
}