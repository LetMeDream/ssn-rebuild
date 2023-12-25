import { Head, router, usePage } from '@inertiajs/react'
import { useForm } from 'react-hook-form'
import InputGroup from '@/Components/Inputs/InputGroup'
import RadioGroup from '@/Components/Inputs/RadioGroup'
import { notification, Alert } from 'antd'
import { useEffect, useState } from 'react'

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
    formState: { errors },
    trigger, getValues, reset
  } = useForm()

  const onSubmit = () => {
    router.post('soporte', getValues())
  }

  const validate = async () => {
    if (!await trigger()) {
      notification.error({
        message: 'Oops!',
        description: 'Campos faltantes'
      })
    }
  }

  const { flash } = usePage().props

  useEffect(() => {
    if (flash?.message?.title?.length) {
      notification.success({
        message: flash?.message?.title,
        description: flash?.message?.description
      })
      setOpen(true)
      console.log(flash)
      reset()
    }
  }, [flash])

  const [open, setOpen] = useState(true)
  const onClose = function (e) {
    console.log(e, 'I was closed.')
    setOpen(false)
  }
  let alert
  if (flash?.message?.title?.length && open) {
    alert = (
      <>
        <div className='max-w-lg w-full'>
          <Alert
            className='mb-2 rounded-md p-4 py-2 w-full'
            message='Solicitud enviada. En breve nos contactaremos con usted.'
            type='success'
            closable
            onClose={onClose}
          />
        </div>
      </>
    )
  }

  return (
    <>
      <Head title='Soporte' />
      <div className=' bg-clearBlue min-h-screen h-[calc(100%+80px)] px-[.75rem]'>

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
          method='post'
        >
          {flash?.message?.title && alert}
          {/* Name */}
          <InputGroup
            register={register}
            errors={errors}
            name='nombre'
            placeholder='Nombre'
          />
          {/* Lastname */}
          <InputGroup
            register={register}
            errors={errors}
            name='apellido'
            placeholder='Apellido'
          />
          {/* Phone Number */}
          <InputGroup
            register={register}
            errors={errors}
            name='phone'
            label='Teléfono'
            placeholder='Teléfono'
            type='number'
          />
          {/* Whatsapp */}
          <RadioGroup
            register={register}
            name='whatsapp'
            label='¿Tienes Whatsapp?'
            options={['yes', 'no']}
            errors={errors}
          />
          {/* Mail */}
          {/* Phone Number */}
          <InputGroup
            register={register}
            errors={errors}
            name='mail'
            label='Correo'
            placeholder='Email@mail.co'
            type='mail'
          />
          {/* What kind of computer do you have */}
          <RadioGroup
            register={register}
            name='computer'
            label='¿Qué equipo posees?'
            options={['computadora', 'laptop']}
            errors={errors}
          />
          {/* Message */}
          <label className={styles.formControl}>
            <div className='label pb-0'>
              <span className='label-text-alt text-sm'>Mensaje</span>
            </div>
            <textarea {...register('message')} className={styles.textArea} />
          </label>

          {/* Submit */}
          <button onClick={validate} className={styles.sendBtn}>Enviar</button>

        </form>
      </div>
    </>
  )
}

export default Soporte
