import React from 'react'

const InputGroup = () => {
  return (
    <label className={styles.formControl + ' relative'}>
      <div className='label pb-0'>
        <span className='label-text-alt text-sm'>Nombre</span>
      </div>
      <input
        {...register('nombre', { required: 'Éste campo es requerido' })}
        className={classNames(styles.input, {
          'input-error': errors.nombre
        })}
        type='text'
        placeholder='Nombre'
      />
      {errors.nombre?.message?.length
        ? (<span className={styles.error}>
          {errors.nombre?.message}
           </span>)
        : null}
    </label>
  )
}

export default InputGroup
