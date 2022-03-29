import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'

const ModalCustom = (props) => {
    //console.log(props);
    const { option } = props

    if(!option) return null;
    if(!option.visible) return null;
    if(!option.onConfirm) return null;
    if(!option.onCancel) return null;

    const onCancel = option.onCancel;
    const onConfirm = option.onConfirm;
    const id = option.id;

    return (
        <Modal
            style={ styles.modal }
            animationType='slide'
            visible={ option.visible }
            >
            <View style={ styles.modalCenter }>
                <View style={ styles.modalView }>
                    <View style={ styles.modalTitle } >
                        <Text style={ styles.modalTitleText }
                        >{ option.title }</Text>
                    </View>
                    <View style={ styles.modelMessage } >
                        <Text style={ styles.modelMessageText } 
                        >{ option.message }</Text>
                    </View>
                    <View style={ styles.modalFooter } >
                        <Pressable 
                            style={ [ styles.button, styles.buttonCancel ] }
                            onPress={ () => onCancel(false) } 
                        >
                            <Text style={ styles.buttonText }>Cancelar</Text>
                        </Pressable>
                        <Pressable 
                            style={ [ styles.button, styles.buttonConfirm ] }
                            onPress={ () => onConfirm(id) } 
                        >
                            <Text style={styles.buttonText }>Confirmar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )    
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        width:'100%'
    },
    modalView: {    
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalTitle: {
        backgroundColor:'black',
        color:'white',
        width: "100%",
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalTitleText: {
        color:'white',
        fontSize: 20,
    },
    modelMessage: {
        height: 100,
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modelMessageText: {
        fontSize: 15,
    },
    modalFooter: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2        
    },
    buttonCancel: {
        backgroundColor: "#aaaaaa",
    },
    buttonConfirm: {
        backgroundColor: "#000",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },      
})

export default ModalCustom;