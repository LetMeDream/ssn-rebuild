import React from 'react'
import classNames from 'classnames'
import { IoAlertCircleOutline } from 'react-icons/io5'

const InputGroup = ({ register, errors, name, label, placeholder, type }) => {
  const styles = {
    input: 'input input-sm rounded-[4px] px-4 pt-5 pb-4 input-bordered w-full max-w-full relative',
    formControl: 'form-control w-full max-w-lg mb-2',
    error: 'absolute text-red-500 text-xs right-0 bottom-[-20px]'
  }

  return (
    <label className={styles.formControl + ' relative'}>
      <div className='label pb-0'>
        <span className='label-text-alt text-sm'>
          {label || name[0].toUpperCase() + name.slice(1)}
          {
            errors[name] ? (<span className='text-rose-500'>*</span>) : null
          }
        </span>
      </div>
      <input
        {...register(name.toLowerCase(), { required: 'Éste campo es requerido' })}
        className={classNames(styles.input, {
          'border-rose-500 active:border-rose-500 focus:border-rose-500 focus:outline-rose-200': errors[name]
        })}
        type={type || 'text'}
        placeholder={placeholder}
        autoComplete='off'
      />
      {errors[name]?.message?.length
        ? (
          <IoAlertCircleOutline
            className=' absolute right-2 bottom-[9px] text-xl text-rose-500 opacity-80'
          />
          )
        : null}
    </label>
  )
}

export default InputGroup
