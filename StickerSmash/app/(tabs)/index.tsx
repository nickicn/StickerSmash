import { useState } from "react";
import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker';
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const pickerImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true);
    } else{
      alert("Você não selecionou nenhuma imagem!");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  }

  const onAddSticker = () => {

  }

  const onSaveImageAsync = () => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer 
          imgSource={PlaceholderImage} 
          selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionRow}>
            <IconButton icon="refresh" label="Resetar" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Salvar" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            theme="primary" 
            label="Escolher uma foto"
            onPress={pickerImageAsync} 
          />
          <Button 
            label="Usar esta foto" 
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionRow: {
    alignItems: 'center',
    flexDirection: 'row',
  }
});
