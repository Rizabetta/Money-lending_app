import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import required from "../../../assets/svg/Required.svg";
import valid from "../../../assets/svg/Valid.svg";
import invalid from "../../../assets/svg/Invalid.svg";
import "./Input.scss";

type TInput = {
  item: any;
  errors: FieldErrors<FieldValues>;
  isSubmited: boolean;
  register: UseFormRegister<FieldValues>;
};

function Input({ item, errors, isSubmited, register }: TInput) {
  return (
    <>
      <div className="input__information-title">
        <p>{item.title}</p>
        {item.required && <img src={required} alt="required"></img>}
      </div>
      <div className="information-input">
        <label>
          <input 
            className={errors?.[item.register] && "invalidinput"}
            type={item.type}
            id={item.register}
            placeholder={item.placeholder}
            {...register(`${item.register}`, {
              required: item.required,
              max: item.max,
              min: item.min,
              maxLength: item.maxLength,
              minLength: item.minLength,
              pattern: item.pattern,
            })}
          />
          {isSubmited &&
            (errors?.[item.register] ? (
              <img src={invalid} alt="invalid"></img>
            ) : (
              <img src={valid} alt="valid"></img>
            ))}
        </label>
        {errors?.[item.register] && <span role="alert">{item.invalid}</span>}
      </div>
    </>
  );
}

export { Input };
