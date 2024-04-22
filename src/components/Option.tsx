type OptionProps = {
  labelText: string
  inputType: string,
  id: string,
}


export const Option = ({ labelText, inputType, id }: OptionProps) => {

  return (
    <li className="variant-wrapper">
      <input required type={inputType} name="variant" id={id} />
      <label htmlFor={id}>{labelText}</label>
    </li>
  );
};


