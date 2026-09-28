import { z } from "zod";
const schema = z.object({value: z.number().gte(100)});

export type GiftCard = z.infer<typeof schema>;

export function validate (body: GiftCard) {
        return schema.safeParse(body);
}