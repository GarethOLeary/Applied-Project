import React, { useState, useEffect, useContext } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import _ from 'lodash'
import { useIsFocused } from '@react-navigation/native'

export default function Scanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const isFocused = useIsFocused()

  // permissions
  useEffect(() => {
    ;(async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  // to stop scanning multiple times
  const _debouncedHandleBarCodeRead = _.debounce(
    (data) => {
      handleBarCodeScanned(data)
    },
    3000,
    { leading: true, trailing: false },
  )

  // method to fetch data from scan
  const handleBarCodeScanned = ({ data }) => {
    // set scanned to true
    setScanned(true)

    fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
      .then((response) => response.json())
      .then((responseJson) => {
        // navigate to the results page with the data from the scanned item
        navigation.navigate('Results', { product: responseJson.product })
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
        setScanned(false)
      })
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  if (isFocused) {
    return (
      <>
        <View style={styles.container}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : _debouncedHandleBarCodeRead}
            style={StyleSheet.absoluteFillObject}
          >
            <View style={styles.focus} />
          </BarCodeScanner>
          {/*{scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}*/}
        </View>
      </>
    )
  } else {
    return <View />
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  focus: {
    width: 300,
    height: 200,
    borderStyle: 'solid',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 3,
    position: 'absolute',
    top: '35%',
    left: '15%',
  },
})
