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
function Unvierty({ unvierty, index, setUniviersty, setCurrentUniId }) {

    const dispatch = useDispatch();
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const hendelEdit = () => {
        setCurrentUniId(index);
        setUniviersty(unvierty);
    }
    let subtitle;

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }
    return (
        <>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Card unvierty={unvierty} />
            </Modal>

            <div className="uni-card uni-fc-h " id="card">
                <div className=" uni-ml-10 uni-flex-end">
                    <ModeEditOutlineRoundedIcon className="nui-click" onClick={hendelEdit} />
                    <DeleteRoundedIcon className="nui-click" onClick={() => dispatch(removeData(index))} />

                </div>
                <div className="nui-click" onClick={openModal}>

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
        </>
    )
}

export default Unvierty