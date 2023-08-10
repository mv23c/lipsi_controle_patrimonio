import prismaClient from "../../prisma";

interface PatrimonyRequest {
  patrimony_id: string;
}

class RemovePatrimonyService {
  async execute({ patrimony_id }: PatrimonyRequest) {
    const patrimony = await prismaClient.patrimony.delete({
      where: {
        id: patrimony_id
      }
    })

    return patrimony;
  }
}

export { RemovePatrimonyService }