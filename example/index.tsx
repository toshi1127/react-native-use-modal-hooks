import React from 'react'
import { View, Text, StyleSheet, Modal, TouchableHighlight, Button } from 'react-native'
import { useModal } from '../src';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})

export const Screen: React.FC = () => {
  const [showModal, hideModal] = useModal(() => (
    <Modal
      animationType="slide"
      transparent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>

          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={hideModal}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  ))
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Open Modal"
        onPress={showModal}
      />
    </View>
  )
}
