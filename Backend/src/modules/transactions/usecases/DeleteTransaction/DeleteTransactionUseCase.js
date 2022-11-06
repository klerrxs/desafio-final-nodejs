//import { AppException } from "../../../../application/errors/AppException.js";

// import { TransactionRepository } from "../../repositories/TransactionRepository.js";

import { prisma } from "../../../../database/prisma/PrismaCliente.js"

export class DeleteTransactionUseCase {
    // constructor() {
    //     this.transactionRepository = TransactionRepository.getInstance();
    // }

    async execute(id) {

        await prisma.$connect();

        const deleteTransaction = await prisma.transactions.delete({
            where: {
                id,
            },
        });        

        await prisma.$disconnect();

        return deleteTransaction;
    }
}