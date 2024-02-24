import React, {useCallback, useMemo} from 'react';

import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai'; 


const Button = ({ movieId }) => {
    

return(
    <div 
    // onClick={toggleFavorites}
    className="
        cursor-pointer
        group/item
        w-6
        h-6
        lg:w-10
        lg:h-10
        border-white
        border-2
        rounded-full
        flex
        justify-center
        items-center
        transition
        hover:border-neutral-300
    ">
        <AiOutlinePlus className="text-white" size={25}/>
    </div>
)
}

export default Button;