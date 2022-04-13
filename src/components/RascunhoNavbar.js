import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    constructor(props){
    super(props)

    this.state = {
        sign: false,
        login: false,
        }
    }

    onOpenModalSignup = () => {
        this.setState({ sign: true });
    };

    onOpenModalLogin = () => {
        this.setState({ login: true });
    };

    onCloseModalSignup = () => {
        this.setState({ sign: false });
    };
    
    onCloseModalLogin = () => {
        this.setState({ login: false });
    };

    render() {
        const { login, sign } = this.state;
        return (
            <>
                <nav>
                <NavLink to={'/'} id='signup' onClick={this.onOpenModalSignup} style={{textDecoration: "none"}}>Signup</NavLink>
                <NavLink to={'/'} id='login' onClick={this.onOpenModalLogin} style={{textDecoration: "none"}}>Login</NavLink>
                </nav>








{/* 
                <Modal open={sign} onClose={this.onCloseModalSignup}>
                    <div className='formPopUp'> 
                        <form className='form'>
                            <input type="text" name="name" id="name" placeholder="Your name here" required="true"/>                            
                            <input type="email" name="email" placeholder="E-mail" required="true" />
                            <input type="password" name="pass" placeholder="Password" required="true"  />
                            <input id="sign_up" type="button" value="SignUp"/>
                        </form>
                    </div>
                </Modal>

                <Modal open={login} onClose={this.onCloseModalclose}>
                    <div className='formPopUp'> 
                        <form  className='form'>
                            <input type="email" name="email" placeholder="E-mail" required="true" autocomplete="off" aria-required="true" />
                            <input type="password" name="pass" placeholder="Password" required="true" autocomplete="off" aria-required="true" />
                            <input id="login" type="button" value="Login"/>
                        </form>
                    </div>
                </Modal> */}
            </>
        );
    };
  


};

export default Navbar;