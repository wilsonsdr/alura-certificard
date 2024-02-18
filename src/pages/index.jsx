import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <>
      <div className='flex h-screen items-center justify-center max-md:m-8 max-md:h-auto'>
        <div className='grid grid-cols-2 rounded-lg shadow-lg max-md:grid-cols-1'>
          <div className='flex flex-col gap-16 rounded-lg bg-blue-700 px-8 py-4 text-center text-white max-md:rounded-sm max-md:py-8'>
            <div className='flex flex-col items-center justify-center text-center'>
              <Image className='h-28 w-28 rounded-full border-2' src='/img/perfil.jpg' alt='foto-perfil' width={200} height={200} />
              <h1 className='mt-4 text-2xl font-bold'>Wilson Reis</h1>
              <span className='text-xl'>Software Developer</span>
            </div>
            <ul className='flex flex-col items-center justify-center gap-4 text-2xl'>
              <li className='ml-6 flex flex-row items-center gap-4'>
                <a className='text-3xl hover:text-blue-900' href='https://www.linkedin.com/in/wilsonsdr/' target='_blank'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <span>LinkedIn</span>
              </li>
              <li className='ml-3 flex flex-row items-center gap-4'>
                <a className='text-3xl hover:text-blue-900' href='https://github.com/wilsonsdr' target='_blank'>
                  <FontAwesomeIcon icon={faGithubSquare} />
                </a>
                <span>GitHub</span>
              </li>
              <li className='flex flex-row items-center gap-4'>
                <a className='text-3xl hover:text-blue-900' href='mailto:wilsonsdr@gmail.com' target='_blank'>
                  <FontAwesomeIcon icon={faGooglePlusSquare} />
                </a>
                <span>Gmail</span>
              </li>
            </ul>
            <span className='text-xl font-bold'>#aluraimmersion</span>
          </div>
          <div className='flex flex-col items-center justify-center gap-16 rounded-lg rounded-l-none bg-[#f7f7f7] px-8 py-4 text-center text-blue-700 max-md:rounded-sm max-md:py-8'>
            <h1 className='text-3xl font-bold text-blue-800'>My projects</h1>
            <ul className='flex flex-col gap-4 text-2xl'>
              <li>
                <a className='hover:text-blue-950' href='https://codepen.io/wilsonsdr/full/abGvPyO' target='_blank'>
                  🔢 Average calculator
                </a>
              </li>
              <li>
                <a className='hover:text-blue-950' href='https://codepen.io/wilsonsdr/full/PoeZxmw' target='_blank'>
                  💸 Currency converter
                </a>
              </li>
              <li>
                <a className='hover:text-blue-950' href='https://codepen.io/wilsonsdr/full/JjvKpOK' target='_blank'>
                  🔮 Mentalist
                </a>
              </li>
              <li>
                <a className='hover:text-blue-950' href='https://codepen.io/wilsonsdr/full/oNdWWaV' target='_blank'>
                  🎬 AluraFlix
                </a>
              </li>
              <li>
                <a className='hover:text-blue-950' href='https://codepen.io/wilsonsdr/full/QWrgRqw' target='_blank'>
                  🏆 Leaderboard
                </a>
              </li>
              <li>
                <a className='hover:text-blue-950' href='https://codepen.io/wilsonsdr/full/qBYVbvE' target='_blank'>
                  🃏 Top trumps
                </a>
              </li>
              <li>
                <a className='hover:text-blue-950' href='https://codepen.io/wilsonsdr/full/mdLqqyG' target='_blank'>
                  🌐 Certificard
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
