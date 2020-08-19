import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import NoteItem from '../../components/NoteItem';

import styles from './styles';

export default function NotesList() {
  const { navigate } = useNavigation();



  function handleAddNote() {
    navigate('AddNote')
  }

  return (
    <View style={styles.content}>
      <LinearGradient colors={['#E1B9E1', '#CCA2B3']} style={styles.linearGradient}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.noteList}>
            <Text style={styles.titlePage}>Your Notes</Text>
            <View style={styles.itens}>
              <NoteItem />

            </View>
          </View>


        </ScrollView>

        <View style={styles.bottomBar}>

          <Ionicons onPress={handleAddNote} style={styles.addButton} name="ios-add" color="#373737" size={40} />

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