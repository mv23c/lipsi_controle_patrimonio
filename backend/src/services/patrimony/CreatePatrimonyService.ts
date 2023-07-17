
interface PatrimonyRequest {
  Name: string;
  Tombamento: number;
  Status: string;
  Detentor: string
}

class CreatePatrimonyService {
  async execute({Name, Tombamento, Status, Detentor}: PatrimonyRequest) {
    console.log(Name);
    return { name: Name }
  }
}

export { CreatePatrimonyService }