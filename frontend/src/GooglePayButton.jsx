import React, { useEffect, useState } from "react";

export default function GooglePayButton({ totalAmount }) {
    const [paymentsClient, setPaymentsClient] = useState(null);

    useEffect(() => {
        const checkGooglePay = setInterval(() => {
            if (window.google) {
                clearInterval(checkGooglePay);
                initGooglePay();
            }
        }, 500); // Check every 500ms until Google Pay API loads

        return () => clearInterval(checkGooglePay); // Cleanup
    }, []);

    const initGooglePay = () => {
        const client = new window.google.payments.api.PaymentsClient({ environment: "TEST" });

        client.isReadyToPay({
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
                {
                    type: "CARD",
                    parameters: {
                        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                        allowedCardNetworks: ["VISA", "MASTERCARD"],
                    },
                    tokenizationSpecification: {
                        type: "PAYMENT_GATEWAY",
                        parameters: {
                            gateway: "stripe",
                            "stripe:version": "2023-10-01",
                            "stripe:publishableKey": "your_stripe_publishable_key",
                        },
                    },
                },
            ],
        })
        .then(response => {
            if (response.result) {
                setPaymentsClient(client);
            }
        })
        .catch(error => console.error("Google Pay Error:", error));
    };

    const processPayment = () => {
        if (!paymentsClient) return;

        const paymentDataRequest = {
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
                {
                    type: "CARD",
                    parameters: {
                        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                        allowedCardNetworks: ["VISA", "MASTERCARD"],
                    },
                    tokenizationSpecification: {
                        type: "PAYMENT_GATEWAY",
                        parameters: {
                            gateway: "stripe",
                            "stripe:version": "2023-10-01",
                            "stripe:publishableKey": "your_stripe_publishable_key",
                        },
                    },
                },
            ],
            transactionInfo: {
                totalPriceStatus: "FINAL",
                totalPrice: totalAmount.toFixed(2),
                currencyCode: "USD",
            },
            merchantInfo: {
                merchantName: "Pet-Store",
                merchantId: "your_merchant_id",
            },
        };

        paymentsClient.loadPaymentData(paymentDataRequest)
            .then(paymentData => {
                console.log("Payment Success:", paymentData);
                alert("Payment successful!");
            })
            .catch(error => console.error("Payment Failed:", error));
    };

    return (
        <div>
            {paymentsClient && (
                <button onClick={processPayment} style={{ background: "#4285F4", color: "white", padding: "10px", border: "none", cursor: "pointer" }}>
                    Pay with Google Pay (${totalAmount.toFixed(2)})
                </button>
            )}
        </div>
    );
}
