import React from 'react';
import HeaderBar from './component/HeaderBar'
import BannerSection from './component/BannerSection'

const App = () => {
    return (
        <React.Fragment>
            <HeaderBar/>
            <BannerSection/>
            <BannerSection/>
        </React.Fragment>
    )
}

export default App;