import React from 'react';
import FixedHeaderBar from './component/FixedHeaderBar'
import BannerSection from './component/BannerSection'
import ButtonWrapper from './component/ButtonWrapper'
import MainContents from './component/MainContents'

const App = () => {
    return (
        <React.Fragment>
            <FixedHeaderBar/>
            <BannerSection/>
            <ButtonWrapper/>
            <MainContents/>
        </React.Fragment>
    )
}

export default App;