import ApplePay from "./ApplePay";
import GooglePayButton from "./GooglePayButton";

export default function Cart({ cart }) {
    const totalAmount = cart.reduce((sum, pet) => sum + pet.price * (pet.male + pet.female), 0);

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? <p>No items in cart</p> : null}
            
            {cart.map(pet => (
                <div className="cart-item" key={pet.id}>
                    <img src={pet.image} alt={pet.name} />
                    <div className="desc">
                        <strong>{pet.name}</strong>
                        <p>Male: {pet.male}, Female: {pet.female}</p>
                        <p>Cost: ${pet.price * (pet.male + pet.female)}</p>
                    </div>
                </div>
            ))}

            {totalAmount > 0 && (
                <div className="total-section">
                    <h3>Total: ${totalAmount.toFixed(2)}</h3>
                    <div className="payment-buttons">
                        <GooglePayButton totalAmount={totalAmount} />
                        <ApplePay />
                    </div>
                </div>
            )}
        </div>
    );
}
