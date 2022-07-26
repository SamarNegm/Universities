import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../actions/unies';
import University from './University'
import './styles.css'
function Universities({ setUniviersty, setUnivierstyId, setCurrentUniId }) {
    const data = useSelector((state) => state.data.data);
    return (
        <>
            {
                data.map((university, index) => <University setCurrentUniId={setCurrentUniId} setUniviersty={setUniviersty} setUnivierstyId={setUnivierstyId} key={index} university={university} index={index} />)

            }


        </>


    )
}

export default Universities