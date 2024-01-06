import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getData = query({
    args:{},
    handler:()=>{

    },
});

export const saveData = mutation({
    args:{
        name: v.string(),
        age: v.number(),
        governorate: v.string(),
    },
    handler:(context,args)=>{
        context.db.insert('users',{name:args.name,age:args.age,governorate:args.governorate});
    },
});