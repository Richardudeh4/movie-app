import { StyleSheet, Text, View } from "react-native"

const  Movies = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.container}>richardudeh</Text>
        </View>
    )
}
export default Movies

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    }
})