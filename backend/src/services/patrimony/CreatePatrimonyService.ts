import prismaClient from '../../prisma';

interface PatrimonyRequest {
  Name: string;
  Tombamento: number;
  Status: string;
  Detentor: string;
}

class CreatePatrimonyService {
  async execute({ Name, Tombamento, Status, Detentor }: PatrimonyRequest) {

    //console.log(Name);
    if(!Tombamento) {
      throw new Error("Número de Patrimônio Incorreto")
    }
   
    // verificar se já existe um patrimônio já cadastrado com esse tombamento
    const patrimonyAlreadyExists = await prismaClient.patrimony.findFirst({
      where: {
        Tombamento: Tombamento,
      }
    })

    if(patrimonyAlreadyExists) {
      throw new Error("Patrimony already exists")
    }

    const patrimony = await prismaClient.patrimony.create({
      data:{
        Name: Name,
        Tombamento: Tombamento,
        Status: Status,
        Detentor: Detentor
      },
      select:{
        id: true,
        Name: true,
        Tombamento: true,
        Status: true,
        Detentor: true
      }
    })

    return patrimony;
  }
}

export { CreatePatrimonyService }