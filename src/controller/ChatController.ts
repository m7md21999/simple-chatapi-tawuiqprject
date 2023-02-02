import { Message } from "@prisma/client";
import { Request , Response } from "express";
import { prisma } from "../config/db";

export const SendMsg = async (req:Request, res:Response) => {
   try {
    const newMsg = req.body as Message;
    await prisma.message.create({
        data:newMsg
    });
    res.status(201).json({
        message:"A new message has been created!"
    });
   } catch (error) {
    console.log(error)
   } 
};

export const UpdateMsg =async (req:Request, res:Response) => {
  try {
    const id = parseInt(req.params.id);
    const updateMsg = req.body as Message;
    await prisma.message.update({
        where: {id},
        data:updateMsg
    });
  } catch (error) {
    console.log(error);
  }  
};

export const DeleteMsg =async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        await prisma.user.delete({
          where: { id },
        });
    
        res.status(200).json({
          message: "Message has been deleted!",
        });
      } catch (error) {
        console.log(error);
      }
};