import z from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
})

//verifica se process.env tem a propriedade e que seja uma url
export const env = envSchema.parse(process.env)
