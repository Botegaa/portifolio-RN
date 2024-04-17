import React from 'react';
import { View, Text, Image } from 'react-native';
import Git from '../../../assets/pngimg.com - github_PNG27.png'
import email from '../../../assets/o-email.png'
import phone from '../../../assets/icons8-telefone-da-maçã-50.png'
import linkedin from '../../../assets/logotipo-do-linkedin.png'

import { styles } from './contatcStyles';

export function Contact() {
    return (
        <View style={styles.container}>
            <View style={styles.blocos}><Image
                source={Git}
                style={styles.imagem}
            />
                <Text
                    style={styles.texto}
                >Botegaa</Text>
            </View>
            <View style={styles.blocos}>
                <Image
                    source={linkedin}
                    style={styles.imagem}
                />
                <Text
                    style={styles.texto}
                >Pedro Henrique Botega</Text></View>
            <View style={styles.blocos}>
                <Image
                    source={phone}
                    style={styles.imagem}
                />
                <Text
                    style={styles.texto}
                >(48)99821-5784</Text></View>
            <View style={styles.blocos}>
                <Image
                    source={email}
                    style={styles.imagem}
                />
                <Text
                    style={styles.texto}
                >Botega123@hotmail.com</Text></View>
            


        </View>
    );
}