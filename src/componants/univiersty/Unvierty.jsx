import React from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import { removeData } from '../../actions/unies';
import { useDispatch } from 'react-redux';

function Unvierty({ unvierty, index, setUniviersty, setCurrentUniId }) {
    const dispatch = useDispatch();
    const hendelEdit = () => {
        setCurrentUniId(index);
        setUniviersty(unvierty);
    }

    return (
        <div className="uni-card uni-fc-h" onClick={() => console.log("Clicked")}>
            <div className=" uni-ml-10 uni-flex-end">
                <ModeEditOutlineRoundedIcon onClick={hendelEdit} />
                <DeleteRoundedIcon onClick={() => dispatch(removeData(index))} />

            </div>
            <div>

                <h3>{unvierty.name}</h3>
                <div className="uni-flex uni-ml-10">
                    <p>{unvierty.country}</p>
                    <p>{unvierty.state_province}</p>
                    <p>{unvierty.alpha_two_code}</p>



                </div>
                <hr className="uni-hr" />
                <p className="uni-domains-p uni-ml-10 ">Domains</p>
                <div className="uni-domains uni-fc-h">
                    {
                        unvierty.domains.map((domain, i) => <p className="uni-ml-10 " key={i} >{domain}</p>)
                    }

                </div>

                <div className="uni-web uni-flex">
                    {
                        unvierty.web_pages.map((domain, i) => <a className="uni-web-item" href={domain} key={i} >Web Page {i + 1}</a>)
                    }

                </div>
            </div>

        </div>
    )
}

export default Unvierty