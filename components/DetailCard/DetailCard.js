import React from "react";
import { View, Text, ScrollView, useWindowDimensions, Alert } from "react-native";

import styles from "./DetailCard.style";
import RenderHtml from "react-native-render-html";

import Button from "../Button";

import { useDispatch, useSelector } from "react-redux";

const DetailCard = ({detail}) => {
    const favJob = useSelector( s => s.favJobList )
    const subJob = useSelector(s => s.subJobList)
    const dispatch = useDispatch();

    const handleAddFav = () => {
        if (favJob.find(item => item.id === detail.id)) {
            Alert.alert("Error", "Job has already added the favorities");
        } else {
            dispatch({ type: "ADD_FAV" , payload: {detail} })
            Alert.alert("Successfully" , "Job is added the favorites")
        }
    }

    const handleAddSubmit = () => {
        if (subJob.find(item => item.id === detail.id)) {
            Alert.alert("Error", "Job has already added Submit")
        } else {
            dispatch({ type: "ADD_SUBMIT" , payload: {detail} })
            Alert.alert("Successfully" , "Job is added Submit")
        }
    }
    const {width} = useWindowDimensions();

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.upper_container}>
                    <Text style={styles.title}>{detail.name}</Text>   
                    <Text style={styles.heading}>Locations:
                        <Text style={styles.location}> {detail.locations[0].name} </Text>
                    </Text>
                    <Text style={styles.heading}>Job Level:
                        <Text style={styles.level}> {detail.levels[0].name} </Text>
                    </Text>
                    <Text style={styles.caption}>Job Detail</Text>
                </View>
                <View style={styles.detail}>
                    <RenderHtml source={{html: detail.contents}} contentWidth={width}/>
                </View>
                <View style={styles.button}>
                    <Button text='Submit' onPress={handleAddSubmit}  iconName='logout' />
                    <Button text='Favorite Job' onPress={handleAddFav}  iconName='heart' />
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailCard