import React, {useState, useEffect} from 'react'
import { View, ScrollView } from 'react-native'
import SampleComponent from './pages/SampleComponent'
import StylingComponent from './pages/StylingComponent'
import FlexBox from './pages/FlexBox'
import Position from './pages/Position'
import PropsDinamis from './pages/PropsDinamis'
import StateDinamis from './pages/StateDinamis'

// Error
// 1 Devtool belum install, tambah dependesi "react-devtools-core": "^4.14.0",
// "resolutions": {
//   "react-devtools-core": "4.14.0"
// }

// Functionol Component
export default function App() {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(false)
    }, 6000)
  }, [])
  
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingComponent /> */}

        {/* jika isShow nya true maka munculkan flexbox */}
        {/* { isShow && <FlexBox />}  */}

        {/* <FlexBox /> */}

        {/* <Position /> */}

        {/* <PropsDinamis /> */}

        <StateDinamis />
      </ScrollView>
    </View>
  )
}