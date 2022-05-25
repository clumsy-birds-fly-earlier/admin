import React, { useEffect } from 'react'

import axios from 'axios'

export default  function App () {
    useEffect(() => {
        axios.get('/api/test').then(console.log, console.warn)
    }, [])
    return (
        <div>
            app2111222
        </div>
    )
}
