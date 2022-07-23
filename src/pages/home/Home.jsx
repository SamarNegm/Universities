import React, { useState, useEffect } from 'react';
import Form from '../../componants/form/Form';
import { Box, Grid } from "@mui/material";
import Unviertis from '../../componants/univiersty/Unviertis';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../actions/unies';
function Home() {
    const dispatch = useDispatch();

    const loading = useSelector((state) => state.data.loading);
    useEffect(() => {
        dispatch(getData());

    }, [dispatch]);
    return (
        <>
            {/* <NavBar backgroundWhite /> */}
            {/* <VerificationProcessNav current={"postJob"} /> */}
            {
                loading ? <div className="home-con">
                    <img src='./assets/loader.gif' alt="loader" className="loader" />

                </div>
                    : <Box className="task-Maincontainer">
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
            }
        </>
    )
}

export default Home