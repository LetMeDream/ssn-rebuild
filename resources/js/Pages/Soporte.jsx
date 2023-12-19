import { Head } from "@inertiajs/react"

const Soporte = ({ props }) => {
  const styles = {
		welcome: ' mx-auto w-full p-1 bg-general-gray h-[260px] top-[40px] flex items-center flex-col justify-around relative shadow-md',
		logoImg: ' w-[85px]',
    form: 'flex flex-col items-center justify-center relative top-[80px] lg:w-[600px] mx-auto',
    input: 'input input-sm rounded-[4px] px-4 pt-5 pb-4 input-bordered w-full max-w-full',
    formControl: 'form-control w-full max-w-lg mb-1',
    radio: 'radio border-gray-400 checked:bg-blue-400 radio-xs',
    textArea: 'textarea textarea-bordered textarea-sm w-full max-w-full rounded-[4px] resize-none',
    sendBtn: 'btn btn-sm btn-outline w-full max-w-lg my-2 mb-6 hover:bg-blue-400 hover:border-transparent border-blue-400 text-blue-400 rounded-[4px] h-[40px]'
	}
  console.log(props)

  return (
    <>
      <Head title='Soporte' />
      <div className=" bg-clearBlue min-h-screen">
        <div className={styles.welcome + ' '}>
						<p className='relative text-[22px] top-[20px] text-muted font-roboto font-regular' >
              Has escogido nuestro
            </p>
						<img src='images/reparacion.png' className={styles.logoImg} alt="SSN logo" />
						<p className='text-[16px] relative bottom-[1.6rem] font-roboto font-regular'>
              Servicio técnico para PCs y Laptops.
            </p>
				</div>
        <h2 className="relative top-[70px] text-center text-muted text-[22px] font-medium">
          Completa éste formulario y te contactaremos cuanto antes
        </h2>
        <form className={styles.form}>
          {/* Name */}
          <label className={styles.formControl}>
            <div className="label">
              <span className="label-text-alt text-sm">Nombre</span>
            </div>
            <input type="text" placeholder="Nombre" className={styles.input} />
          </label>
          {/* Lastname */}
          <label className={styles.formControl}>
            <div className="label">
              <span className="label-text-alt text-sm">Apellido</span>
            </div>
            <input type="text" placeholder="Apellido" className={styles.input} />
          </label>
          {/* Phone Number */}
          <label className={styles.formControl}>
            <div className="label">
              <span className="label-text-alt text-sm">Teléfono</span>
            </div>
            <input type="number" placeholder="0414-1234567" className={styles.input} />
          </label>
          {/* Whatsapp */}
          <label className={styles.formControl}>
            <div className="label">
              <span className="label-text-alt text-sm">¿Tienes Whatsapp?</span>
            </div>
            <div className='flex justify-center gap-40'>
              <label className="flex gap-2 items-center">
                <p className="text-muted">Sí</p>
                <input type="radio" name="whatsApp" className={styles.radio} checked />
              </label>
              <label className="flex gap-2 items-center">
                <p className="text-muted">No</p>
                <input type="radio" name="whatsApp" className={styles.radio} />
              </label>
            </div>
          </label>
          {/* Mail */}
          <label className={styles.formControl}>
            <div className="label">
              <span className="label-text-alt text-sm">Correo</span>
            </div>
            <input type="mail" placeholder="email@mail.com" className={styles.input} />
          </label>
          {/* What kind of computer do you have */}
          <label className={styles.formControl}>
            <div className="label">
              <span className="label-text-alt text-sm">¿Qué equipo tienes?</span>
            </div>
            <div className='flex justify-center gap-40'>
              <label className="flex gap-2 items-center">
                <p className="text-muted">Computadora</p>
                <input type="radio" name="equipo" className={styles.radio} checked />
              </label>
              <label className="flex gap-2 items-center">
                <p className="text-muted">Laptop</p>
                <input type="radio" name="equipo" className={styles.radio} />
              </label>
            </div>
          </label>
          {/* Message */}
          <label className={styles.formControl}>
            <div className="label">
              <span className="label-text-alt text-sm">Mensaje</span>
            </div>
            <textarea class={styles.textArea} ></textarea>
          </label>

          {/* Submit */}
          <button className={styles.sendBtn}>Enviar</button>


        </form>
      </div>
    </>
  )
}

export default Soporte