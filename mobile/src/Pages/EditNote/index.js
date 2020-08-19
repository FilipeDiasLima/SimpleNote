import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import NoteItem from '../../components/NoteItem';
import checkIcon from '../../../assets/checkmark-outline.png';
import closeIcon from '../../../assets/close-circle-outline.png';
import line from '../../../assets/line.png';

import styles from './styles';

export default function OpenNote() {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('OpenNote');
  }

  return (
    <View style={styles.content}>
      <LinearGradient colors={['#E1B9E1', '#CCA2B3']} style={styles.linearGradient}>

        <View style={styles.topInfo}>
          <RectButton onPress={handleGoBack} style={styles.arrowLeftButton}>
            <Feather name="arrow-left" size={24} color="#061B50" />
          </RectButton>

          <Text style={styles.titleNote}>Title note</Text>
        </View>

        <View style={styles.noteItem} >
          <NoteItem style={styles.note} />


          <View style={styles.buttons}>
            <RectButton style={styles.checkIcon}>
              <Image source={checkIcon} />
            </RectButton>

            <Image style={styles.line} source={line} />

            <RectButton style={styles.closeIcon}>
              <Image source={closeIcon} />
            </RectButton>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}