import { LoadAccountByToken } from "@/domain/usercases/account/load-account-by-token"
import { DbLoadAccountByToken } from "@/data/usercases/account/load-account-by-token/db-load-account-by-token"
import { AccountMongoRepository } from "@/infra/db/mongodb/account/account-mongo-repository"
import { JwtAdapter } from "@/infra/criptography/jwt-adapter/jwt-adapter"
import env from '@/main/config/env'

export const makeDbLoadAccountByToken = (): LoadAccountByToken => {
  const jwtAdaper = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbLoadAccountByToken(jwtAdaper, accountMongoRepository)
}
