import React from 'react'
import { Box, Grid } from "@mui/material";

import "./styles.css";
import FormMain from './FormMain';
function Form({ univiersty, setUniviersty }) {
    return (
        <>
            {/* <NavBar backgroundWhite /> */}
            {/* <VerificationProcessNav current={"postJob"} /> */}


            {/* // showModal ? <Modal fileArray={fileArray} setShowModal={setShowModal} showModal={showModal} /> : */}
            <FormMain univiersty={univiersty} setUniviersty={setUniviersty} />



        </>
    )
}

export default Form