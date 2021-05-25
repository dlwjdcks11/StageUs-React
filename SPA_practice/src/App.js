import React from 'react';
import HeaderBar from './component/HeaderBar'
import BannerSection from './component/BannerSection'
import ButtonWrapper from './component/ButtonWrapper'
import MainContents from './component/MainContents'

const App = () => {
    return (
        <React.Fragment>
            <HeaderBar/>
            <BannerSection/>
            <ButtonWrapper/>
            <MainContents/>
        </React.Fragment>
    )
}

export default App;