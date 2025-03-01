import React, { useState } from "react";
import Hamster1 from "./Images/Hamsters/Hamster1.webp";
import Hamster2 from "./Images/Hamsters/Hamster2.webp";
import Hamster3 from "./Images/Hamsters/Hamster3.webp";
import Hamster4 from "./Images/Hamsters/Hamster4.webp";
import Hamster5 from "./Images/Hamsters/Hamster5.webp";

export const HamsterData = [
    { id: 1, name: "Dwarf Roborovski", price: 10, image: Hamster1, type: "Hamster" },
    { id: 2, name: "Campbell's Dwarf", price: 10, image: Hamster2, type: "Hamster" },
    { id: 3, name: "Syrian Hamster", price: 50, image: Hamster3, type: "Hamster" },
    { id: 4, name: "Dwarf Winter", price: 10, image: Hamster4, type: "Hamster" },
    { id: 5, name: "Chinese Hamster", price: 5, image: Hamster5, type: "Hamster" },
];

export default function Hamster({ addToCart }) {
    const [userInput, setUserInput] = useState("");

    // State for storing Hamster quantities
    const [HamsterCounts, setHamsterCounts] = useState(
        HamsterData.reduce((acc, Hamster) => {
            acc[Hamster.id] = { male: 0, female: 0 };
            return acc;
        }, {})
    );

    // Update quantity function
    const updateCount = (id, gender, value) => {
        setHamsterCounts(prevCounts => ({
            ...prevCounts,
            [id]: {
                ...prevCounts[id],
                [gender]: Math.max(0, prevCounts[id][gender] + value)
            }
        }));
    };

    // Filter the data based on user input
    const filteredData = HamsterData.filter((Hamster) =>
        Hamster.name.toLowerCase().includes(userInput.toLowerCase())
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
                    filteredData.map((Hamster) => {
                        const totalPrice =
                            Hamster.price * (HamsterCounts[Hamster.id].male + HamsterCounts[Hamster.id].female);
                        return (
                            <div className="gallery" key={Hamster.id}>
                                <div>
                                    <img src={Hamster.image} alt={Hamster.name} />
                                </div>
                                <div className="desc">{Hamster.name} (${Hamster.price})</div>
                                <div className="desc">Total: ${totalPrice}</div>
                                <div className="desc">
                                    <div className="quantity-controls">
                                    <span style={{ marginRight: "20px" }}>
                                        M
                                        <button onClick={() => updateCount(Hamster.id, "male", -1)}>
                                            -
                                        </button>
                                        {HamsterCounts[Hamster.id].male}
                                        <button onClick={() => updateCount(Hamster.id, "male", 1)}>
                                            +
                                        </button>
                                    </span>
                                    <span>
                                        F
                                        <button onClick={() => updateCount(Hamster.id, "female", -1)}>
                                            -
                                        </button>
                                        {HamsterCounts[Hamster.id].female}
                                        <button onClick={() => updateCount(Hamster.id, "female", 1)}>
                                            +
                                        </button>
                                    </span>
                                    </div>
                                </div>
                                <div className="desc">
                                    {HamsterCounts[Hamster.id].male !== 0 || HamsterCounts[Hamster.id].female !== 0 ? (
                                        <button className="add-to-cart-btn" onClick={() => addToCart(Hamster, HamsterCounts[Hamster.id].male, HamsterCounts[Hamster.id].female)}>
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
