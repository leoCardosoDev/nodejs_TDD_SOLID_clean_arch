import { Controller, HttpRequest, HttpResponse, Validation } from "./add-survey-controller-protocols"

export class AddSurveyController implements Controller {
  constructor (
    private readonly validation: Validation
  ) {}

  async handle (httpRquest: HttpRequest): Promise<HttpResponse> {
    this.validation.validate(httpRquest.body)
    return new Promise(resolve => resolve(null))
  }
}
