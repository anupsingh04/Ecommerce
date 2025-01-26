import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.webp';
import CountryDropdown from '../CountryDropdown';
import { IoSearch } from 'react-icons/io5';
import Button from '@mui/material/Button';
import { LuUserRound } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";




const Header = ()=>{
    return(
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay</p>
                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to="/"><img src={Logo} alt='logo' /></Link>
                            </div>

                            <div className='col-sm-10 d-flex align-items-center part2'>
                                <CountryDropdown/>
                        
                                {/* Header search starts here */}
                                <div className='headerSearch ml-3 mr-3'>
                                    <input type='text' placeholder='Search for products...'/>
                                    <Button><IoSearch/></Button>
                                </div>
                                {/* Header search ends here */}

                                <div className='part3 d-flex align-items-center ml-auto'>
                                    <Button className='circle mr-3'><LuUserRound /></Button>
                                    <div className='ml-auto cartTab d-flex align-items-center'>
                                        <span className='price'>$2.99</span>
                                        <div className='position-relative'>
                                            <Button className='circle ml-2'><FiShoppingCart /></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>9</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header;