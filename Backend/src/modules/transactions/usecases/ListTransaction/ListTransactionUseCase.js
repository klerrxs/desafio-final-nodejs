// import { TransactionRepository } from "../../repositories/TransactionRepository.js";

import { prisma } from "../../../../database/prisma/PrismaCliente.js";

import { AppException } from "../../../../application/errors/AppException.js";


export class ListTransactionUseCase {
  // constructor() {
  //   this.transactionRepository = TransactionRepository.getInstance();
  // }

    async execute() {

      await prisma.$connect(); 

      const transaction = await prisma.transactions.findMany();

      if (!transaction.length){
        throw new AppException(404, "Transactions not found!" )
      }

      await prisma.$disconnect();
      
      return transaction;
    }
}