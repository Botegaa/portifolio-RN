import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './skillsStyle'
import { Photo } from '../../components/photos/Photo';
import * as Progress from 'react-native-progress';
import js from '../../../assets/js.png';
import html from '../../../assets/navegador.png';
import python from '../../../assets/python.png';
import rn from '../../../assets/biblioteca.png';
export function Gallery() {
    return (
        <View>
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
                    <View style={styles.box}>
                        
                        <View style={styles.tecnologia}>
                        
                        <Text style={styles.skillsText}>Skills:</Text>
                            
                              <View style={styles.tecnologia}>
                               <View style={{flexDirection:'row', justifyContent:'space-around', width:350

                               }}>
                                <Image style={styles.img}
                                    source={html}
                                />
                                <Text>70%</Text>
                                </View>
                            <Progress.Bar progress={0.7} borderWidth={0} borderRadius={10} unfilledColor='white' width={200} color='#FF6767' />

                            <View style={styles.tecnologia}>
                               <View style={{flexDirection:'row', justifyContent:'space-around', width:350

                               }}>
                                <Image style={styles.img}
                                    source={rn}
                                />
                                <Text>50%</Text>
                                </View>
                                <Progress.Bar progress={0.5} borderWidth={0} borderRadius={10} unfilledColor='white' width={200} color='#EF89FF' />

                                <View style={styles.tecnologia}>
                               <View style={{flexDirection:'row', justifyContent:'space-around', width:350

                               }}>
                                <Image style={styles.img}
                                    source={js}
                                />
                                <Text>80%</Text>
                                </View>
                                    <Progress.Bar progress={0.8} borderWidth={0} borderRadius={10} unfilledColor='white' width={200} color='#FFF37F' />
                                    <View style={styles.tecnologia}>
                               <View style={{flexDirection:'row', justifyContent:'space-around', width:350

                               }}>
                                <Image style={styles.img}
                                    source={python}
                                />
                                <Text>45%</Text>
                                </View>

                                        <Progress.Bar progress={0.45} borderWidth={0} borderRadius={10} unfilledColor='white' width={200} color='#70FEA8' />
                                    </View>
                                </View>
                            </View>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}