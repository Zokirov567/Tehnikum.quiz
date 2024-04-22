type AppInputProps = {
  inputLabel: string;
  id: string;
  inputType: string;
  inputPlaceholder: string;
  errorMessage: string;
  onChange: (e) => void;
  hasError:boolean;
};

export const AppInput = ({
  inputLabel,
  id,
  inputType,
  inputPlaceholder,
  errorMessage,
  onChange,
  hasError,
}: AppInputProps) => {
  return (
    <label className={`input-wrapper ${hasError && "_error"}`} htmlFor={id}>
      {inputLabel}
      <input
        onChange={(e) => onChange(e)}
        required
        type={inputType}
        name={id}
        id={id}
        placeholder={inputPlaceholder}

      />
      {hasError && <span id="error-message">{errorMessage}</span>}
    </label>
  );
};
