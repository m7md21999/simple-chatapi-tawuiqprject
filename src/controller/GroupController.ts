import { Group } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../config/db";

export const CreateGroup = async (req:Request, res:Response) => {
    try {
        const newGroup = req.body as Group;
        await prisma.group.create({
            data:newGroup
        });
        res.status(201).json({
            message:"Group has been created successfully!"
        });

    } catch (error) {
        console.log(error);
    }
};

export const UpdateGroupName = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.ID);
      const updateGroupName = req.body as Group;
      await prisma.group.update({
        where: {id} ,
        data: updateGroupName,
      });
      res.status(200).json({
        message: "Group has been updated successfully",
      });
    } catch (error) {
      console.log(error);
    }
  };

  export const getGroupmsgs =async (req:Request, res:Response) => {
    try {
      const id = parseInt(req.params.id);
      const msgs = await prisma.group.findMany({
        where: {id: id},
        select: {
          name:true,
          message: {
            select: {
              content:true,
              created_at:true,
              userId:true,
              creator: {
                select: {
                  fullname:true,
                  username:true
                }
              }
            }
          }
        }

      })
      if (msgs.length == 0){
        return res.status(400).json({
          message:"No messges"
        })
      }
      res.status(200).json(msgs);
    } catch (error) {
      
    }
    
  }

  export const GetAllGroups =async (req:Request, res:Response) => {
    const msgs = await prisma.group.findMany({

      select: {
        id:true,
        name:true
      }
    });
    res.status(200).json({
      msgs
    })
  }


export const DeleteGroup = async (req: Request, res: Response) => {
        try {
          const id = parseInt(req.params.id);
      
          await prisma.group.delete({
            where: { id },
          });
      
          res.status(200).json({
            message: "Group has been deleted successfully",
          });
        } catch (error) {
          console.log(error);
        }
      };