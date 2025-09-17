import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    PaymentRequestButtonElement,
    Elements
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51QwiiWFYxYUqDC3rLlxAEVnl1qHBhNAZWnbubDzBi2Uc177jfxaDc3IP9vLWA781KNbvstr0FBTy4jPpf5tm7I0V00uOLel3ws");

export default function ApplePay() {
    const [paymentRequest, setPaymentRequest] = useState(null);

    useEffect(() => {
        const stripe = stripePromise;
        stripe.then((stripeInstance) => {
            const pr = stripeInstance.paymentRequest({
                country: "US",
                currency: "usd",
                total: {
                    label: "Pet Store Order",
                    amount: 5000, // Example amount in cents ($50.00)
                },
                requestPayerName: true,
                requestPayerEmail: true,
            });

            pr.canMakePayment().then((result) => {
                if (result) {
                    setPaymentRequest(pr);
                }
            });
        });
    }, []);

    if (!paymentRequest) {
        return <p>Apple Pay is not available on this device.</p>;
    }

    return (
        <Elements stripe={stripePromise}>
            <PaymentRequestButtonElement options={{ paymentRequest }} />
        </Elements>
    );
}
