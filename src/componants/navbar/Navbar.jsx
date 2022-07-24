import React from 'react'
import { InputBase } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './styles.css';
function Navbar() {
    return (
        <div className="nav">
            <div className="nav-title">
                <h2>

                    Unvierties Task
                </h2>
            </div>

            <div className="nav-display-flex">
                <div className="nav-abs-con">
                    <SearchOutlinedIcon className="nav-icon" />
                    <input className="nav-input" placeholder="Search"></input>
                </div>

            </div>
        </div>
    )
}

export default Navbar