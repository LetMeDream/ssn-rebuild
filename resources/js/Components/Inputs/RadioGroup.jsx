import React from 'react'
import classNames from 'classnames'

const RadioGroup = ({ register, name, options, label, errors }) => {
  const styles = {
    formControl: ' relative form-control w-full max-w-lg mb-2',
    radio: 'radio border-gray-400 checked:bg-blue-400 radio-xs',
    error: 'absolute text-red-500 text-xs right-0 bottom-[-20px]'
  }
  return (
    <label className={styles.formControl}>
      <div className='label pb-0 flex justify-start'>
        <span className='label-text-alt text-sm'>{label}</span>
        {errors[name.toLowerCase()]?.message.length ? (<span className='text-red-400'>*</span>) : null}

      </div>
      <div className='flex justify-center gap-40'>
        {
          options.map(option => {
            return (
              <label key={option} className='flex gap-2 items-center'>
                <p
                  className={classNames('text-muted', {
                    '': errors[name]
                  })}
                >
                  {option[0].toUpperCase() + option.slice(1)}
                </p>
                <input
                  {...register(name, { required: 'Éste campo es requerido' })}
                  value={option}
                  type='radio'
                  name={name}
                  className={classNames(styles.radio, {
                    'border-rose-600': errors[name]
                  })}
                />
              </label>
            )
          })
        }
      </div>
      {/* {errors[name]?.message?.length
        ? (
          <span className={styles.error}>
            {errors[name]?.message}
          </span>
          )
        : null} */}
    </label>
  )
}

export default RadioGroup
