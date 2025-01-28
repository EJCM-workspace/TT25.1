import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();

class UserController {
  async createUser(request: Request, response: Response) {
    try {
      const { userEmail, name, phone, isPremium } = request.body;

      const createdUser = await prisma.user.create({
        data: {
          email: userEmail,
          name: name,
          phone: phone,
          isPremium: isPremium,
        },
      });

      response.status(201).json(createdUser);
    } catch (error: any) {
      response.status(500).json({ message: error.message });
    }
  }

  async getUsers(request: Request, response: Response) {
    try {
      const users = await prisma.user.findMany();

      response.status(200).json(users);
    } catch (error: any) {
      response.status(500).json({ message: "Server Error" });
    }
  }

  async getUser(request: Request, response: Response) {
    try {
      const { userEmail } = request.body;
      
      const user = await prisma.user.findUnique({
        where: {
          email: userEmail,
        },
      });

      if(!user){
        response.status(404).json({message:"User not found"})
        return
      }

      response.status(200).json(user);
    } catch (error: any) {
      response.status(500).json({ message: "Server Error" });
    }
  }

  async updateUser(request: Request, response: Response) {
    try {
      const { userEmail, name, phone, isPremium } = request.body;

      const updatedUser = await prisma.user.update({
        data: {
          email: userEmail,
          name: name,
          phone: phone,
          isPremium: isPremium,
        },
        where: {
          email: userEmail,
        },
      });

      response.status(200).json(updatedUser);
    } catch (error: any) {
      response.status(500).json({ message: "Server Error" });
    }
  }

  async deleteUser(request: Request, response: Response) {
    try {
      const { userEmail } = request.body;

      const deletedUser = await prisma.user.delete({
        where: {
          email: userEmail,
        },
      });

      response.status(200).json(deletedUser);
    } catch (error: any) {
      response.status(500).json({ message: "Server Error" });
    }
  }

  async deleteAllUsers(request:Request,response:Response){
    try {

      const deletedUsers = await prisma.user.deleteMany(
      );

      response.status(200).json(deletedUsers);
    } catch (error: any) {
      response.status(500).json({ message: "Server Error" });
    }
  }
}

export default new UserController();
