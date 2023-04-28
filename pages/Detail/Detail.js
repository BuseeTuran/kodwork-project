import React from "react";
import { View, Text } from "react-native";

import styles from "./Detail.style";
import DetailCard from "../../components/DetailCard";
import config from "../../config";
import useFetch from "../../hooks/useFetch";

import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Detail = ({route}) => {
    const {id} = route.params;
    const {data, loading, error} = useFetch(config.API_DETAIL_URL + id)

    if(loading) {
        return <Loading/>
    }
    if(error) {
        return <Error/>
    }

    return <DetailCard detail={data} />
}

export default Detail