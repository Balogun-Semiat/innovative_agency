import React from "react";



const ButtonNew = ({innertext, className, handleClick, dataaos}) => {
  return (
    <div>
        <button dataaos={dataaos} onClick={handleClick} className={className}>
            {innertext}
            
        </button>
    </div>
  )
}

export default ButtonNew