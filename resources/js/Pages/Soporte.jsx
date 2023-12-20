import { Head } from '@inertiajs/react'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import classNames from 'classnames'

const Soporte = () => {
  const styles = {
    welcome: ' mx-auto w-full p-1 bg-general-gray h-[260px] top-[40px] flex items-center flex-col justify-around relative shadow-md',
    logoImg: ' w-[85px]',
    form: 'flex flex-col items-center justify-center pt-[20px] lg:w-[600px] mx-auto',
    input: 'input input-sm rounded-[4px] px-4 pt-5 pb-4 input-bordered w-full max-w-full',
    formControl: 'form-control w-full max-w-lg mb-2',
    radio: 'radio border-gray-400 checked:bg-blue-400 radio-xs',
    textArea: 'textarea textarea-bordered textarea-sm w-full max-w-full rounded-[4px] resize-none',
    sendBtn: 'btn btn-sm btn-outline w-full max-w-lg my-2 mb-6 hover:bg-blue-400 hover:border-transparent border-blue-400 text-blue-400 rounded-[4px] h-[40px]',
    error: 'absolute text-red-500 text-xs right-0 bottom-[-20px]'

  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => console.log(data)

  useEffect(() => {
    console.log(errors)
  }, [errors])

  return (
    <>
      <Head title='Soporte' />
      <div className=' bg-clearBlue min-h-screen h-[calc(100%+80px)]'>
        <div className={styles.welcome + ' '}>
          <p className='relative text-[22px] top-[20px] text-muted font-roboto font-regular'>
            Has escogido nuestro
          </p>
          <img src='images/reparacion.png' className={styles.logoImg} alt='SSN logo' />
          <p className='text-[16px] relative bottom-[1.6rem] font-roboto font-regular'>
            Servicio técnico para PCs y Laptops.
          </p>
        </div>
        <h2 className=' pt-[70px] text-center text-muted text-[22px] font-medium'>
          Completa éste formulario y te contactaremos cuanto antes
        </h2>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Name */}
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
            {
              errors.nombre?.message?.length
                ? (<span className={styles.error}>
                  {errors.nombre?.message}
                </span>)
                : null
            }

          </label>
          {/* Lastname */}
          <label className={styles.formControl}>
            <div className='label pb-0'>
              <span className='label-text-alt text-sm'>Apellido</span>
            </div>
            <input {...register('apellido', { required: true })} type='text' placeholder='Apellido' className={styles.input} />
          </label>
          {/* Phone Number */}
          <label className={styles.formControl}>
            <div className='label pb-0'>
              <span className='label-text-alt text-sm'>Teléfono</span>
            </div>
            <input {...register('phone', { required: true })} type='number' placeholder='0414-1234567' className={styles.input} />
          </label>
          {/* Whatsapp */}
          <label className={styles.formControl}>
            <div className='label pb-0'>
              <span className='label-text-alt text-sm'>¿Tienes Whatsapp?</span>
            </div>
            <div className='flex justify-center gap-40'>
              <label className='flex gap-2 items-center'>
                <p className='text-muted'>Sí</p>
                <input {...register('whatsApp', { required: true })} value='yes' type='radio' name='whatsApp' className={styles.radio} />
              </label>
              <label className='flex gap-2 items-center'>
                <p className='text-muted'>No</p>
                <input {...register('whatsApp', { required: true })} value='no' type='radio' name='whatsApp' className={styles.radio} />
              </label>
            </div>
          </label>
          {/* Mail */}
          <label className={styles.formControl}>
            <div className='label pb-0'>
              <span className='label-text-alt text-sm'>Correo</span>
            </div>
            <input {...register('mail', { required: true })} type='mail' placeholder='email@mail.com' className={styles.input} />
          </label>
          {/* What kind of computer do you have */}
          <label className={styles.formControl}>
            <div className='label pb-0'>
              <span className='label-text-alt text-sm'>¿Qué equipo tienes?</span>
            </div>
            <div className='flex justify-center gap-40'>
              <label className='flex gap-2 items-center'>
                <p className='text-muted'>Computadora</p>
                <input {...register('computer', { required: true })} value='desktop' type='radio' name='computer' className={styles.radio} />
              </label>
              <label className='flex gap-2 items-center'>
                <p className='text-muted'>Laptop</p>
                <input {...register('computer', { required: true })} value='laptop' type='radio' name='computer' className={styles.radio} />
              </label>
            </div>
          </label>
          {/* Message */}
          <label className={styles.formControl}>
            <div className='label pb-0'>
              <span className='label-text-alt text-sm'>Mensaje</span>
            </div>
            <textarea {...register('message')} className={styles.textArea} />
          </label>

          {/* Submit */}
          <button className={styles.sendBtn}>Enviar</button>

        </form>
      </div>
    </>
  )
}

export default Soporte
