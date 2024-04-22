type EmojiOptionProps ={
    optionText: string;
    optionImg: string;
    id:string;
    altText: string;

}



export const EmojiOption = ({optionText, optionImg, id, altText}: EmojiOptionProps) => {
    return (
        <li className="variant-wrapper">
        <input required type="radio" name="variant" id={id} />
        <label htmlFor={id}>
          <img src={optionImg} alt={altText} />
          <p>{optionText}</p>
        </label>
      </li>
    )
}