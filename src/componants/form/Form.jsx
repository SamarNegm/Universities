import React from 'react'
import { Box, Grid } from "@mui/material";

import "./styles.css";
import FormMain from './FormMain';
function Form({ univiersty, setUniviersty, currentUniId, setCurrentUniId }) {
    return (
        <>


            {
                <FormMain currentUniId={currentUniId} setCurrentUniId={setCurrentUniId} univiersty={univiersty} setUniviersty={setUniviersty} />
            }

        </>
    )
}

export default Form