//import { TransactionRepository } from "../../repositories/TransactionRepository.js";
import { prisma } from "../../../../database/prisma/PrismaCliente.js"

export class CreateTransactionUseCase {
  // constructor() {
  //   this.transactionRepository = TransactionRepository.getInstance();
  // }

  async execute({ titulo, valor, tipo, categoria }) {

    await prisma.$connect();

    const transaction = await prisma.transactions.create({
      data: {
        titulo,
        valor,
        tipo,
        categoria,
        created_at: new Date(),
      },  
    });

    await prisma.$disconnect();

    return transaction;
  }
}