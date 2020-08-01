# react-native-use-modal-hooks
[![](https://img.shields.io/npm/v/react-native-use-modal-hooks.svg)](https://www.npmjs.com/package/react-native-use-modal-hooks)
[![Build Status](https://travis-ci.com/toshi1127/react-native-modal-hooks.svg?branch=master)](https://travis-ci.com/toshi1127/react-native-modal-hooks)
[![codecov](https://codecov.io/gh/toshi1127/react-native-use-modal-hooks/branch/master/graph/badge.svg)](https://codecov.io/gh/toshi1127/react-native-use-modal-hooks)
[![](https://img.shields.io/npm/dt/react-native-use-modal-hooks.svg)](https://www.npmjs.com/package/react-native-use-modal-hooks)

React hooks for displaying a modal window in React Native.
This library does not provide any UI, but instead offers a convenient way to render modal components defined elsewhere.
For a simple modal component check out react-modal, which works well with this library.

ref: [react-modal-hook](https://github.com/mpontus/react-modal-hook)

## Demo
![demo](https://user-images.githubusercontent.com/32378535/89108919-b28cf380-d477-11ea-8596-8b05f3988aa6.gif)

## How to install
`npm install react-native-use-modal-hooks` or `yarn add react-native-use-modal-hooks`

## How to use

```
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
```