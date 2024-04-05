// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const tumblrCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.optional(z.string()),
        pubDate: z.optional(z.date()),
        tags: z.optional(z.array(z.string())),
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
    tumblr: tumblrCollection,
};
