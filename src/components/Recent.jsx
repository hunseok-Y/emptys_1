import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";

const Recent = () => {

    const {id} = useParams()
    const location = useLocation()
    const locationTarget = location.pathname
    const isLocation = locationTarget.includes(locationTarget) ? locationTarget : undefined

    const [detail, setDetail] = useState({});

    const getDetail = async () => {
        try{
            const url = `https://api.themoviedb.org/3${isLocation}?language=en-US`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2NlMjljMjc2MzZmODY0OGM0YzlmNmMyNGQyYTNhOCIsIm5iZiI6MTc0NzU0OTY5Ni41NjMsInN1YiI6IjY4Mjk3ZTAwOWFiODFhZjUwNWY1NTVkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TjVbPql5Eg1poQRSZYmAFUyeCkoojguMPja6DCNsTXE'
                }
            };

            const {data, status} = await axios.get(url, options)
            console.log(data)
            if(status === 200) {
                setDetail(data);
            }

        } catch (e) {
            console.log(e.message);
        }
    }


    useEffect(() => {
        getDetail()
        let storegeIn = localStorage.getItem("location")
        storegeIn = JSON.parse(storegeIn)
        storegeIn.push(location)
        localStorage.setItem('location', JSON.stringify([]))

    },[])

    return (
        <>
            
        </>
    );
};

export default Recent;