import prismaClient from "../../prisma";

interface PatrimonyRequest {
  id: string;
  Name: string;
  Tombamento: number;
  Status: string;
  Detentor: string;
}

class EditPatrimonyService {
  async execute({ id, Name, Tombamento, Status, Detentor }: PatrimonyRequest) {
    if (!Name || !Tombamento || !Status || !Detentor) {
      throw new Error("invalid Data");
    }

    const patrimonyAlreadyExists = await prismaClient.patrimony.findFirst({
      where: {
        Tombamento: Tombamento,
      }
    })

    if (patrimonyAlreadyExists && patrimonyAlreadyExists.id != id) {
      throw new Error("Patrimônio já cadastrado.");
    }

    const patrimony = await prismaClient.patrimony.update({
      where: {
        id: id
      },
      data: {
        Name: Name,
        Tombamento: Tombamento,
        Status: Status,
        Detentor: Detentor
      },
      select: {
        Name: true,
        id: true,
        Tombamento: true,
        Status: true,
        Detentor: true
      }
    })

    return patrimony;
  }
}

export { EditPatrimonyService }