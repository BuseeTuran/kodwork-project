import {StyleSheet } from "react-native";

export default StyleSheet.create ({
    container: {
        flex: 1,
        margin: 5
    },
    upper_container: {
        borderWidth: 1,
        padding:5,
        borderColor: '#dcdcdc',
        backgroundColor: '#f5f5f5'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#708090',
    },
    heading: {
        color: '#EF5350',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 5
    },
    location: {
        color: '#708090'
    },
    level: {
        color: '#708090',
    },
    caption: {
        color: '#708090',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center' ,
        marginTop: 15,
    },
    detail: {
        backgroundColor: 'white',
        borderWidth: 1,
        padding: 1,
        borderColor: '#dcdcdc',
        paddingHorizontal: 2
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 15,
        marginBottom: 15,
    }
})