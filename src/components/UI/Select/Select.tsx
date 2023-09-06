import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import required from "../../../assets/svg/Required.svg";
import "./Select.scss";

type TInput = {
  item: any;
  errors: FieldErrors<FieldValues>;
  isSubmited: boolean;
  register: UseFormRegister<FieldValues>;
};

function Select({ item, errors, isSubmited, register }: TInput) {
  return (
    <>
      <div className="select__information-title">
        <p>{item.title}</p>
        {item.required && <img src={required} alt="required"></img>}
      </div>
      <div className="select__information-select">
      <select
        className={errors?.[item.register] && "invalidselect"}
        defaultValue={""}
        {...register(`${item.register}`, {
          required: item.required,
        })}
      >
        {item.maplist?.map((element: any, key: number) => (
          <option
            key={key}
            value={element.value}
            disabled={element.disabled}
            hidden={element.disabled}
          >
            {element.titel}
          </option>
        ))}
      </select>
      {errors?.[item.register] && <span role="alert">{item.invalid}</span>}
      </div>
      
    </>
  );
}

export { Select };
