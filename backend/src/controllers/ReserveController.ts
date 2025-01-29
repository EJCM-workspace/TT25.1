import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import { validationResult } from "express-validator";
import { Mailer } from "../config/mailer";

const prisma: PrismaClient = new PrismaClient();

class ReserveController {
  async createReserve(request: Request, response: Response) {
    try {
      const { address,  userEmail } = request.body;

      const user = await prisma.user.findUnique({
        where: {
          email: userEmail,
        },
      });

      if (!user) {
        response.status(404).json({ message: "User not fount" });

        return;
      }

      const createdReserve = await prisma.reserve.create({
        data: {
          address: address,
          userEmail: userEmail,
        },
        include: {
          user: true,
        },
      });

      Mailer.sendEmail("socratesfreitas1@gmail.com","Nodemailer","Deu Bom, Chefe!")

      response.status(201).json(createdReserve);
    } catch (error: any) {
      response.status(500).json({ message: "Server Error" });
    }
  }

  async getReservers(request: Request, response: Response) {
    try {


    const {userEmail} = request.body

      const reserves = await prisma.reserve.findMany({
        where:{
            userEmail:userEmail
        }
      });

      response.status(200).json(reserves);
    } catch (error: any) {
      response.status(500).json({ message: "Server Error" });
    }
  }

  async updateReserve(request: Request, response: Response) {
    try {
      const { id,address, userEmail } = request.body;

      const user = await prisma.user.findUnique({
        where: {
          email: userEmail,
        },
      });

      if (!user) {
        response.status(404).json({ message: "User not fount" });

        return;
      }

      const createdReserve = await prisma.reserve.update({
        data: {
          address: address,
          userEmail: userEmail,
        },
        where:{
            id:id
        },

        include: {
          user: true,
        },
      });

      response.status(201).json(createdReserve);
    } catch (error: any) {
      response.status(500).json({ message: "Server Error" });
    }
  }


  async deleteReserve(request: Request, response: Response) {
    try {

    const {id } = request.params

    
      const deletedReserve = await prisma.reserve.delete({
        where:{
            id:Number(id)
        }
      })

      response.status(200).json(deletedReserve);
    } catch (error: any) {
      response.status(500).json({ message: "Server Error" });
    }
  }


}


export default new ReserveController()