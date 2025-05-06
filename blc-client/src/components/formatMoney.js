import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";


const FormatCurrency = (amount) => {
    const {currency} = useContext(ShopContext)
    
    return currency + " " + new Intl.NumberFormat('en-NG', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  export default FormatCurrency