import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Button} from "react-bootstrap";

const Detail = ({origin}) => {
    const {id} = useParams();
    const location = useLocation();
    const locationTarget = location.pathname
    const isLocation = location.pathname.includes(locationTarget) ? locationTarget : undefined
    const navigate = useNavigate();

    const [detail, setDetail] = useState({});


    // 현재 경로 확인 후 true,false로 구별해준다.
    // console.log("------------------------",location.pathname.includes("tv"))


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
    },[])

    return (
        <div>
            <Button onClick={() => navigate(-1)}>뒤로가기</Button>
            <br/>
            <img src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`} alt=""/>
            <h1>{detail.title ? detail.title : detail.name}</h1>
            <h3>{detail.overview}</h3>
            <h3>출시회사</h3>
            {detail.production_companies?.map((company, index) => (
                <h4>{company.name}</h4>
            ))}
            <h3>출시국가</h3>
            {
                detail.production_countries?.map((country, index) => (
                    <h4>{country.name}</h4>
                ))
            }
        </div>
    );
};

export default Detail;