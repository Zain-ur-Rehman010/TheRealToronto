import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import Stripe from "stripe";

import { getServerConfig } from "../config.server";

// Ticket tiers are priced server-side only — never trust an amount sent
// from the client, or a tampered request could buy a $25 ticket for $0.
const TICKET_TIERS = {
  general: { label: "General Admission", amountCents: 2500 },
  courtside: { label: "Courtside", amountCents: 5000 },
} as const;

export const createTicketCheckoutSession = createServerFn({ method: "POST" })
  .validator(
    z.object({
      tier: z.enum(["general", "courtside"]),
    }),
  )
  .handler(async ({ data }) => {
    const config = getServerConfig();
    if (!config.stripeSecretKey) {
      throw new Error("Stripe is not configured on the server.");
    }

    const stripe = new Stripe(config.stripeSecretKey);
    const tier = TICKET_TIERS[data.tier];

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "cad",
            unit_amount: tier.amountCents,
            product_data: {
              name: `TRT Ticket — ${tier.label}`,
              description: "Mississauga vs Scarborough Pro Am Showcase — Aug 2, Toronto Pan Am Sports Centre",
            },
          },
        },
      ],
      success_url: `${config.siteUrl}/tickets/success`,
      cancel_url: `${config.siteUrl}/tickets/cancel`,
    });

    if (!session.url) {
      throw new Error("Stripe did not return a checkout URL.");
    }

    return { url: session.url };
  });
