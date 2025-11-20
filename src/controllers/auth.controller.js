// import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const signup = async (req, res) => {
    const { name, email, password } = req.body;

    console.log(name);
    
};

export const login = async (req, res) => {
    const { email, password } = req.body;
};
