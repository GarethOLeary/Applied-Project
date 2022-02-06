import React from "react";
import { Modal } from "react-native";
import {
  ModalButton,
  ModalContainer,
  ModalView,
  StyledInput,
  ModalAction,
  ModalActionGroup,
  ModalIcon,
  HeaderTitle,
  colors,
} from "./Styles";

import { AntDesign } from "@expo/vector-icons";
import KeyboardWrapper from './KeyboardWrapper';


const InputModal = ({modalVisible,
    setModalVisible, allergenInputValue,setAllergenInputValue}) => {

        const handleCloseModal = () => {
            setModalVisible(false);
          };

          const handleSubmit = () => {
alert("Submitted!")
          }
        
    return(
        <>
       
        <ModalButton onPress={() => setModalVisible(true)}>
        <AntDesign name="plus" size={30} color={colors.secondary} />
        </ModalButton>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
 
      <ModalContainer>
          <ModalView>
            <ModalIcon>
            <HeaderTitle>Allergens</HeaderTitle>
            </ModalIcon>

            <StyledInput
             placeholder="Add allergen"
             placeholderTextColor={colors.alternative}
             selectionColor={colors.secondary}
             onChangeText={(text) => setAllergenInputValue(text)}
             value={allergenInputValue}
             autoFocus={true}
             onSubmitEditing={handleSubmit}/>

              <ModalActionGroup>
              <ModalAction onPress={handleCloseModal} color={colors.primary}>
                <AntDesign name="close" size={28} color={colors.tertiary} />
              </ModalAction>
              <ModalAction onPress={handleSubmit} color={colors.tertiary}>
                <AntDesign name="check" size={28} color={colors.secondary} />
              </ModalAction>
            </ModalActionGroup>
            </ModalView>
            </ModalContainer>
            </Modal>
           
        </>
    );
}

export default InputModal;