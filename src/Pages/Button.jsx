import React from "react";



const Button = ({innertext, className, handleClick, dataaos}) => {
  return (
    <div>
        <button dataaos={dataaos} onClick={handleClick} className={className}>
            {innertext}
            
        </button>
    </div>
  )
}

export default Button