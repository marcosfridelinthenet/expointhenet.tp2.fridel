import { Button, StyleSheet, View } from 'react-native';

import Modal from './src/components/ModalCustom'
import AddItem from './src/components/AddItem'
import List from './src/components/List'
import { useState } from 'react' 

export default function App() {

    const [ countItem, setCountItem ] = useState(0);
    const [ optionModal, setOptionModal ] = useState({});
    const [ itemList, setItemList ] = useState([]);
    
    const onHandlerDelete = (id) => {
        setItemList(items => items.filter(item => 
            item.id != id)
        );
        
        setOptionModal(); 
    }

    const onHandlerComplete = (id) => {
        setItemList(items => items.map((item) => {
              if (item.id === id) item.complete = true;
              return item;
            }
        ));

        setOptionModal(); 
    }

    const onHandlerAddItem = (textItem) => {
        setItemList(items => [
            ...items, 
            { id: countItem, value: textItem, complete: false }
        ])
        setCountItem(countItem + 1);
    }

    const showModalDelete = (item) => {
        showModal('Confirma', `¿Confirma que desea borrar ${item.value}?`, item.id, onHandlerDelete);
    }

    const showModalComplete = (item) => {
        showModal('Confirma', `¿Confirma que desea completar ${item.value}?`, item.id, onHandlerComplete);
    }

    const showModal = (title, message, id, onConfirm) => {
        setOptionModal({
            visible: true,
            title: title,
            message: message,
            id: id,
            onConfirm: onConfirm,
            onCancel: hideModal
        });
    }

    const hideModal = () => {
        setOptionModal();
    }

    return (
        <>
            <Modal
                option= { optionModal }
            ></Modal> 

            <View style={ styles.container } >
                  <AddItem
                      onAddItem={ onHandlerAddItem }
                  ></AddItem>
                  <List
                      data={ itemList }
                      onDelete={ showModalDelete }
                      onComplete={ showModalComplete }
                  ></List>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
});
