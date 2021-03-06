import React from 'react';
import {KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard,Platform} from 'react-native'

// method to stop keyboard from blocking text box
const KeyboardWrapper = ({children}) => {
    return(
        <KeyboardAvoidingView style={{flex: 1}}  behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView style={{flex: 1,  backgroundColor: '#fff',}}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                 {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default KeyboardWrapper;