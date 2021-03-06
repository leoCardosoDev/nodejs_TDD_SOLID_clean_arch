import { SurveyResultModel } from "@/domain/models/survey-result"
import { SaveSurveyResultModel } from "@/domain/usercases/survey-result/save-survey-result"

export interface SaveSurveyResultRepository {
  save (surveyData: SaveSurveyResultModel): Promise<SurveyResultModel>
}
