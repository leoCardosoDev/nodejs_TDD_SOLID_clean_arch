import { Controller, forbidden, serverError, HttpRequest, HttpResponse, InvalidParamError, LoadSurveyById } from "./save-survey-result-controller-protocols"

export class SaveSurveyResultController implements Controller {
  constructor (private readonly loadSurveyById: LoadSurveyById) {}

  async handle (httpResquest: HttpRequest): Promise<HttpResponse> {
    try {
      const survey = await this.loadSurveyById.loadById(httpResquest.params.surveyId)
      if (!survey) {
        return forbidden(new InvalidParamError('surveyId'))
      }
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}
