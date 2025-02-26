import React, { useState } from "react";
import { catData } from "./Cat";
import "./App.css";

export default function Random({ addToCart }) {
    const [userInput, setUserInput] = useState("");

    // State for storing cat quantities
    const [catCounts, setCatCounts] = useState(
        catData.reduce((acc, cat) => {
            acc[cat.id] = { male: 0, female: 0 };
            return acc;
        }, {})
    );

    // Update quantity function
    const updateCount = (id, gender, value) => {
        setCatCounts(prevCounts => ({
            ...prevCounts,
            [id]: {
                ...prevCounts[id],
                [gender]: Math.max(0, prevCounts[id][gender] + value)
            }
        }));
    };

    // Filter the data based on user input
    const filteredData = catData.filter((cat) =>
        cat.name.toLowerCase().includes(userInput.toLowerCase())
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
                    filteredData.map((cat) => {
                        const totalPrice =
                            cat.price * (catCounts[cat.id].male + catCounts[cat.id].female);
                        return (
                            <div className="gallery" key={cat.id}>
                                <div>
                                    <img src={cat.image} alt={cat.name} />
                                </div>
                                <div className="desc">{cat.name} (${cat.price})</div>
                                <div className="desc">Total: ${totalPrice}</div>
                                <div className="desc">
                                    <span style={{ marginRight: "20px" }}>
                                        M
                                        <button onClick={() => updateCount(cat.id, "male", -1)}>
                                            -
                                        </button>
                                        {catCounts[cat.id].male}
                                        <button onClick={() => updateCount(cat.id, "male", 1)}>
                                            +
                                        </button>
                                    </span>
                                    <span>
                                        F
                                        <button onClick={() => updateCount(cat.id, "female", -1)}>
                                            -
                                        </button>
                                        {catCounts[cat.id].female}
                                        <button onClick={() => updateCount(cat.id, "female", 1)}>
                                            +
                                        </button>
                                    </span>
                                </div>
                                <div className="desc">
                                    {catCounts[cat.id].male !== 0 || catCounts[cat.id].female !== 0 ? (
                                        <button onClick={() => addToCart(cat, catCounts[cat.id].male, catCounts[cat.id].female)}>
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
