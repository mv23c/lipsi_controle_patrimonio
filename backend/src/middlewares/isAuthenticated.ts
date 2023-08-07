import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function isAuthenticated(
  req: Request, 
  res: Response, 
  next: NextFunction
  ) 
{
  //console.log("chamou esse middleware");
  //return next();

  const authtoken = req.headers.authorization;

  if(!authtoken) { // Se authtoken for false então o token não foi enviado
    return res.status(401).end();
  }

  //console.log(authtoken);

  const [, token] = authtoken.split(" ")

  // console.log(token);

  try {
    // Validar esse token
    const { sub } = verify(
      token,
      process.env.JWT_SECRET
    ) as Payload;

    // Recuperar o id do token e colocar dentro de uma variável user_id dentro do request
    req.user_id = sub;

    //console.log(sub);

    return next();

  } catch(err) {
    return res.status(401).end();
  }
}

/**
 * Aula 71: Criando middleware.
 * 
 * Middleware é todo tipo de função que está entre um pedido HTTP e a resposta final que o servidor envia de volta para o cliente. O middleware é uma função que executa processos intermediários. 
 * 
 */