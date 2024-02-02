const RadioDefault = ({ label, options, name, ...props }) => {

  return (
    <div className={`wrapper-radio`}>
      <label className='form-label'>{label}</label>
      {options.map((item, index) => {
        return (
          <label key={`${name}-${item}`}>
            <input
              type='radio'
              name={name}
              value={item}
              onFocus={() => localStorage.setItem(`form-${name}`, item)}
              defaultChecked={localStorage.getItem(`form-${name}`) === item ? true : index === 0 ? true : false}
              {...props}
            />
            {item}
          </label>
        )
      })}
    </div>
  )
}

export default RadioDefault;