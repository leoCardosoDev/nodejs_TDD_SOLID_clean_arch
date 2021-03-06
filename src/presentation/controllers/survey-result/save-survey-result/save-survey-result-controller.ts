import { Controller, forbidden, serverError, HttpRequest, HttpResponse, InvalidParamError, ok, LoadSurveyById, SaveSurveyResult } from "./save-survey-result-controller-protocols"

export class SaveSurveyResultController implements Controller {
  constructor (
    private readonly loadSurveyById: LoadSurveyById,
    private readonly saveSurveyResult: SaveSurveyResult
  ) {}

  async handle (httpResquest: HttpRequest): Promise<HttpResponse> {
    try {
      const { surveyId } = httpResquest.params
      const { answer } = httpResquest.body
      const { accountId } = httpResquest
      const survey = await this.loadSurveyById.loadById(surveyId)
      if (survey) {
        const answers = survey.answers.map(a => a.answer)
        if (!answers.includes(answer)) {
          return forbidden(new InvalidParamError('answer'))
        }
      } else {
        return forbidden(new InvalidParamError('surveyId'))
      }
      const surveyResult = await this.saveSurveyResult.save({
        accountId,
        surveyId,
        answer,
        date: new Date()
      })
      return ok(surveyResult)
    } catch (error) {
      return serverError(error)
    }
  }
}
