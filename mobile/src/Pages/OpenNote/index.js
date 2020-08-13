import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import NoteItem from '../../components/NoteItem';
import editIcon from '../../../assets/create-outline.png';
import deleteIcon from '../../../assets/trash-outline.png';
import line from '../../../assets/line.png';

import styles from './styles';

export default function OpenNote() {
  return (
    <View style={styles.content}>
      <LinearGradient colors={['#E1B9E1', '#CCA2B3']} style={styles.linearGradient}>

        <View style={styles.topInfo}>
          <RectButton style={styles.arrowLeftButton}>
            <Feather name="arrow-left" size={24} color="#061B50" />
          </RectButton>

          <Text style={styles.titleNote}>Title note</Text>
        </View>

        <View style={styles.noteItem} >
          <NoteItem style={styles.note} />


          <View style={styles.buttons}>
            <RectButton style={styles.editIcon}>
              <Image source={editIcon} />
            </RectButton>

            <Image source={line} />

            <RectButton style={styles.deleteIcon}>
              <Image source={deleteIcon} />
            </RectButton>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}