import React, { useState } from "react";
import cat1 from "./Images/Cats/cat1.png";
import cat2 from "./Images/Cats/cat2.webp";
import cat3 from "./Images/Cats/cat3.jpg";
import cat4 from "./Images/Cats/cat4.webp";
import cat5 from "./Images/Cats/cat5.jpg";
import cat6 from "./Images/Cats/cat6.jpg";
import cat7 from "./Images/Cats/cat7.jpg";
import cat8 from "./Images/Cats/cat8.jpg";
import cat9 from "./Images/Cats/cat9.jpeg";
import cat10 from "./Images/Cats/cat10.jpg";
import "./App.css";

export const catData = [
    { id: 1, name: "Ginger Cat", price: 10, image: cat1 },
    { id: 2, name: "Persian Cat", price: 20, image: cat2 },
    { id: 3, name: "Ragdoll Cat", price: 20, image: cat3 },
    { id: 4, name: "Himalayan Cat", price: 20, image: cat4 },
    { id: 5, name: "American Bob Cat", price: 20, image: cat5 },
    { id: 6, name: "Bombay Cat", price: 20, image: cat6 },
    { id: 7, name: "Siberian Cat", price: 20, image: cat7 },
    { id: 8, name: "Australian Mist Cat", price: 20, image: cat8 },
    { id: 9, name: "Burmilla Cat", price: 20, image: cat9 },
    { id: 10, name: "Long Hair Cat", price: 20, image: cat10 },
];

export default function Cat({ addToCart }) {
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
                                    <div className="quantity-controls">
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
                                </div>
                                <div className="desc">
                                    {catCounts[cat.id].male !== 0 || catCounts[cat.id].female !== 0 ? (
                                        <button className="add-to-cart-btn" onClick={() => addToCart(cat, catCounts[cat.id].male, catCounts[cat.id].female)}>
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
