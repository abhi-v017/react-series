import React, { useId } from 'react'

function Select({
  options,
  label,
  classname,
  ...props
}, ref) {
  const id = useId()
  return (
    <div>
      {label && <label htmlFor={id} className=''></label>}
      <select
        id={id}
        {...props}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${classname}`}
        ref={ref}
      >
          {options?.map((option)=>{
            <option key={option} value={option}>
              {option}
            </option>
          })}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)
