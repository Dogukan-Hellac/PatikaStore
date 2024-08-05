import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ListItem({ title, price, imgURL, inStock }) {
    return (
        <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: imgURL }}
                />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
                <Text style={styles.stock}>{inStock ? null : 'STOKTA YOK'}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dcdcdc',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        resizeMode: 'contain'
    },
    textContainer: {
        alignItems: 'flex-start',
        width:'100%'
    },
    title: {
        fontWeight: 'bold',
    },
    price: {
        color: 'gray',
        fontWeight: 'bold'
    },
    stock: {
        fontWeight: 'bold',
        color: 'red'
    },
})