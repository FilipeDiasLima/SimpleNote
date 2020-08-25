import React, { useState, useEffect } from 'react';
import { TextInput, View, Image, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import checkIcon from '../../../assets/checkmark-outline.png';
import closeIcon from '../../../assets/close-circle-outline.png';
import line from '../../../assets/line.png';

import styles from './styles';

export default function AddNote() {
  const { navigate } = useNavigation();

  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');

  function verconsole() {
    console.log(note);
  }

  async function handleSaveNote() {
    let noteArray = []

    noteArray.push(title)
    noteArray.push(note)

    await AsyncStorage.setItem('@NoteItem', JSON.stringify(noteArray));

    setNote('');
    setTitle('');

    navigate('NotesList');
  }

  function cancelNote() {
    navigate('NotesList')
  }

  return (
    <View style={styles.content}>
      <LinearGradient colors={['#E1B9E1', '#CCA2B3']} style={styles.linearGradient}>

        <View style={styles.topInfo}>
          <RectButton onPress={cancelNote} style={styles.arrowLeftButton}>
            <Feather name="arrow-left" size={24} color="#061B50" />
          </RectButton>

          <Text style={styles.titleNoteInfo}>Title note</Text>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}>
          <View style={styles.noteItem}>

            <View style={styles.noteContent}>
              <TextInput
                style={styles.titleNote}
                placeholder="Title note"
                value={title}
                onChangeText={text => setTitle(text)}
                placeholderTextColor="#c1bccc"
              />

              <TextInput
                style={styles.textNote}
                placeholder="Write your note..."
                value={note}
                onChangeText={text => setNote(text)}
                placeholderTextColor="#c1bccc"
                multiline={true}
                numberOfLines={15}
                autoCorrect={false}
                blurOnSubmit={false}
                editable={true}
                textAlignVertical={'top'}
              />

            </View>

            <View style={styles.buttons}>
              <RectButton onPress={handleSaveNote} style={styles.checkIcon}>
                <Image source={checkIcon} />
              </RectButton>

              <Image style={styles.line} source={line} />

              <RectButton onPress={cancelNote} style={styles.closeIcon}>
                <Image source={closeIcon} />
              </RectButton>
            </View>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </View>
  )
}