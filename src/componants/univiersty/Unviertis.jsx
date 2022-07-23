import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../actions/countries';
import Unvierty from './Unvierty'
import './styles.css'
function Unviertis() {
    const dispatch = useDispatch();

    const countries = useSelector((state) => state.countries);

    useEffect(() => {
        dispatch(getData());
        console.log("countries", countries.length);

    }, [dispatch]);
    return (
        countries.map((unvierty, index) => <Unvierty key={index} unvierty={unvierty} />)
    )
}

export default Unviertis