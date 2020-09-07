import { makeAddSurveyValidation } from './add-survey-validation-factory'
import { Validation } from '../../../../presentation/protocols/validation'
import { ValidationComposite, RequiredFieldsValidation } from '../../../../validation/validators'

jest.mock('../../../../validation/validators/validaton-composite')

describe('AddSurveyValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeAddSurveyValidation()
    const validations: Validation[] = []
    for (const field of ['question', 'answers']) {
      validations.push(new RequiredFieldsValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
