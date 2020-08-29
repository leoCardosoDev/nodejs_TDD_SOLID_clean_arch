import { ValidationComposite } from '../../presentation/helpers/validators/validaton-composite'
import { RequiredFielsValidation } from '../../presentation/helpers/validators/required-fields-validation'
import { Validation } from '../../presentation/helpers/validators/valitation'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFielsValidation(field))
  }
  return new ValidationComposite(validations)
}
