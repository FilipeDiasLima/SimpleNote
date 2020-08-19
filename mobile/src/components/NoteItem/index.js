import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

export default function NoteItem() {
  const { navigate } = useNavigation();


  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');

  function handleOpenNote() {
    navigate('OpenNote')
  }

  function loadNotes() {
    AsyncStorage.getItem('notes').then(response => {
      if (response) {
        const savedNotes = JSON.parse(response);

        setTitle(savedNotes[0]);
        setNote(savedNotes[1]);
      }
    })
  }

  useFocusEffect(() => {
    loadNotes();
  }, [])

  return (
    <RectButton onPress={handleOpenNote} style={styles.content}>

      <TextInput
        style={styles.titleNote}
        multiline={false}
        placeholder="Title note"
        autoCorrect={false}
        blurOnSubmit={false}
        editable={false}
        value={title}
        onChangeText={text => setTitle(text)}
      />

      <View style={styles.noteContent}>
        <TextInput
          style={styles.textNote}
          multiline={true}
          placeholder="Write your note"
          numberOfLines={6}
          autoCorrect={false}
          blurOnSubmit={false}
          editable={false}
          textAlignVertical={'top'}
          value={note}
          onChangeText={text => setNote(text)}
        />

      </View>
      <View style={styles.footer}>
        <Text style={styles.hour}>19:03</Text>
        <Text style={styles.date}>20/10/2019</Text>
      </View>
    </RectButton>
  );
}