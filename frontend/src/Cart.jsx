import GooglePayButton from "./GooglePayButton";

export default function Cart({ cart }) {
    const totalAmount = cart.reduce((sum, cat) => sum + cat.price * (cat.male + cat.female), 0);

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? <p>No items in cart</p> : null}
            {cart.map(cat => (
                <div className="cart-item" key={cat.id}>
                    <img src={cat.image} alt={cat.name} style={{ width: "100px" }} />
                    <div className="desc">
                        <strong>{cat.name}</strong>
                        <p>Male: {cat.male}, Female: {cat.female}</p>
                        <p>Cost: ${cat.price * (cat.male + cat.female)}</p>
                    </div>
                </div>
            ))}
            {totalAmount > 0 && (
                <div>
                    <h3>Total: ${totalAmount.toFixed(2)}</h3>
                    <GooglePayButton totalAmount={totalAmount} />
                </div>
            )}
        </div>
    );
}
