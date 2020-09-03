import { Controller, HttpRequest, HttpResponse, Validation, AddSurvey } from "./add-survey-controller-protocols"
import { badRequest } from "../../../helpers/http/http-helper"

export class AddSurveyController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addSurvey: AddSurvey
  ) {}

  async handle (httpRquest: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(httpRquest.body)
    if (error) {
      return badRequest(error)
    }
    const { question, answers } = httpRquest.body
    await this.addSurvey.add({
      question,
      answers
    })
    return null
  }
}
