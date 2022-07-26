import React, { useState, useEffect } from 'react';
import Form from '../../componants/form/Form';
import { Box, Grid } from "@mui/material";
import Universties from '../../componants/univiersty/Universties';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getData } from '../../actions/unies';
import Navbar from '../../componants/navbar/Navbar';
function Home() {
    const dispatch = useDispatch();
    const [currentUniId, setCurrentUniId] = useState(-1)
    const [univiersty, setUniviersty] = useState({
        name: "",
        alpha_two_code: "",
        country: "",
        state_province: "",
        web_pages: [],
        domains: []


    })
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    const state = useSelector((state) => state.data);





    useEffect(() => {
        dispatch(getData());
        if (state.error) {

            toast.error(state.error, toastOptions);

        }

        console.log(univiersty)

    }, [dispatch]);
    useEffect(() => {

    }, [univiersty, currentUniId]);


    return (
        <>
            <Navbar />
            {
                state.loading ? <div className="home-con">
                    <img src='./assets/loader.gif' alt="loader" className="loader" />

                </div>
                    : <Box className="task-Maincontainer">
                        <Grid container>
                            <Grid xs={12} sm={12} md={5} lg={7} item>
                                {
                                    <Universties setCurrentUniId={setCurrentUniId} setUniviersty={setUniviersty} className="task-unis" />
                                }
                            </Grid>
                            <Grid xs={12} sm={12} md={5} lg={5} item>
                                {

                                    <Form setCurrentUniId={setCurrentUniId} currentUniId={currentUniId} univiersty={univiersty} setUniviersty={setUniviersty} />
                                }
                            </Grid>
                        </Grid>
                    </Box>

            }
            <ToastContainer />
        </>
    )
}

export default Home