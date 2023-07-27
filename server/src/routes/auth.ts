import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import User from '../models/User'

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', async (req, res) => {
    const bodySchema = z.object({
      nome: z.string(),
      telefone: z.string(),
      email: z.string(),
      cpf: z.string(),
      nascimento: z.string(),
    })

    const { nome, telefone, email, cpf, nascimento } = bodySchema.parse(
      req.body,
    )

    const userExists = await User.findOne({ email })

    if (userExists) {
      return res
        .status(422)
        .send({ msg: '🔴 Por favor, utilize outro e-mail!' })
    }
    const user = new User({
      telefone,
      nome,
      email,
      cpf,
      nascimento,
    })

    try {
      await user.save()
      res.status(201).send({ msg: '🟢 Usuário criado com sucesso!' })
    } catch (error) {
      res.status(500).send({ msg: '🔴 Usuário recusado!', error })
    }
  })
}
