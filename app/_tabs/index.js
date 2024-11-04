import { Dimensions, StyleSheet, Text, View } from "react-native"
import { Carousel } from "../components/Carousel"
import MovieCard from "../components/MovieCard"
 

const sampleData = [
    {id: '1', title: 'Inception', poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', vote_average: 8.8},
    {id: '2', title: 'Inception', poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', vote_average: 8.8},
    {id:'3', title: 'Inception', poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', vote_average: 8.8},
    {id: '4', title: 'Inception', poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', vote_average: 8.8},
    {id: '5', title: 'Inception', poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', vote_average: 8.8},
    {id: '6', title: 'Inception', poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', vote_average: 8.8},
    {id:'7', title: 'Inception', poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', vote_average: 8.8},
    {id:'8', title: 'Inception', poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', vote_average: 8.8},
  
]

const Home = () => {

    const renderItem = ({item}) => (
        <MovieCard 
        movie={item}
        onPress={() => console.log(`pressed card${item.title}`)}
         />
     )
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>richardudeh</Text>
            <Carousel data={sampleData} renderItem={renderItem}/>
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        padding:16,
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom:20,
    },
   
})