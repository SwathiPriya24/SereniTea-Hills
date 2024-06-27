
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from "react-icons/fa";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Link } from 'react-router-dom'
import { RiShoppingBag4Line } from "react-icons/ri";
function NavPage() {
    return (
        <div className="container px-0">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid className='py-2'>
                    <Navbar.Brand href="#">
                        <Link to='/'> LOGO</Link>
                    </Navbar.Brand>

                    <span className="d-flex navCartLeft">
                        <Nav.Link href="#action1" className='cart'>
                            <Link to="/Cart"> <RiShoppingBag4Line /> </Link>
                        </Nav.Link>
                        <Nav.Link href="#action1" className='cart'>
                            <Link to='/login'> <FaUserCircle /></Link>
                        </Nav.Link>
                        <Navbar.Toggle> <span className="menuIcon"><CgMenuLeftAlt /></span>
                        </Navbar.Toggle>
                    </span>

                    <Navbar.Collapse id="navbarScroll">

                        <Nav className="me-auto my-2 my-lg-0 navBarCenter" navbarScroll>
                            <Nav.Link href="#action1">
                                <Link to='/home'>  Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#action2">
                                <Link to='/shopnow'>  Shop Now</Link>
                            </Nav.Link>
                            <Nav.Link href="#action2">
                                <Link to='/ourteas'> Our Teas</Link>
                            </Nav.Link>
                            <Nav.Link href="#action2">
                                <Link to='/aboutus'> About Us</Link> </Nav.Link>
                            <Nav.Link href="#action2">
                                <Link to='/blog'> Blogs</Link></Nav.Link>
                            <Nav.Link href="#action2">
                                <Link to='/contact'> Contact</Link>
                            </Nav.Link>
                        </Nav>
                        <span className="d-flex navCartRight">
                            {/* <div className='cart'></div> */}
                            <Nav.Link href="#action1" className='cart'>
                                <Link to="/Cart"> <RiShoppingBag4Line /> </Link>
                            </Nav.Link>
                            <Nav.Link href="#action1" className='cart'>
                                <Link to='/login'> <FaUserCircle /></Link>
                            </Nav.Link>

                            <Navbar.Toggle aria-controls="navbarScroll" />
                        </span>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
}

export default NavPage;