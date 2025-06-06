import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import { PropsWithChildren } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <View>
      <Modal animationType='slide' transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Escolha uma figurinha</Text>
                <Pressable onPress={onClose}>
                    <MaterialIcons name='close' color='#ff4375' size={22} />
                </Pressable>
            </View>
            {children}
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    modalContent: {
        height: '25%',
        width: '100%',
        backgroundColor: '#d3d3d3',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
    titleContainer: {
        height: '16%',
        backgroundColor: '#d3d3d3',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: '#ff4375',
        fontSize: 18,
    }
})