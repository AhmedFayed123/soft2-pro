import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getData = query({
    args:{    },
    handler:()=>{
    },
});

export const saveData = mutation({
    args:{
        title1: v.string(),
        title2: v.string(),
        title3: v.string(),
        title4: v.string(),
    },
    handler:(context,args)=>{
        context.db.insert('services',{title1:args.title1,title2:args.title2,title3:args.title3,title4:args.title4});
    },
});