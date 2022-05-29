import React, { useEffect } from 'react'
import styled from 'styled-components'

import axios from 'axios'

const Warp = styled.div`
    color: #000;
    font-size: 24px;
`

export default  function App () {
    useEffect(() => {
        axios.get('/api/test').then(console.log, console.warn)
    }, [])
    return (
        <Warp>
            1
        </Warp>
    )
}
