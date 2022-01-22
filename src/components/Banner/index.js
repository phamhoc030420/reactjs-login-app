import React from "react";
import './Banner.scss'
Banner.defaulProps = {
    title: '',
    backgroundUrl: ''
}
function Banner(props) {
    const { title, backgroundUrl } = props;
    const bannerBackground = backgroundUrl ?
        { backgroundImage: `url(${backgroundUrl})` } : {};
    return (
        <>

            <section className="banner" style={bannerBackground}>
                <h1 className="banner_title">{title}</h1>
            </section>
        </>
    )
}
export default Banner;