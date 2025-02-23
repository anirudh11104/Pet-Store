import { React, useState } from "react";
import cat1 from "./Images/Cats/cat1.png";
import cat2 from "./Images/Cats/cat2.webp";
import cat3 from "./Images/Cats/cat3.jpg";
import cat4 from "./Images/Cats/cat4.webp";

export default function Random({ addToCart }) {
    // Ginger Cat States
    const [maleGinger, setMaleGinger] = useState(0);
    const [femaleGinger, setFemaleGinger] = useState(0);
    const totalGinger = 10 * (maleGinger + femaleGinger);

    // Persian Cat States
    const [malePersian, setMalePersian] = useState(0);
    const [femalePersian, setFemalePersian] = useState(0);
    const totalPersian = 20 * (malePersian + femalePersian);

    const [maleRagdoll, setMaleRagdoll] = useState(0);
    const [femaleRagdoll, setFemaleRagdoll] = useState(0);
    const totalRagdoll = 20 * (maleRagdoll + femaleRagdoll);

    const [maleHimalayan, setMaleHimalayan] = useState(0);
    const [femaleHimalayan, setFemaleHimalayan] = useState(0)
    const totalHimalayan = 20 * (maleHimalayan + femaleHimalayan);


    return (
        <div>
            {/* Ginger Cat Section */}
            <div className="gallery">
                <div>
                    <img src={cat1} alt="Ginger Cat" />
                </div>
                <div className="desc">Ginger Cat ($10)</div>
                <div className="desc">Total: ${totalGinger}</div>
                <div className="desc">
                    <span style={{ marginRight: "20px" }}>
                        M
                        <button onClick={() => setMaleGinger(Math.max(0, maleGinger - 1))}>-</button>
                        {maleGinger}
                        <button onClick={() => setMaleGinger(maleGinger + 1)}>+</button>
                    </span>
                    <span>
                        F
                        <button onClick={() => setFemaleGinger(Math.max(0, femaleGinger - 1))}>-</button>
                        {femaleGinger}
                        <button onClick={() => setFemaleGinger(femaleGinger + 1)}>+</button>
                    </span>
                </div>
                <div className="desc">
                    <button>Add to cart</button>
                </div>
            </div>

            {/* Persian Cat Section */}
            <div className="gallery">
                <div>
                    <img src={cat2} alt="Persian Cat" />
                </div>
                <div className="desc">Persian Cat ($20)</div>
                <div className="desc">Total: ${totalPersian}</div>
                <div className="desc">
                    <span style={{ marginRight: "20px" }}>
                        M
                        <button onClick={() => setMalePersian(Math.max(0, malePersian - 1))}>-</button>
                        {malePersian}
                        <button onClick={() => setMalePersian(malePersian + 1)}>+</button>
                    </span>
                    <span>
                        F
                        <button onClick={() => setFemalePersian(Math.max(0, femalePersian - 1))}>-</button>
                        {femalePersian}
                        <button onClick={() => setFemalePersian(femalePersian + 1)}>+</button>
                    </span>
                </div>
                <div className="desc">
                    <button>Add to cart</button>
                </div>
            </div>
            <div className="gallery">
                <div>
                    <img src={cat3} alt="Ragdoll Cat" />
                </div>
                <div className="desc">Ragdoll Cat ($20)</div>
                <div className="desc">Total: ${totalRagdoll}</div>
                <div className="desc">
                    <span style={{ marginRight: "20px" }}>
                        M
                        <button onClick={() => setMaleRagdoll(Math.max(0, maleRagdoll - 1))}>-</button>
                        {maleRagdoll}
                        <button onClick={() => setMaleRagdoll(maleRagdoll + 1)}>+</button>
                    </span>
                    <span>
                        F
                        <button onClick={() => setFemaleRagdoll(Math.max(0, femaleRagdoll - 1))}>-</button>
                        {femaleRagdoll}
                        <button onClick={() => setFemaleRagdoll(femaleRagdoll + 1)}>+</button>
                    </span>
                </div>
                <div className="desc">
                    <button>Add to cart</button>
                </div>
            </div>
            <div className="gallery">
                <div>
                    <img src={cat4} alt="Himalayan Cat" />
                </div>
                <div className="desc">Himalayan Cat ($20)</div>
                <div className="desc">Total: ${totalHimalayan}</div>
                <div className="desc">
                    <span style={{ marginRight: "20px" }}>
                        M
                        <button onClick={() => setMaleHimalayan(Math.max(0, maleHimalayan - 1))}>-</button>
                        {maleHimalayan}
                        <button onClick={() => setMaleHimalayan(maleHimalayan + 1)}>+</button>
                    </span>
                    <span>
                        F
                        <button onClick={() => setFemaleHimalayan(Math.max(0, femaleHimalayan - 1))}>-</button>
                        {femaleHimalayan}
                        <button onClick={() => setFemaleHimalayan(femaleHimalayan + 1)}>+</button>
                    </span>
                </div>
                <div className="desc">
                    <button>Add to cart</button>
                </div>
            </div>
            
        </div>
    );
}
