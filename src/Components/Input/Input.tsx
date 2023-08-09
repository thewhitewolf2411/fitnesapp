import { Dispatch, SetStateAction, useReducer, useEffect } from 'react';
import { View, Text, TextInput, ViewStyle, TextStyle, StyleProp } from 'react-native';
import { validate, Validator } from "../../Helpers/Validate";
import { styles } from './InputStyles';

type InputAction =
  | { type: 'CHANGE'; val: string; validators: Validator[] }
  | { type: 'TOUCH' };

interface InputState {
  value: string;
  isValid: boolean;
  isTouched: boolean;
}

type ValidatorFn = (value: string) => boolean;

const inputReducer = (state: InputState, action: InputAction): InputState => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case 'TOUCH':
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

interface InputProps {
    id: string;
    label: string;
    initialValue?: string;
    initialValid?: boolean;
    validators: ValidatorFn[];
    onInput: (id: string, value: string, isValid: boolean) => void;
    element?: 'input' | 'textarea';
    type?: string;
    placeholder?: string;
    rows?: number;
    errorText: string;
    style?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
  }
  

const Input = (props:any) => {
    const [inputState, dispatch] = useReducer(inputReducer, {
      value: props.initialValue || '',
      isTouched: false,
      isValid: props.initialValid || false,
    });
  
    const { id, onInput } = props;
    const { value, isValid } = inputState;
  
    useEffect(() => {
      onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);
  
    const changeHandler = (text:string) => {
      dispatch({
        type: 'CHANGE',
        val: text,
        validators: props.validators,
      });
    };
  
    const touchHandler = () => {
      dispatch({ type: 'TOUCH' });
    };
  
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput
          onChangeText={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
          style={styles.input}
        />
        {!inputState.isValid && inputState.isTouched && <Text style={{ color: 'red' }}>{props.errorText}</Text>}
      </View>
    );
  };
  
export default Input;