import React, { useContext } from 'react'
import { ThemeContext, CHANGE_THEME } from '../../store/theme'

const Switch: React.FC = () => {
    const { dispatch } = useContext(ThemeContext)

    return (
        <section>
            <button 
                onClick={() => {
                    dispatch({ type: CHANGE_THEME, theme: "Change One" });
                }}>
                我是改变状态1
            </button>
            <button
                onClick={() => {
                    dispatch({ type: CHANGE_THEME, theme: "Change Two" });
                }}>
                我是改变状态2
            </button>
        </section>
    )
}

export default Switch;