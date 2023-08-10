import prismaClient from "../../prisma";

interface PatrimonyRequest {
  id: string;
}

class DetailPatrimonyService {
  async execute({ id }: PatrimonyRequest) {
    if(!id) {
      throw new Error("invalid id");
    }

    const patrimony = await prismaClient.patrimony.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        Name: true,
        Tombamento: true,
        Status: true,
        Detentor: true,
      }
    })

    if (patrimony !== null) {
      return patrimony;
    } else {
      throw new Error("There is no patrimony with that id")
    }
  }
}

export { DetailPatrimonyService }