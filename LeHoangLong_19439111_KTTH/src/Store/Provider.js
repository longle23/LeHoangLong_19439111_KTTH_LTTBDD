import { useState } from "react";
import KemContext from "./Context";
import candy from "../../assets/kem/icecandy.png";
import cake from "../../assets/kem/icepancake.png";

function Provider({ children }) {
    const kems = [
        { id: 1, name: "Creamy Ice", type: 'Chocolate Scream', price: '$10.00', image: candy },
        { id: 2, name: "Creamy Ice", type: 'Vanila Ice', price: '$10.00', image: cake },
    ];

    const [kemCart, setKemCart] = useState([]);

    return (
        <KemContext.Provider value={{ kems, kemCart, setKemCart }}>
            {children}
        </KemContext.Provider>
    );
}

export default Provider;
