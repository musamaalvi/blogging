import React, { useState } from 'react'

const useAppState = () => {
    const [Counter, setCounter] = useState<number>(0);

   
    return {Counter, setCounter}
}


export default useAppState;