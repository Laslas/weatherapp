import React from 'react'
import './header.css'
import Navbar from '../Navbar/Navbar'
import PageTitleSmall from '../PageTitleSmall/PageTitleSmall'
import PageTitle from '../PageTitle/PageTitle'
import Button from '../Button/Button'

const Header = () => {


    return (
        <header className="header">
            <div className="container">
                <Navbar />
                <div className="header-content">
                    <PageTitleSmall text="Hi there, I'm Usun" type="black" />
                    <PageTitle text="Web Developer" type="black" />
                    <Button label="Get in touch" />
                </div>
            </div>
        </header>
    )


}



export default Header