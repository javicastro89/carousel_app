import React, { useEffect, useState } from 'react';
import { styles } from './styles'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function App() {

  const [blocks, setBlocks] = useState([])
  const [page, setPage] = useState(0)

  const getImages = () => {

    axios('https://mini-carousel-app.herokuapp.com/images')
      .then(result => {
        setBlocks(() => result.data)
      })
      .catch(error => console.error(error))
  }

  const handleBttn = (event) => {

    if (event === 'next') setPage((prev) => prev += 1)
    else setPage((prev) => prev -= 1)

  }

  const storeData = async (value) => {

    try {
      await AsyncStorage.setItem('page', value.toString())

    } catch (error) {
      console.error(error)
    }
  }

  const getData = async () => {

    try {
      const result = await AsyncStorage.getItem('page')
      if (result) setPage(parseInt(result))

    } catch (error) {
      console.error(error)

    }
  }

  useEffect(() => {

    if (page !== 0) storeData(page)
  }, [page])

  useEffect(() => {

    getImages()
    getData()

  }, [])

  return (
    <View style={styles.container}>

      {blocks.length > 0 ?
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.textStyle}>{blocks[page].title}</Text>
          </View>
          <View style={styles.imageContainer}>
            {blocks[page].images.map((element) =>

              <Image
                key={element}
                style={styles.imageStyle}
                source={{ uri: element }}
              />

            )}
          </View>

        </View>
        : <Text style={styles.textStyle}>Loading...</Text>}

      <View style={styles.buttons}>

        <TouchableOpacity
          onPress={() => handleBttn('prev')}
          style={page === 0 ? styles.bttnDisable : styles.bttStyle}
          disabled={page === 0}
        >
          <Text style={page === 0 ? styles.textBttnDisable : styles.textBttn}>{'<'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleBttn('next')}
          style={blocks.length > 0 && page === blocks.length - 1 ? styles.bttnDisable : styles.bttStyle}
          disabled={blocks.length > 0 ? page === blocks.length - 1 : false}
        >
          <Text style={blocks.length > 0 && page === blocks.length - 1 ? styles.textBttnDisable : styles.textBttn}>{'>'}</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

