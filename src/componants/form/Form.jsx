import React from 'react'
import { Box, Grid } from "@mui/material";

import "./styles.css";
import FormMain from './FormMain';
function Form() {
    return (
        <>
            {/* <NavBar backgroundWhite /> */}
            {/* <VerificationProcessNav current={"postJob"} /> */}
            <Box className="post-job-Maincontainer">
                <Grid container>
                    <Grid xs={12} sm={12} md={9} lg={6} item>
                        {
                            // showModal ? <Modal fileArray={fileArray} setShowModal={setShowModal} showModal={showModal} /> :
                            <FormMain />
                        }
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Form