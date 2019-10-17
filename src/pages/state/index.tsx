import React, { useContext } from 'react'
import { ThemeContext } from '../../store/theme'

const State: React.FC = () => {
    const { state } = useContext(ThemeContext)

    return (
        <div>{state.theme}</div>
    )
}

export default State;