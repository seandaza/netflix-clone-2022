import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { selectPrice } from '../features/PriceSlice';


const Paypal = () => {

    const price = useSelector(selectPrice);
    const paypal = useRef();



    useEffect(() => {
        window.paypal
        .Buttons({
            createOrder: (data, actions, err) => { 
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [{
                        description: "Netflix Subscription",
                        amount: {
                            currency_code: "USD",
                            value: price,
                        },
                    }],
                })
            },
            onApprove: async (data,actions ) => { 
                const order = await actions.order.capture(console.log("Pago Exitoso!"));
                console.log(order);
            },
            onError: error => console.log(error),

        }).render(paypal.current);

    },[price])

    return (
        <div ref={paypal}></div>
    )
}


export default Paypal;