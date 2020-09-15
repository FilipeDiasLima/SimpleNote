import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../services/api";

import saveIcon from "../../../assets/checkmark-outline.png";
import deleteIcon from "../../../assets/trash-outline.png";
import line from "../../../assets/line.png";

import Input from "../../components/Input";

import styles from "./styles";
import noteStyles from "../../styles/noteStyles";

export default function OpenNote() {
  const route = useRoute();
  const { navigate, goBack } = useNavigation();

  const [dataInfo, setDataInfo] = useState({});
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const routeParams = route.params;

  useEffect(() => {
    api.get(`notes/${routeParams.id}`).then((response) => {
      setDataInfo(response.data);
      setTitle(response.data.title);
      setNote(response.data.note);
    });
  }, []);

  if (!dataInfo) {
    return null;
  }

  async function handleSaveChanges(id) {
    const response = await api.put(`notes/${id}`);
    console.log(response.data);
    //setDataInfo(response.data);
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

          <Text style={styles.titleNote}>Edit note</Text>
        </View>

        <View style={styles.noteItem}>
          <View style={noteStyles.contentNote}>
            <View key={dataInfo.id} style={noteStyles.noteContent}>
              <Input
                editable={true}
                value={title}
                onChangeText={(text) => setTitle(text)}
              >
                {dataInfo.title}
              </Input>

              <TextInput
                style={noteStyles.textNote}
                multiline={true}
                numberOfLines={15}
                autoCorrect={false}
                blurOnSubmit={false}
                editable={true}
                textAlignVertical={"top"}
              >
                {dataInfo.note}
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
            onPress={() => handleSaveChanges(dataInfo.id)}
            style={styles.saveIcon}
          >
            <Image source={saveIcon} />
          </RectButton>

          <Image style={styles.line} source={line} />

          <RectButton
            onPress={() => handleDeleteNote(dataInfo.id)}
            style={styles.deleteIcon}
          >
            <Image source={deleteIcon} />
          </RectButton>
        </View>
      </LinearGradient>
    </View>
  );
}
