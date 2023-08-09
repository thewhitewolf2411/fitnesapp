type ValidatorType =
  | 'REQUIRE'
  | 'MINLENGTH'
  | 'MAXLENGTH'
  | 'MIN'
  | 'MAX'
  | 'EMAIL'
  | 'FILE';

export interface Validator {
  type: ValidatorType;
  val?: number; // Optional, only used for MINLENGTH, MAXLENGTH, MIN, and MAX
}

export const VALIDATOR_TYPE_REQUIRE: ValidatorType = 'REQUIRE';
export const VALIDATOR_TYPE_MINLENGTH: ValidatorType = 'MINLENGTH';
export const VALIDATOR_TYPE_MAXLENGTH: ValidatorType = 'MAXLENGTH';
export const VALIDATOR_TYPE_MIN: ValidatorType = 'MIN';
export const VALIDATOR_TYPE_MAX: ValidatorType = 'MAX';
export const VALIDATOR_TYPE_EMAIL: ValidatorType = 'EMAIL';
export const VALIDATOR_TYPE_FILE: ValidatorType = 'FILE';

export const VALIDATOR_REQUIRE = (): Validator => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_FILE = (): Validator => ({ type: VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = (val: number): Validator => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val: val,
});
export const VALIDATOR_MAXLENGTH = (val: number): Validator => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val: val,
});
export const VALIDATOR_MIN = (val: number): Validator => ({ type: VALIDATOR_TYPE_MIN, val: val });
export const VALIDATOR_MAX = (val: number): Validator => ({ type: VALIDATOR_TYPE_MAX, val: val });
export const VALIDATOR_EMAIL = (): Validator => ({ type: VALIDATOR_TYPE_EMAIL });

export const validate = (value: string, validators: Validator[]): boolean => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.val!;
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val!;
    }
    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && +value >= validator.val!;
    }
    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && +value <= validator.val!;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
  }
  return isValid;
};
