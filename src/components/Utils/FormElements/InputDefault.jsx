import React from "react"

const InputDefault = ({ label, name, type, valueRef, isTextarea, extraClass, legend, ...props }) => {

  const phoneMask = (value) => {
    if (!value) return ""
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d)(\d{4})$/, "$1-$2")
  }

  const handleBlur = () => {
    if (valueRef) {
      const formattedValue = phoneMask(valueRef.current.value);
      valueRef.current.value = formattedValue;
      localStorage.setItem(`form-${name}`, formattedValue);
    }
  };

  const handleKeyUp = () => {
    if (valueRef) {
      const formattedValue = phoneMask(valueRef.current.value);
      valueRef.current.value = formattedValue;
    }
  };

  const render = () => {
    if (isTextarea) {
      return (
        <textarea
          rows={4}
          className='form-input'
          type={type}
          id={name}
          name={name}
          onBlur={() => valueRef && localStorage.setItem(`form-${name}`, valueRef.current.value)}
          ref={valueRef}
          {...props}
        />
      )
    } else if (type === 'tel') {
      return (
        <input
          className='form-input'
          type='tel'
          maxLength={15}
          id={name}
          name={name}
          onBlur={handleBlur}
          onKeyUp={handleKeyUp}
          ref={valueRef}
          {...props}
        />
      )
    } else {
      return (
        <input
          className='form-input'
          type={type}
          id={name}
          name={name}
          onBlur={() => valueRef && localStorage.setItem(`form-${name}`, valueRef.current.value)}
          ref={valueRef}
          {...props}
        />
      )
    }
  }

  return (
    <div className={`wrapper-input ${isTextarea && 'is-textarea'} ${type === 'color' && 'input-color'} ${extraClass}`}>
      <label className='form-label' htmlFor={name}>{label}</label>
      {render()}
      <p className="text-suport">{legend}</p>
    </div>
  )
}

export default InputDefault;