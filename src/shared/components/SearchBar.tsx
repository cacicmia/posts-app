import { FC, useContext, useState } from 'react'
import tw from 'twin.macro'
import Select, { SingleValue, StylesConfig } from 'react-select'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LogContext } from '../..'
import { IDropdownOption, User } from '../../types'
import { checkObject } from '../util'
const searchBarContainerStyle = css`
  ${tw`py-2 relative w-64`}
`

interface ISearchBarProps {
  users: User[]
  userId: number | undefined
  setUserId(id: number | undefined): void
}
export const selectStyle: StylesConfig<IDropdownOption, boolean> = {
  menu: (provided) => ({ ...provided, zIndex: 9999 }),
  control: (provided, state) => {
    // provided has CSSObject type
    // state has ControlProps type
    return {
      ...provided,
      borderColor: state.isFocused ? '#15803d' : '#E5E9EE',
      ':hover': {
        borderColor: state.isFocused ? '#15803d' : '#E5E9EE'
      },
      position: 'initial'
    }
  },
  option: (provided, state) => {
    return {
      ...provided,
      backgroundColor: state.isSelected ? '#15803d' : '#ffffff',
      color: state.isSelected ? '#ffffff' : '#000',

      ':hover': {
        backgroundColor: state.isSelected ? '#15803d' : '#E5E9EE',
        color: state.isSelected ? '#ffffff' : '#000'
      }
    }
  },
  dropdownIndicator: (base, state) => ({
    ...base,
    transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)'
  })
}
export const SearchBar: FC<ISearchBarProps> = (props) => {
  const logMessage = useContext<string | undefined>(LogContext)
  console.log(`${logMessage} ${SearchBar.name}`)
  const [inputValue, setInputValue] = useState<string | undefined>()
  const { users, userId, setUserId } = props
  const options = users.map((user: User) => ({
    label: user.name,
    value: user.id.toString()
  }))
  const filterOption = (option: IDropdownOption, inputValue: string) => {
    const { label, value } = option
    const user = users.find((opt) => opt.id === parseInt(value))
    if (!user) {
      return false
    }
    const ret = checkObject(user, inputValue)
    return ret
  }
  const selectedOption = options.find((o: IDropdownOption) => o.value === userId?.toString())

  return (
    <div css={searchBarContainerStyle}>
      <form>
        <Select
          isSearchable
          isClearable
          placeholder={'Search posts by user data'}
          styles={selectStyle}
          value={selectedOption}
          filterOption={filterOption}
          options={options}
          onChange={(selected?: any) => {
            setUserId(selected?.value ?? undefined)
            setInputValue(selected?.label ?? '')
          }}
        />
      </form>
    </div>
  )
}
