import React from 'react';
import { Image, StyleSheet, Text, View, FlatList } from 'react-native';
import {
     StyledContainer
} from '../components/Styles';
import NotFound from '../components/NotFound'
import {MatchAllergens} from '../components/AllergenMatch'
import ListResultsItems from '../components/ListResultsItems'
import {Icon} from 'react-native-elements';

const Results = ({ route }) => {
    if (route.params.product === undefined) {
        return (
            <NotFound />
          )
       } 
        if (route.params.product.ingredients_text === undefined) {
            return(
                
            <View style={{flex: 1,backgroundColor: '#ffa31a'}}>
                <Icon name="question" type="antdesign"  size={200} color="#fff"/>
                <Text>Sorry, no ingredients found for {route.params.product.product_name} </Text>
                                   
                                </View>)}
        else {
        let allergenMatches = MatchAllergens(global.allergenData, route.params.product.ingredients_text);   
        
         if(allergenMatches.length > 0){
        console.log(`Allergens found: ${allergenMatches}`)
        return(
            <View style={{flex: 1,backgroundColor: '#ff3300'}}>
                <View>
                            <Icon name="warning" type="entypo"  size={200} color="#fff"/>
                        </View>
            <View>
                <Text>{route.params.product.product_name} contains the following allergens:</Text>
                <FlatList data={allergenMatches}
                renderItem={({item, index}) => <ListResultsItems item={item} key={index}></ListResultsItems>}
                keyExtractor={(item,index) => index.toString()}
                ></FlatList>
            </View>
            </View>
        )

        }  else {
            
            console.log(`No allergens found`)
            return(
                <View style={{flex: 1,backgroundColor: '#008000'}}>
                    <View >
                            <Icon name="check" type="entypo"  size={200} color="#fff"/>
                        </View>
            <View>
                                <Text>No allergens found for {route.params.product.product_name}</Text>
                            </View>
                            </View>
            )}
}
      
   
};

const styles = StyleSheet.create({
    container: {
      
        
            flex: 1,
            flexDirection: 'column',
            padding: 10,
    
    },
    body: {
        flex: 1,
        alignItems: 'center',
       
        justifyContent: 'center',
    },
  });

export default Results; 



