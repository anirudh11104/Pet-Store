import React, { useState } from "react";
import rabbit1 from "./Images/Rabbits/rabbit1.png";
import rabbit2 from "./Images/Rabbits/rabbit2.jpg";
import rabbit3 from "./Images/Rabbits/rabbit3.jpg";
import rabbit4 from "./Images/Rabbits/rabbit4.jpg";
import rabbit5 from "./Images/Rabbits/rabbit5.jpg";

export const rabbitData = [
    { id: 1, name: "Tan Rabbit", price: 10, image: rabbit1 },
    { id: 2, name: "Dutch Rabbit", price: 10, image: rabbit2 },
    { id: 3, name: "Flemish Giant", price: 50, image: rabbit3 },
    { id: 4, name: "Angora Rabbit", price: 10, image: rabbit4 },
    { id: 5, name: "Dwarf Hotot", price: 5, image: rabbit5 },
];

export default function Rabbit({ addToCart }) {
    const [userInput, setUserInput] = useState("");

    // State for storing rabbit quantities
    const [rabbitCounts, setrabbitCounts] = useState(
        rabbitData.reduce((acc, rabbit) => {
            acc[rabbit.id] = { male: 0, female: 0 };
            return acc;
        }, {})
    );

    // Update quantity function
    const updateCount = (id, gender, value) => {
        setrabbitCounts(prevCounts => ({
            ...prevCounts,
            [id]: {
                ...prevCounts[id],
                [gender]: Math.max(0, prevCounts[id][gender] + value)
            }
        }));
    };

    // Filter the data based on user input
    const filteredData = rabbitData.filter((rabbit) =>
        rabbit.name.toLowerCase().includes(userInput.toLowerCase())
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
                    filteredData.map((rabbit) => {
                        const totalPrice =
                            rabbit.price * (rabbitCounts[rabbit.id].male + rabbitCounts[rabbit.id].female);
                        return (
                            <div className="gallery" key={rabbit.id}>
                                <div>
                                    <img src={rabbit.image} alt={rabbit.name} />
                                </div>
                                <div className="desc">{rabbit.name} (${rabbit.price})</div>
                                <div className="desc">Total: ${totalPrice}</div>
                                <div className="desc">
                                    <div className="quantity-controls">
                                    <span style={{ marginRight: "20px" }}>
                                        M
                                        <button onClick={() => updateCount(rabbit.id, "male", -1)}>
                                            -
                                        </button>
                                        {rabbitCounts[rabbit.id].male}
                                        <button onClick={() => updateCount(rabbit.id, "male", 1)}>
                                            +
                                        </button>
                                    </span>
                                    <span>
                                        F
                                        <button onClick={() => updateCount(rabbit.id, "female", -1)}>
                                            -
                                        </button>
                                        {rabbitCounts[rabbit.id].female}
                                        <button onClick={() => updateCount(rabbit.id, "female", 1)}>
                                            +
                                        </button>
                                    </span>
                                    </div>
                                </div>
                                <div className="desc">
                                    {rabbitCounts[rabbit.id].male !== 0 || rabbitCounts[rabbit.id].female !== 0 ? (
                                        <button className="add-to-cart-btn" onClick={() => addToCart(rabbit, rabbitCounts[rabbit.id].male, rabbitCounts[rabbit.id].female)}>
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
