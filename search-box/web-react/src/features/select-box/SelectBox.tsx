import type { ChangeEventHandler } from "react"

interface OptionsI {
  key: string,
  value: string
}

interface SelectBoxI {
  defaultTextOption: string,
  options: OptionsI[],
  handleChange?: ChangeEventHandler<HTMLSelectElement>
}

export default function SelectBox({ defaultTextOption, options, handleChange }: SelectBoxI) {
  return (
    <select onChange={handleChange}>
      <option value=""> {defaultTextOption} </option>
      {
        options.map((opt: OptionsI) => (
          <option 
            key={opt.key} 
            value={opt.key}>
            {opt.value}
          </option>
        ))
      }
    </select>
  )
}