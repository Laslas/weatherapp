import React from 'react'
import './pagetitlesmall.css'

const PageTitleSmall = (props) => {
    const pageTitle = `pageTitle-small-${props.type}`

    return (

        <p className={pageTitle}>{props.text}</p>
    )
}





export default PageTitleSmall