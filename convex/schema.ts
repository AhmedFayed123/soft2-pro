import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  services: defineTable({
    title1: v.string(),
    title2: v.string(),
    title3: v.string(),
    title4: v.string(),
  }),
  users: defineTable({
    name: v.string(),
    age: v.number(),
    governorate: v.string(),
  }),

});
