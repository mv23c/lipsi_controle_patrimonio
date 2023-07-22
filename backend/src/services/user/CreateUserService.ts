import prismaClient from "../../prisma";
import { hash } from 'bcryptjs'

interface UserRequest {
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ email, password }: UserRequest) {

    // Verificar se o email foi enviado
    if(!email) {
      throw new Error("Email incorrect");
    }

    // Verificar se o email fornecido já está cadastrado
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if(userAlreadyExists) {
      throw new Error("User already exists")
    }

    // Criptografando a senha
    const passwordHash = await hash(password, 8)

    // Cadastro no banco
    const user = await prismaClient.user.create({
      data: {
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        email: true
      }
    })

    return {user}
  }
}

export { CreateUserService }