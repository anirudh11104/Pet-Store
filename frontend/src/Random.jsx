import React, { useState } from "react";
import { catData } from "./Cat";
import { rabbitData } from "./Rabbit";
import { guineapigData } from "./Guinea";
import { ChinchillaData } from "./Chinchilla";
import { HamsterData } from "./Hamster";
import "./App.css";

export default function Random({ addToCart }) {
    const [userInput, setUserInput] = useState("");

    // Combine all pet data into one array (ensure data exists)
    const petData = [...(catData || []), ...(rabbitData || []), ...(guineapigData || []), ...(ChinchillaData || []), ...(HamsterData || [])];

    // Ensure unique IDs (avoid conflicts across pets)
    const petsWithUniqueIds = petData.map((pet, index) => ({
        ...pet,
        uniqueId: `${pet.name}-${index}`, // Creates a unique key
    }));

    // Store quantities for all pets in one state object
    const [petCounts, setPetCounts] = useState(
        petsWithUniqueIds.reduce((acc, pet) => {
            acc[pet.uniqueId] = { male: 0, female: 0 };
            return acc;
        }, {})
    );

    // Function to update pet counts dynamically
    const updatePetCount = (id, gender, value) => {
        setPetCounts(prevCounts => ({
            ...prevCounts,
            [id]: {
                ...prevCounts[id],
                [gender]: Math.max(0, prevCounts[id][gender] + value),
            }
        }));
    };

    // Filter pets based on user input (add safeguard)
    const filteredData = petsWithUniqueIds.filter((pet) =>
        pet.name?.toLowerCase().includes(userInput.toLowerCase())
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
                    filteredData.map((pet) => {
                        const totalPrice = pet.price * (petCounts[pet.uniqueId].male + petCounts[pet.uniqueId].female);

                        return (
                            <div className="gallery" key={pet.uniqueId}>
                                <div>
                                    <img src={pet.image} alt={pet.name} />
                                </div>
                                <div className="desc">{pet.name} (${pet.price})</div>
                                <div className="desc">Total: ${totalPrice}</div>
                                <div className="desc">
                                    <div className="quantity-controls">
                                        <span style={{ marginRight: "20px" }}>
                                            M
                                            <button onClick={() => updatePetCount(pet.uniqueId, "male", -1)}>-</button>
                                            {petCounts[pet.uniqueId].male}
                                            <button onClick={() => updatePetCount(pet.uniqueId, "male", 1)}>+</button>
                                        </span>
                                        <span>
                                            F
                                            <button onClick={() => updatePetCount(pet.uniqueId, "female", -1)}>-</button>
                                            {petCounts[pet.uniqueId].female}
                                            <button onClick={() => updatePetCount(pet.uniqueId, "female", 1)}>+</button>
                                        </span>
                                    </div>
                                </div>
                                <div className="desc">
                                    {petCounts[pet.uniqueId].male !== 0 || petCounts[pet.uniqueId].female !== 0 ? (
                                        <button className="add-to-cart-btn" onClick={() => addToCart(pet, petCounts[pet.uniqueId].male, petCounts[pet.uniqueId].female)}>
                                            Add to cart
                                        </button>
                                    ) : (
                                        <div style={{ height: "30px" }}></div> // Prevents layout shift
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
