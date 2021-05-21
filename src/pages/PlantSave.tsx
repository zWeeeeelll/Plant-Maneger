import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import waterdrop from '../assets/waterdrop.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';

export function PlantSave(){
  return (
    <>
    <View styles={styles.container}>
      <SvgFromUri 
      uri=""
      height={150}
      width={150}
      />

      <Text style={StyleSheet.plantName}>
        Nome da Planta
      </Text>
      <Text style={StyleSheet.plantAbout}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis nihil quidem porro
           dolor doloribus dolores obcaecati a aliquam, quo minima eveniet nobis, magnam rerum reiciendis 
           dignissimos excepturi, saepe earum.
      </Text>
    </View>
    <View style={StyleSheet.controller}>
        <View style={styles.tipContainer}>
          <Image 
          source={waterdrop}
          style={style.tipImage}
          />
          <Text style={styles.tipText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sed repellendus itaque dignissimos, excepturi ipsa autem consectetur.
             Eum eaque, culpa tempore ab reprehenderit neque, suscipit atque vel laudantium, explicabo iure.
          </Text>
        </View>

        <Text style={styles.alertLabel}>
          Escolha o melhor horario para ser lembrado:
        </Text>

        <Button
          title="cadastrar planta"
          onPress={() => {}}
        />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape,
  }
})