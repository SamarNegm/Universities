import React, { useState, useEffect } from 'react';
import Form from '../../componants/form/Form';
import { Box, Grid } from "@mui/material";
import Unviertis from '../../componants/univiersty/Unviertis';
import './styles.css';
function Home() {

    return (
        <>
            {/* <NavBar backgroundWhite /> */}
            {/* <VerificationProcessNav current={"postJob"} /> */}
            <Box className="task-Maincontainer">
                <Grid container>
                    <Grid xs={12} sm={12} md={5} lg={5} item>
                        {
                            // showModal ? <Modal fileArray={fileArray} setShowModal={setShowModal} showModal={showModal} /> :
                            <Unviertis />
                        }
                    </Grid>
                    <Grid xs={12} sm={12} md={5} lg={5} item>
                        {
                            // showModal ? <Modal fileArray={fileArray} setShowModal={setShowModal} showModal={showModal} /> :
                            <Form />
                        }
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Home