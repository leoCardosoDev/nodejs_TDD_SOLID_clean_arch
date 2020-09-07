import { Middleware, HttpRequest, HttpResponse } from "../protocols"
import { AccessDeniedError } from "../errors"
import { forbidden } from "../helpers/http/http-helper"
import { LoadAccountByToken } from "../../domain/usercases/load-account-by-token"

export class AuthMiddleware implements Middleware {
  constructor (private readonly loadAccountByToken: LoadAccountByToken) {}
  async handle (httpResquest: HttpRequest): Promise<HttpResponse> {
    const accessToken = httpResquest.headers?.['x-access-token']
    if (accessToken) {
      await this.loadAccountByToken.load(accessToken)
    }
    return forbidden(new AccessDeniedError())
  }
}
