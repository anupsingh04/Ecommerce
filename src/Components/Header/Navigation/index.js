
import Button from '@mui/material/Button';
import { HiMenu } from 'react-icons/hi';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navigation=()=>{

    const [isopenSidebarVal, setisopenSidebarVal] = useState(false);


    return(
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-3 navPart1'>
                        <div className='catWrapper'>
                            <Button className='allCatTab align-items-center' onClick={()=>setisopenSidebarVal(!isopenSidebarVal)}>
                                <span className='icon1 mr-2'><HiMenu /></span>
                                <span className='text'>ALL CATEGORIES </span>
                                <span className='icon2 ml-2'><FaAngleDown/></span>
                            </Button>

                            <div className={`sidebarNav ${isopenSidebarVal===true ? 'open':''}`}>
                                <ul>
                                    <li><Link to="/"><Button>Men</Button></Link></li>
                                    <li><Link to="/"><Button>Women</Button></Link></li>
                                    <li><Link to="/"><Button>Beauty</Button></Link></li>
                                    <li><Link to="/"><Button>watches</Button></Link></li>
                                    <li><Link to="/"><Button>kids</Button></Link></li>
                                    <li><Link to="/"><Button>gift</Button></Link></li>
                                    <li><Link to="/"><Button>Men</Button></Link></li>
                                    <li><Link to="/"><Button>Women</Button></Link></li>
                                    <li><Link to="/"><Button>Beauty</Button></Link></li>
                                    <li><Link to="/"><Button>watches</Button></Link></li>
                                    <li><Link to="/"><Button>kids</Button></Link></li>
                                    <li><Link to="/"><Button>gift</Button></Link></li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                    
                    <div className='col-sm-9 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link></li>

                            <li className='list-inline-item'>
                                <Link to="/"><Button>Men</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                </div>
                            </li>

                            <li className='list-inline-item'>
                                <Link to="/"><Button>Women</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                </div>
                            </li>


                            <li className='list-inline-item'>
                                <Link to="/"><Button>Beauty</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                </div>
                            </li>

                            <li className='list-inline-item'>
                                <Link to="/"><Button>Watches</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                </div>
                            </li>

                            <li className='list-inline-item'>
                                <Link to="/"><Button>Kids</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                </div>
                            </li>

                            <li className='list-inline-item'>
                                <Link to="/"><Button>Gift</Button></Link>
                            </li>

                            <li className='list-inline-item'>
                                <Link to="/"><Button>Blog</Button></Link>
                            </li>

                            <li className='list-inline-item'>
                                <Link to="/"><Button>Contact</Button></Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;

