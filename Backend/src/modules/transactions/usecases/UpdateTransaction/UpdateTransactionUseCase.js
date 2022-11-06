// import { TransactionsRepository } from "../../repositories/TransactionsRepository.js";
import { prisma } from "../../../../database/prisma/PrismaCliente.js";

export class UpdateTransactionUseCase {
  // constructor() {
  //   this.transactionsRepository = TransactionsRepository.getInstance();
  // }

async execute({ id, titulo, tipo, categoria, valor }) {

  await prisma.$connect();

    const updatedTransaction = await prisma.transactions.update({
      where: {
        id,
      },
      data: {
        titulo, 
        tipo, 
        categoria, 
        valor
      },
    });

    await prisma.$disconnect();

    return updatedTransaction;
  }
}