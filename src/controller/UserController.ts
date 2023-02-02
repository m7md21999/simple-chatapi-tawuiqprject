import { User } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../config/db";

export const AddUser = async (req:Request, res:Response) => {
    try {
        const newUser = req.body as User;
        await prisma.user.create({
            data:newUser
        });
        res.status(201).json({
            message:"User has been created successfully!"
        });

    } catch (error) {
        console.log(error);
    }
};

export const UpdeteUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updeteUser = req.body as User;
      await prisma.user.update({
        where: { id },
        data: updeteUser,
      });
      res.status(200).json({
        message: `User with ID: ${id} has been updated successfully!`,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const DeleteUser = async (req: Request, res: Response) => {
        try {
          const { id } = req.params;
      
          await prisma.user.delete({
            where: { id },
          });
      
          res.status(200).json({
            message: `User with ID: ${id} has been deleted!`,
          });
        } catch (error) {
          console.log(error);
        }
      };


export const GetAllUsers =async (req:Request, res:Response) => {

  try {
    const users = await prisma.user.findMany({
    
      select: {
        id:true,
        username:true,
        email:true

      }
    });

    res.status(200).json({
      users
    });
    
  } catch (error) {
    console.log(error)
  }
};

export const GetUserMsgs = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findMany({
      where: {id: id},
      select: {
        username:true,
        Message: {
          select: {
            id:true,
            content:true,
            created_at:true,
            group: {
              select: {
                id:true,
                name:true
              }
            }
          }
        }
      }
      
    })
    return res.status(200).json({
      user
    })
    } catch (error) {
      console.log(error)
    }};
      

