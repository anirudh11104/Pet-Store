import { React, useState } from "react";
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

export default function Cat({ addToCart }) {
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

    const [maleBob, setMaleBob] = useState(0);
    const [femaleBob, setFemaleBob] = useState(0);
    const totalBob = 20 * (maleBob + femaleBob);

    const [maleBombay, setMaleBombay] = useState(0);
    const [femaleBombay, setFemaleBombay] = useState(0);
    const totalBombay = 20 * (maleBombay + femaleBombay);

    const [maleSiberian, setMaleSiberian] = useState(0);
    const [femaleSiberian, setFemaleSiberian] = useState(0);
    const totalSiberian = 20 * (maleSiberian + femaleSiberian);

    const [maleMist, setMaleMist] = useState(0);
    const [femaleMist, setFemaleMist] = useState(0);
    const totalMist = 20 * (maleMist + femaleMist);

    const [maleBurmilla, setMaleBurmilla] = useState(0);
    const [femaleBurmilla, setFemaleBurmilla] = useState(0);
    const totalBurmilla = 20 * (maleBurmilla + femaleBurmilla);

    const [maleHair, setMaleHair] = useState(0);
    const [femaleHair, setFemaleHair] = useState(0);
    const totalHair = 20 * (maleHair + femaleHair);

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
            <div className="gallery">
                <div>
                    <img src={cat5} alt="American Bob Cat" />
                </div>
                <div className="desc">American Bob Cat ($20)</div>
                <div className="desc">Total: ${totalBob}</div>
                <div className="desc">
                    <span style={{ marginRight: "20px" }}>
                        M
                        <button onClick={() => setMaleBob(Math.max(0, maleBob - 1))}>-</button>
                        {maleBob}
                        <button onClick={() => setMaleBob(maleBob + 1)}>+</button>
                    </span>
                    <span>
                        F
                        <button onClick={() => setFemaleBob(Math.max(0, femaleBob - 1))}>-</button>
                        {femaleBob}
                        <button onClick={() => setFemaleBob(femaleBob + 1)}>+</button>
                    </span>
                </div>
                <div className="desc">
                    <button>Add to cart</button>
                </div>
            </div>
            <div className="gallery">
                <div>
                    <img src={cat6} alt="Bombay Cat" />
                </div>
                <div className="desc">Bombay Cat ($20)</div>
                <div className="desc">Total: ${totalBombay}</div>
                <div className="desc">
                    <span style={{ marginRight: "20px" }}>
                        M
                        <button onClick={() => setMaleBombay(Math.max(0, maleBombay - 1))}>-</button>
                        {maleBombay}
                        <button onClick={() => setMaleBombay(maleBombay + 1)}>+</button>
                    </span>
                    <span>
                        F
                        <button onClick={() => setFemaleBombay(Math.max(0, femaleBombay - 1))}>-</button>
                        {femaleBombay}
                        <button onClick={() => setFemaleBombay(femaleBombay + 1)}>+</button>
                    </span>
                </div>
                <div className="desc">
                    <button>Add to cart</button>
                </div>
            </div>
            <div className="gallery">
                <div>
                    <img src={cat7} alt="Siberian Cat" />
                </div>
                <div className="desc">Siberian Cat ($20)</div>
                <div className="desc">Total: ${totalSiberian}</div>
                <div className="desc">
                    <span style={{ marginRight: "20px" }}>
                        M
                        <button onClick={() => setMaleSiberian(Math.max(0, maleSiberian - 1))}>-</button>
                        {maleSiberian}
                        <button onClick={() => setMaleSiberian(maleSiberian + 1)}>+</button>
                    </span>
                    <span>
                        F
                        <button onClick={() => setFemaleSiberian(Math.max(0, femaleSiberian - 1))}>-</button>
                        {femaleSiberian}
                        <button onClick={() => setFemaleSiberian(femaleSiberian + 1)}>+</button>
                    </span>
                </div>
                <div className="desc">
                    <button>Add to cart</button>
                </div>
            </div>
            <div className="gallery">
                <div>
                    <img src={cat8} alt="Austrailian Mist Cat" />
                </div>
                <div className="desc">Austrailian Mist Cat ($20)</div>
                <div className="desc">Total: ${totalMist}</div>
                <div className="desc">
                    <span style={{ marginRight: "20px" }}>
                        M
                        <button onClick={() => setMaleMist(Math.max(0, maleMist - 1))}>-</button>
                        {maleMist}
                        <button onClick={() => setMaleMist(maleMist + 1)}>+</button>
                    </span>
                    <span>
                        F
                        <button onClick={() => setFemaleMist(Math.max(0, femaleMist - 1))}>-</button>
                        {femaleMist}
                        <button onClick={() => setFemaleMist(femaleMist + 1)}>+</button>
                    </span>
                </div>
                <div className="desc">
                    <button>Add to cart</button>
                </div>
            </div>
            <div className="gallery">
                <div>
                    <img src={cat9} alt="Burmilla Cat" />
                </div>
                <div className="desc">Burmilla Cat ($20)</div>
                <div className="desc">Total: ${totalBurmilla}</div>
                <div className="desc">
                    <span style={{ marginRight: "20px" }}>
                        M
                        <button onClick={() => setMaleBurmilla(Math.max(0, maleMist - 1))}>-</button>
                        {maleBurmilla}
                        <button onClick={() => setMaleBurmilla(maleMist + 1)}>+</button>
                    </span>
                    <span>
                        F
                        <button onClick={() => setFemaleBurmilla(Math.max(0, femaleBurmilla - 1))}>-</button>
                        {femaleBurmilla}
                        <button onClick={() => setFemaleBurmilla(femaleBurmilla + 1)}>+</button>
                    </span>
                </div>
                <div className="desc">
                    <button>Add to cart</button>
                </div>
            </div>
            <div className="gallery">
                <div>
                    <img src={cat10} alt="British Long Hair Cat" />
                </div>
                <div className="desc">British Long Hair Cat ($20)</div>
                <div className="desc">Total: ${totalHair}</div>
                <div className="desc">
                    <span style={{ marginRight: "20px" }}>
                        M
                        <button onClick={() => setMaleHair(Math.max(0, maleHair - 1))}>-</button>
                        {maleHair}
                        <button onClick={() => setMaleHair(maleHair + 1)}>+</button>
                    </span>
                    <span>
                        F
                        <button onClick={() => setFemaleHair(Math.max(0, femaleHair - 1))}>-</button>
                        {femaleHair}
                        <button onClick={() => setFemaleHair(femaleHair + 1)}>+</button>
                    </span>
                </div>
                <div className="desc">
                    <button>Add to cart</button>
                </div>
            </div>
            
        </div>
    );
}
