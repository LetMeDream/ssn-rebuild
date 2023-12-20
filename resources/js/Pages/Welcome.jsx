import { Link, Head } from '@inertiajs/react'

export default function Welcome ({ auth, laravelVersion, phpVersion }) {
  const styles = {
    welcome: ' mx-auto w-full p-1 bg-general-gray h-[280px] top-[20px] flex items-center flex-col justify-around relative',
    logoImg: ' w-[120px]',
    servicesContainer: 'p-1 w-[80%] lg:w-[70%]  flex justify-center relative flex flex-col ',
    servicesRowInner: ' flex gap-[60px] lg:gap-[100px] justify-between mb-6 ',
    servicesRowOuter: ' flex flex-col ',
    service: ' w-[80%] md:w-full group flex flex-col items-center',
    styledP: ' text-center cursor-pointer group-hover:text-blue-800 text-[15px] transition-all'
  }

  return (
    <>
      <Head title='Welcome' />
      <div className=' flex flex-col items-center justify-between min-h-screen'>
        {/* <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
							{auth.user ? (
									<Link
											href={route('dashboard')}
											className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
									>
											Dashboard
									</Link>
							) : (
									<>
											<Link
													href={route('login')}
													className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
											>
													Log in
											</Link>

											<Link
													href={route('register')}
													className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
											>
													Register
											</Link>
									</>
							)}
					</div> */}

        <div className={styles.welcome}>
          <img src='images/ssn.png' className={styles.logoImg} alt='SSN logo' />
          <p className='relative bottom-[1rem] text-[26px] font-roboto font-semibold'>Bienvenido a Sistemas y Servicios Nuñez</p>
          <p className='text-[16px] relative bottom-[1.6rem] font-roboto font-semibold'>¿Con qué necesitas ayuda?</p>
        </div>

        <div className={styles.servicesContainer}>
          <div className={styles.servicesRowOuter}>
            <div className={styles.servicesRowInner}>
              <Link href={route('soporte')} className={styles.service}>
                <img className=' w-[64px] cursor-pointer' src='images/reparacion.png' alt='Soporte técnico para pc y laptop.' />
                <p className={styles.styledP}>
                  Soporte técnico para pc y laptop.
                </p>
              </Link>
              <div className={styles.service}>
                <img className=' w-[64px] cursor-pointer' src='images/hosting.png' alt='Soporte técnico para pc y laptop.' />
                <p className={styles.styledP}>
                  Hosting y dominios.
                </p>
              </div>
              <div className={styles.service}>
                <img className=' w-[64px] cursor-pointer' src='images/desarollo.png' alt='Soporte técnico para pc y laptop.' />
                <p className={styles.styledP}>
                  Desarrollo de software y web.
                </p>
              </div>
            </div>
            <div className={styles.servicesRowInner + ''}>
              <div className={styles.service}>
                <img className=' w-[64px] cursor-pointer' src='images/cursos.png' alt='Soporte técnico para pc y laptop.' />
                <p className={styles.styledP}>
                  Cursos y capacitaciones.
                </p>
              </div>
              <div className={styles.service}>
                <img className=' w-[64px] cursor-pointer' src='images/diseño.png' alt='Soporte técnico para pc y laptop.' />
                <p className={styles.styledP}>
                  Diseño gráfico
                </p>
              </div>
              <div className={styles.service}>
                <img className=' w-[64px] cursor-pointer' src='images/marketing.png' alt='Soporte técnico para pc y laptop.' />
                <p className={styles.styledP}>
                  Marketing
                </p>
              </div>
            </div>
          </div>

        </div>

        <footer className=' w-full bg-general-gray bottom-0 p-[1rem] text-[0.9rem] text-center text-[#6c757d]'>
          2023© | WhatsApp: +58 04249733776 | Correo: sistemasyserviciosnunez@gmail.com | Aviso legal
        </footer>

      </div>

      <style>{`
					.bg-dots-darker {
					}
					@media (prefers-color-scheme: dark) {
							.dark\\:bg-dots-lighter {
							}
					}
			`}
      </style>
    </>
  )
}
