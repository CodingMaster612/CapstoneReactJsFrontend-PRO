import React from 'react'
import '../../css/loading-spinner.css'

function LoadingSpinner() {
    return (
        <div className="newtons-cradle">
            <div className="newtons-cradle__dot"></div>
            <div className="newtons-cradle__dot"></div>
            <div className="newtons-cradle__dot"></div>
            <div className="newtons-cradle__dot"></div>
        </div>
    )
}

export default LoadingSpinner