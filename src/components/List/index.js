import { FlatList, StyleSheet, View } from "react-native" 
import ItemList from './ItemList'

const index = (props) => {
    const { data, onDelete, onComplete } = props

    const renderItem = (data) => {
        return (
            <ItemList
                style={ styles.itemlist }
                data={ data }
                onDelete={ onDelete }
                onComplete={ onComplete }
            ></ItemList>
        )
    }     

    const ItemSeparator = () => <View style={{
        height: 2,
        width: "100%",
        backgroundColor: "#eeeeee",
      }} />    

    return (
        <View
            style={ styles.viewContainer }>
            <FlatList
                style={ styles.flatlist }
                data={ data }
                renderItem={ renderItem }
                keyExtractor={ (item) => item.id }
                ItemSeparatorComponent={ ItemSeparator }
            >

            </FlatList>
        </View>
    )

}

const styles = StyleSheet.create({
    viewContainer: {
        width: "100%",
        paddingTop: 10,
    },
    flatlist: {
        width: "100%",
        backgroundColor: "#ffffff"
    },
})

export default index