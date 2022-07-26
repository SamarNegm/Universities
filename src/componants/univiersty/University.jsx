import React from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import { removeData } from '../../actions/unies';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import Card from './Card';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        border: 'none',
        backgroundColor: "fff",

    },
};
Modal.setAppElement(document.getElementById("root"));

function University({ university, index, setUniviersty, setCurrentUniId }) {

    const dispatch = useDispatch();
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const hendelEdit = () => {
        setCurrentUniId(index);
        setUniviersty(university);
    }
    let subtitle;

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }


    return (
        <>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Card university={university} />
            </Modal>

            <div className="uni-card uni-fc-h " id="card">
                <div className=" uni-ml-10 uni-flex-end">
                    <ModeEditOutlineRoundedIcon className="nui-click" onClick={hendelEdit} />
                    <DeleteRoundedIcon className="nui-click" onClick={() => dispatch(removeData(index))} />

                </div>
                <div className="nui-click" onClick={openModal}>

                    <h3>{university.name}</h3>
                    <div className="uni-flex uni-ml-10">
                        <p>{university.country}</p>
                        <p>{university.state_province}</p>
                        <p>{university.alpha_two_code}</p>



                    </div>
                    <hr className="uni-hr" />
                    <p className="uni-domains-p uni-ml-10 ">Domains</p>
                    <div className="uni-domains uni-fc-h">
                        {
                            university.domains.map((domain, i) => <p className="uni-ml-10 " key={i} >{domain}</p>)
                        }

                    </div>

                    <div className="uni-web uni-flex">
                        {
                            university.web_pages.map((domain, i) => <a className="uni-web-item" href={domain} key={i} >Web Page {i + 1}</a>)
                        }

                    </div>
                </div>

            </div>
        </>
    )
}

export default University