import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import { FooterComponent } from "react-native-screens/lib/typescript/components/ScreenFooter";
import * as ImagePicker from '@expo-image-picker';

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const pickerImageAsync = async () => {
    let result = await ImagePicker.lauchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      console.log(result);
    } else{
      alert("Você não selecionou nenhuma imagem!");
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Escolher uma foto" />
        <Button label="Usar esta foto" />
      </View>
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
});
