import { IProduct } from "@/interface";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.SECRET_KEY as string, {
    apiVersion: '2022-11-15'
})

export default async function name(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { cart } = req.body;
        const line_items: any = []
        for (const key in cart) {
            line_items.push({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: cart[key].name,
                        images: [cart[key].imageUrl]
                    },
                    unit_amount: cart[key].price * 100
                },
                quantity: 1
            });
        }
        try {
            const session = await stripe.checkout.sessions.create({
                line_items: [...line_items],
                mode: 'payment',
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/cancel`,
            });
            res.status(200).json({ session })
        } catch (error: any) {
            res.status(500).json({ error: error.message })
        }
    } else {
        res.redirect(303, `${req.headers.origin}`)
    }

}