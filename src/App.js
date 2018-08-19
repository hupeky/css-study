import React, {Component} from 'react'
import Radium, {StyleRoot} from 'radium'

//import Selectors from './component/Selectors/Selectors'
//import Layout3 from './component/Layout3/Layout3'
//import FlexBoxBasicNav from './component/FlexBoxBasicNav/FlexBoxBasicNav'
import FlexBoxColomns from './component/FlexBoxColomns/FlexBoxColomns'

class App extends Component {
    state = {
    }
    render () {
        return (
            <StyleRoot>
                <FlexBoxColomns />
            </StyleRoot>
        )
    }
}

export default Radium( App )
