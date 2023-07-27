import { Schema, model, Document } from 'mongoose'

interface UserDocument extends Document {
  name: string
  telefone: string
  email: string
  cpf: string
  data_de_nascimento: string
}

// Definição do schema do usuário
const userSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  telefone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  cpf: { type: String, required: true, unique: true },
  data_de_nascimento: { type: String, required: true },
})

// Criar e exportar o modelo do usuário
const User = model<UserDocument>('User', userSchema)

export default User
