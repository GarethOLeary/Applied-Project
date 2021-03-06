import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {
    
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
        <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../../assets/Food.jpg')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View 
            style={[styles.footer, {
               
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
            }]}>Allergy Scanner</Text>
            <Text style={styles.text}>Find out if your food is safe to eat.</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <LinearGradient
                    colors={['#3b4850', '#41474b']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
               </LinearGradient>
            </TouchableOpacity>
            </View>
            </Animatable.View>
            <StatusBar hidden />
      </View>
       
    );
};

export default Splash;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#344955'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo,
      borderRadius: 50
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      flexDirection: 'row',
      
      
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});

