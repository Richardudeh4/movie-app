import { stripBaseUrl } from "expo-router/build/fork/getStateFromPath";
import { Dimensions, FlatList, StyleSheet, useWindowDimensions, View } from "react-native"

export const Carousel = ({data, renderItem}) => {
    const {width}  = Dimensions.get("window");
    console.log(data);
    return (
        <View style={styles.CarouselContainer}>
            <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item => item.id.toString())}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width*0.75}
            snapToAlignment="start"
            decelerationRate="fast"
            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    CarouselContainer: {
        paddingVertical:10,
    }
})