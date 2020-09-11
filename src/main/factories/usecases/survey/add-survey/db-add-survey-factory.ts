import { AddSurvey } from "../../../../../domain/usercases/add-survey"
import { SurveyMongoRepository } from "../../../../../infra/db/mongodb/survey/survey-mongo-repository"
import { DbAddSurvey } from "@/data/usercases/add-survey/db-add-survey"

export const makeDbAddSurvey = (): AddSurvey => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbAddSurvey(surveyMongoRepository)
}
