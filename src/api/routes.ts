import { Router } from "express";
import { prisma } from "../db/prisma.js";

const router = Router();

router.get("/events", async (req, res)=> {
    const event = await prisma.transferEvent.findMany({
        orderBy: { createdAt: "desc" },
        take:50
    });
    res.json(event);
})

export default router;