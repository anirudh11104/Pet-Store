import React, { useState } from "react";
import guineapig1 from "./Images/Guinea Pigs/guineapig1.webp";
import guineapig2 from "./Images/Guinea Pigs/guineapig2.webp";
import guineapig3 from "./Images/Guinea Pigs/guineapig3.webp";

export const guineapigData = [
    { id: 1, name: "American Guinea", price: 10, image: guineapig1 },
    { id: 2, name: "White Crested", price: 10, image: guineapig2 },
    { id: 3, name: "Brazilian", price: 50, image: guineapig3 },
];

export default function Guineapig({ addToCart }) {
    const [userInput, setUserInput] = useState("");

    // State for storing guineapig quantities
    const [guineapigCounts, setguineapigCounts] = useState(
        guineapigData.reduce((acc, guineapig) => {
            acc[guineapig.id] = { male: 0, female: 0 };
            return acc;
        }, {})
    );

    // Update quantity function
    const updateCount = (id, gender, value) => {
        setguineapigCounts(prevCounts => ({
            ...prevCounts,
            [id]: {
                ...prevCounts[id],
                [gender]: Math.max(0, prevCounts[id][gender] + value)
            }
        }));
    };

    // Filter the data based on user input
    const filteredData = guineapigData.filter((guineapig) =>
        guineapig.name.toLowerCase().includes(userInput.toLowerCase())
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
                    filteredData.map((guineapig) => {
                        const totalPrice =
                            guineapig.price * (guineapigCounts[guineapig.id].male + guineapigCounts[guineapig.id].female);
                        return (
                            <div className="gallery" key={guineapig.id}>
                                <div>
                                    <img src={guineapig.image} alt={guineapig.name} />
                                </div>
                                <div className="desc">{guineapig.name} (${guineapig.price})</div>
                                <div className="desc">Total: ${totalPrice}</div>
                                <div className="desc">
                                    <div className="quantity-controls">
                                    <span style={{ marginRight: "20px" }}>
                                        M
                                        <button onClick={() => updateCount(guineapig.id, "male", -1)}>
                                            -
                                        </button>
                                        {guineapigCounts[guineapig.id].male}
                                        <button onClick={() => updateCount(guineapig.id, "male", 1)}>
                                            +
                                        </button>
                                    </span>
                                    <span>
                                        F
                                        <button onClick={() => updateCount(guineapig.id, "female", -1)}>
                                            -
                                        </button>
                                        {guineapigCounts[guineapig.id].female}
                                        <button onClick={() => updateCount(guineapig.id, "female", 1)}>
                                            +
                                        </button>
                                    </span>
                                    </div>
                                </div>
                                <div className="desc">
                                    {guineapigCounts[guineapig.id].male !== 0 || guineapigCounts[guineapig.id].female !== 0 ? (
                                        <button className="add-to-cart-btn" onClick={() => addToCart(guineapig, guineapigCounts[guineapig.id].male, guineapigCounts[guineapig.id].female)}>
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
