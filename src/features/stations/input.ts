import { z } from "zod";

export const travelschema = z.object({
  locationId: z.string().regex(/^[a-öA-Ö]{5,15}$/),
  destinationId: z.string().regex(/^[a-öA-Ö]{5,15}$/),
});
