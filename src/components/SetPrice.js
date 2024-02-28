import { useState } from "react"

const SetPrice = ({updatePrice}) =>{
    const [coursePrice,setCoursePrice] = useState(0);
    const updatePrice1 = (price) => {
        setCoursePrice(prevPrice=>prevPrice+price);
    };
}
export default SetPrice;