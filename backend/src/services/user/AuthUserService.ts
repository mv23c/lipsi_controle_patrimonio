import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    // Verificar se o email existe
    const user = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if(!user) {
      throw new Error("User/password incorrect")
    }

    // Verificar se a senha está correta
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error("User/password incorrect")
    }

    // Gerar um token JWT e devolver os dados do usuário como id, email
    // Se deu tudo certo, geramos um token para o usuário
    const token = sign(
      {
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '1d'
      }
    )

    return {
      id: user.id,
      email: user.email,
      token: token
    }
  }
}

export { AuthUserService };