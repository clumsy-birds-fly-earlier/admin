import React, { useEffect } from 'react'

import axios from 'axios'

export default function App() {


    useEffect(() => {
        axios.get('/api/test').then(console.log, console.warn)
    }, [])
    return (
        <div>
            222222222222222222222222222222
            21333333333333333333333333
        </div>
    )
}
