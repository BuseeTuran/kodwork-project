import React from "react";
import { View, Text, FlatList } from "react-native";

import styles from "./Jobs.style";
import JobCard from "../../components/JobCard";

import config from "../../config";
import useFetch from "../../hooks/useFetch";

import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Jobs = ({navigation}) => {
    const {data, loading, error} = useFetch(config.API_URL);

    const renderJob = ({item}) => <JobCard job={item} onSelect={() => handleJobSelect (item.id)} />

    const handleJobSelect = id => {
        navigation.navigate("Detail" , {id});
    }

    if(loading) {
        return <Loading/>
    }
    if(error) {
        return <Error/>
    }

    return (
        <View style={styles.container}>
            <FlatList data={data.results} renderItem={renderJob} />
        </View>
    );
}

export default Jobs