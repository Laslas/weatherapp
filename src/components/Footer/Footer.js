import React from 'react'
import './footer.css'
import Name from '../Name/Name'
import PageTitleSmall from '../PageTitleSmall/PageTitleSmall'
import Social from '../Social/Social'



const Footer = () => {
    return (
        <footer className="footer">
            <div className=" footer-div">
                <Name type="secondary" />
                <div className="footer-text">
                    <PageTitleSmall text="Get in touch" type="footerBold " />
                    <PageTitleSmall text="bunzy@myself.com" type="footer" />
                </div>
                <div className="footer-text">
                    <PageTitleSmall text="Locations" type="footerBold " />
                    <PageTitleSmall text="Helsinki - Espoo" type="footer" />
                </div>

                <div className="footer-social">
                    <Social type="secondary" />
                </div>

            </div>
        </footer>
    )
}

export default Footer