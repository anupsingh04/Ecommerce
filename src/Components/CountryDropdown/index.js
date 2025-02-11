import React from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoSearch } from 'react-icons/io5';
import { MdClose } from "react-icons/md";
import { useState } from 'react';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
    });


const CountryDropdown = () => {

    const [isOpenModal, setisOpenModal] = useState(false);

    return (
        <>
            <Button className="countryDrop" onClick={()=>setisOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>India</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>

            </Button>

            <Dialog open={isOpenModal} onClose={()=>setisOpenModal(false)}  className='locationModel' TransitionComponent={Transition}>

                <h4>Chose Your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className='close_' onClick={()=>setisOpenModal(false)}><MdClose/></Button>
                
                <div className='headerSearch w-100'>
                    <input type='text' placeholder='Search your area...' />
                    <Button><IoSearch /></Button>
                </div>

                <ul className='countryList mt-3'>
                    <li><Button onClick={()=>setisOpenModal(false)}>India</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>USA</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Germany</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Pakistan</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Nepal</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Bhutan</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>China</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Japan</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Indonesia</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>South Africa</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>India</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>USA</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Germany</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Pakistan</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Nepal</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Bhutan</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>China</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Japan</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Indonesia</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>South Africa</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>India</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>USA</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Germany</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Pakistan</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Nepal</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Bhutan</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>China</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Japan</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Indonesia</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>South Africa</Button></li>
                    

                </ul>

            </Dialog>
        </>

    )
}

export default CountryDropdown;