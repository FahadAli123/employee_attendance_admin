import React from 'react'
import circleloading from '../Assets/Images/circleloading.png';

const CustomButton = ({ loading, text, actionFuntion }) => {
    return (
        <div class="bg-[#212121] mt-5 p-3 w-full rounded-lg text-white align-center text-center cursor-pointer " onClick={actionFuntion}>
            {
                loading
                    ? <img src={circleloading} className="w-8 h-8 animate-spin m-auto" />
                    : <h3 class="font-bold text-[20px]">{text}</h3>
            }
        </div>
    )
}

export default CustomButton