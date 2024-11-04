import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Card, Paragraph, Title } from 'react-native-paper'

const MovieCard = ({movie, onPress}) => {
    console.log(movie);
  return (
  <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
        <View style={styles.shadowContainer}>
            <Card style={styles.card}>
                <Card.Cover
                 source={{url:`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}
                 style={styles.cover}
                />
             <Card.Content style={styles.content}>
                    <Title style={styles.title}>{movie.title}</Title>
                    <Paragraph style={styles.paragraph}>
                        Rating: {movie.vote_average}
                    </Paragraph>
             </Card.Content>
            </Card>
        </View>
  </TouchableOpacity>
  )
}

export default MovieCard

const styles = StyleSheet.create({
    cardContainer:{
        width:150,
        margin:8,
    },
    shadowContainer: {
        borderRadius: 8,
        overflow: "hidden",
        elevation: 3,

    },
    card: {
        flex:1,
        borderRadius:8,
        width: 150,
        height: 300,
    },
    cover: {
        width:'100%',
        heigth: 250,
    },
    content: {
        paddingVertical: 8,
    },
    title: {
        fontSize:16,
        fontWeight: "bold",
        textAlign: "center",
    },
    paragraph: {
        fontSize:14,
        color: 'grey',
        textAlign: 'center',
    }
})