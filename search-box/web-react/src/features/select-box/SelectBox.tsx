interface OptionsI {
  key: string,
  value: string
}

interface SelectBoxI {
  defaultTextOption: string,
  options: OptionsI[]
}

export default function SelectBox({ defaultTextOption, options }: SelectBoxI) {
  return (
    <select>
      <option value=""> {defaultTextOption} </option>
      {
        options.map((opt: OptionsI) => (
          <option key={opt.key} value={opt.key}>
            {opt.value}
          </option>
        ))
      }
    </select>
  )
}