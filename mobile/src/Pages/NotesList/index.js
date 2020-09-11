import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import api from "../../services/api";

import styles from "./styles";
import noteStyles from "../../styles/noteStyles";

export default function NotesList() {
  const { navigate } = useNavigation();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    api.get("notes").then((response) => {
      setNotes(response.data);
    });
  }, [notes]);

  function handleAddNewNoteItem() {
    navigate("AddNote");
  }

  async function handleOpenNote(id) {
    navigate("OpenNote", { id });
  }

  return (
    <View style={styles.content}>
      <LinearGradient
        colors={["#E1B9E1", "#CCA2B3"]}
        style={styles.linearGradient}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.noteList}>
            <Text style={styles.titlePage}>Your Notes</Text>
            <View style={styles.itens}>
              {notes.map((note) => (
                <RectButton
                  key={note.id}
                  onPress={() => handleOpenNote(note.id)}
                  style={noteStyles.contentNote}
                >
                  <Text style={noteStyles.titleNote}>{note.title}</Text>

                  <View style={noteStyles.noteContent}>
                    <Text style={noteStyles.textNote} numberOfLines={6}>
                      {note.note}
                    </Text>
                  </View>
                  <View style={noteStyles.footer}>
                    <Text style={noteStyles.hour}>19:03</Text>
                    <Text style={noteStyles.date}>20/10/2019</Text>
                  </View>
                </RectButton>
              ))}
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottomBar}>
          <Ionicons
            onPress={handleAddNewNoteItem}
            style={styles.addButton}
            name="ios-add"
            color="#373737"
            size={40}
          />

          <TextInput
            placeholder="Search..."
            placeholderTextColor="#4A4A4A"
            style={styles.searchInput}
          />

          <Ionicons
            style={styles.searchButton}
            name="ios-search"
            color="#373737"
            size={30}
          />
        </View>
      </LinearGradient>
    </View>
  );
}
