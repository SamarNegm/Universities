import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../actions/unies';
import Unvierty from './Unvierty'
import './styles.css'
function Unviertis({ setUniviersty, setUnivierstyId, setIsAdding }) {
    const data = useSelector((state) => state.data.data);
    return (
        <>
            {
                data.map((unvierty, index) => <Unvierty setIsAdding={setIsAdding} setUniviersty={setUniviersty} setUnivierstyId={setUnivierstyId} key={index} unvierty={unvierty} index={index} />)

            }


        </>


    )
}

export default Unviertis