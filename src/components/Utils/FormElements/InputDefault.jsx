const InputDefault = ({ label, name, type, valueRef, isTextarea, ...props }) => {

  return (
    <div className={`wrapper-input ${isTextarea && 'is-textarea'} ${type === 'color' && 'input-color'}`}>
      <label className='form-label' htmlFor={name}>{label}</label>

      {isTextarea ?
        <textarea
          className='form-input'
          type={type}
          id={name}
          name={name}
          onBlur={() => valueRef && localStorage.setItem(`form-${name}`, valueRef.current.value)}
          ref={valueRef}
          {...props}
        />
        :
        <input
          className='form-input'
          type={type}
          id={name}
          name={name}
          onBlur={() => valueRef && localStorage.setItem(`form-${name}`, valueRef.current.value)}
          ref={valueRef}
          {...props}
        />
      }
    </div>
  )
}

export default InputDefault;