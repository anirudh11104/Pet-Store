import React, { useState } from "react";
import Chinchilla1 from "./Images/Chinchillas/Chinchilla1.jpg";
import Chinchilla2 from "./Images/Chinchillas/Chinchilla2.jpg";
import Chinchilla3 from "./Images/Chinchillas/Chinchilla3.jpg";
import Chinchilla4 from "./Images/Chinchillas/Chinchilla4.jpg";
import Chinchilla5 from "./Images/Chinchillas/Chinchilla5.jpg";
import Chinchilla6 from "./Images/Chinchillas/Chinchilla6.jpg";
import Chinchilla7 from "./Images/Chinchillas/Chinchilla7.jpg";

export const ChinchillaData = [
    { id: 1, name: "Gray Chinchilla", price: 10, image: Chinchilla1 },
    { id: 2, name: "White Chinchilla", price: 10, image: Chinchilla2 },
    { id: 3, name: "Ebony Chinchilla", price: 10, image: Chinchilla3 },
    { id: 4, name: "Beige Chinchilla", price: 10, image: Chinchilla4 },
    { id: 5, name: "Mosaic Chinchilla", price: 10, image: Chinchilla5 },
    { id: 6, name: "Gold Bar", price: 10, image: Chinchilla6 },
    { id: 7, name: "Angora Chinchilla", price: 10, image: Chinchilla7 },
];

export default function Chinchilla({ addToCart }) {
    const [userInput, setUserInput] = useState("");

    // State for storing Chinchilla quantities
    const [ChinchillaCounts, setChinchillaCounts] = useState(
        ChinchillaData.reduce((acc, Chinchilla) => {
            acc[Chinchilla.id] = { male: 0, female: 0 };
            return acc;
        }, {})
    );

    // Update quantity function
    const updateCount = (id, gender, value) => {
        setChinchillaCounts(prevCounts => ({
            ...prevCounts,
            [id]: {
                ...prevCounts[id],
                [gender]: Math.max(0, prevCounts[id][gender] + value)
            }
        }));
    };

    // Filter the data based on user input
    const filteredData = ChinchillaData.filter((Chinchilla) =>
        Chinchilla.name.toLowerCase().includes(userInput.toLowerCase())
    );

    return (
        <div>
            <input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                type="text"
                placeholder="Search pets"
            />
            <div>
                {filteredData.length > 0 ? (
                    filteredData.map((Chinchilla) => {
                        const totalPrice =
                            Chinchilla.price * (ChinchillaCounts[Chinchilla.id].male + ChinchillaCounts[Chinchilla.id].female);
                        return (
                            <div className="gallery" key={Chinchilla.id}>
                                <div>
                                    <img src={Chinchilla.image} alt={Chinchilla.name} />
                                </div>
                                <div className="desc">{Chinchilla.name} (${Chinchilla.price})</div>
                                <div className="desc">Total: ${totalPrice}</div>
                                <div className="desc">
                                    <div className="quantity-controls">
                                    <span style={{ marginRight: "20px" }}>
                                        M
                                        <button onClick={() => updateCount(Chinchilla.id, "male", -1)}>
                                            -
                                        </button>
                                        {ChinchillaCounts[Chinchilla.id].male}
                                        <button onClick={() => updateCount(Chinchilla.id, "male", 1)}>
                                            +
                                        </button>
                                    </span>
                                    <span>
                                        F
                                        <button onClick={() => updateCount(Chinchilla.id, "female", -1)}>
                                            -
                                        </button>
                                        {ChinchillaCounts[Chinchilla.id].female}
                                        <button onClick={() => updateCount(Chinchilla.id, "female", 1)}>
                                            +
                                        </button>
                                    </span>
                                    </div>
                                </div>
                                <div className="desc">
                                    {ChinchillaCounts[Chinchilla.id].male !== 0 || ChinchillaCounts[Chinchilla.id].female !== 0 ? (
                                        <button className="add-to-cart-btn" onClick={() => addToCart(Chinchilla, ChinchillaCounts[Chinchilla.id].male, ChinchillaCounts[Chinchilla.id].female)}>
                                            Add to cart
                                        </button>
                                    ) : (
                                        <div style={{ height: "30px" }}></div> // Keeps space to avoid layout shift
                                    )}
                                </div>


                            </div>
                        );
                    })
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
}
