import { Pressable, StyleSheet, Text, View } from "react-native"

const ItemList = (props) => {

    const { data, onDelete, onComplete } = props;

    return (
        <View style={ styles.viewContent }>
            <View style={ styles.viewItem }>
                <View style={ styles.textView }>
                    <Text
                        style={ styles.text }
                    >{ data.item.value }</Text>
                </View>
                <View style={ styles.buttonView }>
                {
                    !data.item.complete ?
                        <Pressable 
                            style={ [ styles.button, styles.buttonComplete ] }
                            onPress={ () => onComplete(data.item) } 
                        >
                            <Text style={ styles.buttonText }>OK</Text>
                        </Pressable> : null
                }
                </View>
                <View style={ styles.buttonView }>
                    <Pressable 
                        style={ [ styles.button, styles.buttonDelete ] }
                        onPress={ () => onDelete(data.item) } 
                    >
                        <Text style={ styles.buttonText }>X</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContent: {
        width: "100%",
    },
    viewItem: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
    },
    textView: {
        flex: 8
    }, 
    text: {
        padding: 5
    },
    button: {
        borderRadius: 5,
        padding: 5,
        elevation: 2 
    },
    buttonView: {
        flex: 2,
    },
    buttonComplete: {
        backgroundColor: "#3d9970",
    },
    buttonDelete: {
        backgroundColor: "#dc3545",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }, 
})

export default ItemList;