import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../services/api";

import saveIcon from "../../../assets/checkmark-outline.png";
import deleteIcon from "../../../assets/trash-outline.png";
import line from "../../../assets/line.png";

import styles from "./styles";
import noteStyles from "../../styles/noteStyles";

export default function OpenNote() {
  const route = useRoute();
  const { navigate, goBack } = useNavigation();

  const [data, setData] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newNote, setNewNote] = useState("");

  const routeParams = route.params;

  useEffect(() => {
    api.get(`notes/${routeParams.id}`).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data.note && !data.title) {
    return null;
  }

  function handleGoBack() {
    navigate("NotesList");
  }

  function handleDeleteNote(id) {
    api.delete(`notes/${id}`).then();
    goBack();
  }

  return (
    <View style={styles.content}>
      <LinearGradient
        colors={["#E1B9E1", "#CCA2B3"]}
        style={styles.linearGradient}
      >
        <View style={styles.topInfo}>
          <RectButton onPress={handleGoBack} style={styles.arrowLeftButton}>
            <Feather name="arrow-left" size={24} color="#061B50" />
          </RectButton>

          <Text style={styles.titleNote}>Title note</Text>
        </View>

        <View style={styles.noteItem}>
          <View style={noteStyles.contentNote}>
            <TextInput
              style={noteStyles.titleNote}
              autoCorrect={false}
              blurOnSubmit={false}
              editable={true}
              value={newTitle}
              onChangeText={(text) => setNewTitle(text)}
            >
              {data.title}
            </TextInput>

            <View style={noteStyles.noteContent}>
              <TextInput
                style={noteStyles.textNote}
                multiline={true}
                numberOfLines={15}
                autoCorrect={false}
                blurOnSubmit={false}
                editable={true}
                textAlignVertical={"top"}
                value={newNote}
                onChangeText={(text) => setNewNote(text)}
              >
                {data.note}
              </TextInput>
            </View>
            <View style={noteStyles.footer}>
              <Text style={noteStyles.hour}>19:03</Text>
              <Text style={noteStyles.date}>20/10/2019</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttons}>
          <RectButton
            onPress={() => handleEditNoteSave(data.id)}
            style={styles.saveIcon}
          >
            <Image source={saveIcon} />
          </RectButton>

          <Image style={styles.line} source={line} />

          <RectButton
            onPress={() => handleDeleteNote(data.id)}
            style={styles.deleteIcon}
          >
            <Image source={deleteIcon} />
          </RectButton>
        </View>
      </LinearGradient>
    </View>
  );
}
