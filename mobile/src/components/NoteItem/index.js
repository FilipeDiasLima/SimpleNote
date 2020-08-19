import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

export default function NoteItem() {
  const { navigate } = useNavigation();
  const [note, setNote] = useState([]);

  const readData = async () => {
    try {
      const noteArray = await AsyncStorage.getItem(STORAGE_KEY);

      if (noteArray !== null) {
        setNote(noteArray)
      }
    } catch (err) {
      alert('Failed to fetch the data from storage');
    }
  }

  useEffect(() => {
    readData()
  }, [setNote])

  function handleOpenNote() {
    navigate('OpenNote')
  }
  return (
    <RectButton onPress={handleOpenNote} style={styles.content}>

      <Text style={styles.titleNote}>Title note</Text>

      <View style={styles.noteContent}>
        <Text style={styles.textNote}>
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make
          a type specimen book.
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.hour}>19:03</Text>
        <Text style={styles.date}>20/10/2019</Text>
      </View>
    </RectButton>
  );
}