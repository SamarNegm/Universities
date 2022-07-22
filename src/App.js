import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getData } from './actions/countries';
function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("rerendering...");
    dispatch(getData());
  }, [currentId, dispatch]);
  return (
    <></>


  );
}

export default App;
