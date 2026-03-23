import {linkSchema} from "@/zod/links";
import {z} from "zod";

export const createLinkSchema = linkSchema.omit({
    created: true,
    updated: true,
    accountId: true,
    linkId: true,
});

export type CreateLinkDto = z.infer<typeof createLinkSchema>;