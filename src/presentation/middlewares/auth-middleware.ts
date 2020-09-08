import { Middleware, HttpRequest, HttpResponse } from "../protocols"
import { AccessDeniedError } from "../errors"
import { forbidden, ok } from "../helpers/http/http-helper"
import { LoadAccountByToken } from "../../domain/usercases/load-account-by-token"

export class AuthMiddleware implements Middleware {
  constructor (private readonly loadAccountByToken: LoadAccountByToken) {}
  async handle (httpResquest: HttpRequest): Promise<HttpResponse> {
    const accessToken = httpResquest.headers?.['x-access-token']
    if (accessToken) {
      const account = await this.loadAccountByToken.load(accessToken)
      if (account) {
        return ok({ accountId: account.id })
      }
    }
    return forbidden(new AccessDeniedError())
  }
}
