import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import NoteItem from '../../components/NoteItem';

import styles from './styles';

export default function NotesList() {
  return (
    <View style={styles.content}>
      <LinearGradient colors={['#DFC4DF', '#ECD3DD']} style={styles.linearGradient}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.noteList}>
            <Text style={styles.titlePage}>Your Notes</Text>
            <View style={styles.itens}>
              <NoteItem />
              <NoteItem />
              <NoteItem />
              <NoteItem />
              <NoteItem />
              <NoteItem />
              <NoteItem />
            </View>
          </View>


        </ScrollView>

        <View style={styles.bottomBar}>

          <Ionicons style={styles.addButton} name="ios-add" color="#373737" size={40} />

          <TextInput
            placeholder='Search...'
            placeholderTextColor='#4A4A4A'
            style={styles.searchInput}
          />

          <Ionicons style={styles.searchButton} name="ios-search" color="#373737" size={30} />
        </View>

      </LinearGradient>
    </View>
  );
}