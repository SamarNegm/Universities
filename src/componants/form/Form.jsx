import React from 'react'
import { Box, Grid } from "@mui/material";

import "./styles.css";
import FormMain from './FormMain';
function Form({ univiersty, setUniviersty, isAdding }) {
    return (
        <>


            {
                <FormMain isAdding={isAdding} univiersty={univiersty} setUniviersty={setUniviersty} />
            }

        </>
    )
}

export default Form