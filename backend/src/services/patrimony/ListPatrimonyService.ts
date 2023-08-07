import prismaClient from "../../prisma";

class ListPatrimonyService {
  async execute() {
    const patrimony = await prismaClient.patrimony.findMany({
      select: {
        id: true,
        Name: true,
        Tombamento: true,
        Status: true,
        Detentor: true,
      }
    })

    return patrimony;

  }
}

export { ListPatrimonyService }