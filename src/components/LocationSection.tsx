import type { ReactNode } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import fachadaImg from '../assets/frente.svg';
import mascoteImg from '../assets/mape-mix-mascote.png';
import risquinhosImg from '../assets/risquinhos.svg';

const WA_NUMBER = '5519984547023';
const WA_MSG = encodeURIComponent('Olá, Mape Mix! Gostaria de informações sobre o horário de funcionamento da loja.');
const MAPS_URL = 'https://www.google.com/maps/place/Mape+Mix+02/@-22.9312083,-47.0442984,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8cf58e3364a6f:0xf60b8c8e0551fc6d!8m2!3d-22.9312133!4d-47.0417235!16s%2Fg%2F11tf570l0z?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D';
const STORE_360_URL =
  'https://www.google.com/local/place/fid/0x94c8cf58e3364a6f:0xf60b8c8e0551fc6d/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkM4myKwiTMchJWqcLQLRL1-ITGjI-jlg-FwNsQjYejslG3gVpLKbpBTYKuioynYgODkMZ-1ZCr6keUxK7WEVxFCCIZpSLW7LLZQW8i-WvZXArmXk-RRg4BWUtHQlNO06W5kgbE5g%3Dw160-h106-k-no-pi-0-ya335.6318-ro0-fo100&ik=CAoSF0NJSE0wb2dLRUlDQWdJQy11cUxvMndF';

// No desktop (lg+), as medidas seguem a arte de 1774px: --u vale 1px nessa largura
// e encolhe junto com a tela, mantendo as proporções da referência.
const CONTAINER = 'mx-auto w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] lg:w-[calc(var(--u)*1634)]';

export default function LocationSection() {
  return (
    <section
      id="localizacao"
      className="relative isolate overflow-hidden bg-[#f7f7f8] pb-12 sm:pb-16 lg:pb-[calc(var(--u)*65)] lg:[--u:min(1px,calc(100vw/1774))]"
    >
      {/* Fonte manuscrita do "Estamos te esperando!" (o React 19 leva o link para o <head>) */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap" precedence="default" />

      {/* Fundo do banner */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[330px] overflow-hidden bg-[linear-gradient(100deg,#012a7a_0%,#01308f_55%,#012a7a_100%)] [clip-path:polygon(0_0,100%_0,100%_88%,0_100%)] sm:h-[420px] lg:h-[calc(var(--u)*470)] lg:[clip-path:polygon(0_0,100%_0,100%_calc(var(--u)*385),calc(100%-var(--u)*1100)_100%,0_100%)]"
      >
        <div className="absolute -left-40 top-24 h-[200px] w-[900px] -rotate-[38deg] bg-white/[0.05] lg:-left-[calc(var(--u)*160)] lg:top-[calc(var(--u)*96)] lg:h-[calc(var(--u)*200)] lg:w-[calc(var(--u)*900)]" />
        <div className="absolute inset-y-0 right-0 w-[60%] [clip-path:polygon(48%_0,100%_0,100%_100%,0_100%)] lg:left-[calc(50%+var(--u)*106)] lg:w-auto lg:[clip-path:polygon(calc(var(--u)*375)_0,100%_0,100%_100%,0_100%)]">
          <img
            src={fachadaImg}
            alt=""
            className="absolute inset-0 h-full w-full scale-110 object-cover object-[62%_30%] blur-[12px] saturate-[1.1]"
          />
          <div className="absolute inset-0 bg-[#012a7a]/45" />
        </div>
        <div className="absolute left-0 top-0 h-[30px] w-[32px] bg-[#FE511D] [clip-path:polygon(0_0,100%_0,0_100%)] sm:h-[56px] sm:w-[60px] lg:h-[calc(var(--u)*120)] lg:w-[calc(var(--u)*125)]" />
      </div>
      <div
        aria-hidden="true"
        className="absolute left-0 top-[320px] hidden h-[230px] w-[110px] bg-[#FE511D] [clip-path:polygon(0_0,100%_55%,0_100%)] sm:block lg:top-[calc(var(--u)*320)] lg:h-[calc(var(--u)*230)] lg:w-[calc(var(--u)*110)]"
      />

      {/* Conteúdo do banner */}
      <div className={`relative ${CONTAINER}`}>
        <div className="relative z-10 min-h-[250px] pt-10 sm:min-h-[300px] sm:pt-16 lg:ml-[calc(var(--u)*113)] lg:min-h-[calc(var(--u)*307)] lg:pt-[calc(var(--u)*80)]">
          <div className="relative max-w-[calc(100%-min(204px,52.5vw))] sm:max-w-[54%] lg:max-w-none">
            <p className="font-display text-[0.68rem] font-semibold uppercase leading-tight tracking-[0.02em] text-[#FC730F] sm:text-sm lg:text-[calc(var(--u)*18)]">
              Sua loja de confiança em Campinas
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-[-0.025em] text-white sm:mt-5 sm:text-5xl lg:mt-[calc(var(--u)*8)] lg:text-[calc(var(--u)*64)] lg:leading-[1.08]">
              Venha nos{' '}
              <span className="relative inline-block whitespace-nowrap text-[#FE6200]">
                Visitar!
                <img
                  src={risquinhosImg}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[calc(100%+0.1em)] -top-[0.23em] h-[0.7em] w-auto select-none sm:left-[calc(100%-0.2em)] sm:-top-[0.43em]"
                />
              </span>
            </h2>
            <p className="mt-5 max-w-[540px] text-[0.8rem] leading-snug text-white sm:mt-6 sm:text-lg lg:mt-[calc(var(--u)*12)] lg:max-w-[calc(var(--u)*540)] lg:text-[calc(var(--u)*23)] lg:leading-[1.27]">
              Uma loja completa, com atendimento de quem entende do assunto.
            </p>
          </div>
        </div>

        <img
          src={mascoteImg}
          alt="Mascote da Mape Mix apontando para o convite de visita"
          className="pointer-events-none absolute bottom-[-28px] right-0 z-0 w-[min(210px,54vw)] sm:right-0 sm:bottom-auto sm:top-[12px] sm:w-[44vw] sm:max-w-[360px] lg:top-[calc(var(--u)*-8)] lg:right-[calc(var(--u)*82)] lg:h-auto lg:w-[calc(var(--u)*420)]"
        />
        <div style={{ fontFamily: "'Kalam', 'Segoe Script', cursive" }} className="absolute z-10 hidden -rotate-[8deg] text-center font-bold italic leading-[0.98] text-white lg:-right-[calc(var(--u)*58)] lg:top-[calc(var(--u)*110)] lg:block lg:text-[calc(var(--u)*29)]">
          <span className="relative inline-block">
            Estamos
            <img
              src={risquinhosImg}
              alt=""
              aria-hidden="true"
              style={{ left: 'calc(100% - 0.3em)', top: '-0.57em', height: '1.2em' }}
              className="pointer-events-none absolute w-auto select-none"
            />
          </span>
          <br />
          te esperando!
          <svg aria-hidden="true" viewBox="0 0 140 20" className="mx-auto -mt-[0.12em] block h-[0.65em] w-[4.6em] text-[#FE6200]">
            <path d="M4 16 C 45 9, 95 5, 136 4" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Card */}
      <div className={`relative z-20 ${CONTAINER}`}>
        <div className="grid overflow-hidden rounded-[1.5rem] bg-white shadow-[0_18px_50px_rgba(0,26,114,0.12)] sm:rounded-[1.75rem] xl:grid-cols-[758fr_876fr] xl:rounded-[calc(var(--u)*28)]">
          <div className="p-3 sm:p-4 xl:pb-[calc(var(--u)*19)] xl:pl-[calc(var(--u)*22)] xl:pr-[calc(var(--u)*21)] xl:pt-[calc(var(--u)*16)]">
            <div className="relative h-[230px] overflow-hidden rounded-[1.1rem] bg-[#001A72] sm:h-[400px] xl:h-full xl:min-h-[calc(var(--u)*480)] xl:rounded-[calc(var(--u)*20)]">
              <img
                src={fachadaImg}
                alt="Fachada da Mape Mix em Campinas"
                className="absolute inset-0 h-full w-full object-cover object-[center_0%]"
              />
              <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-md sm:bottom-5 sm:left-5 xl:bottom-[calc(var(--u)*20)] xl:left-[calc(var(--u)*20)]">
                <span>
                  <span className="mt-0.5 block font-display text-[0.8rem] text-white sm:text-[1.05rem] xl:text-[max(12px,calc(var(--u)*17.5))]">Vila Paraíso, Campinas/SP</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col border-t border-slate-100 p-4 sm:p-8 xl:border-l xl:border-t-0 xl:pb-[calc(var(--u)*35)] xl:pl-[calc(var(--u)*32)] xl:pr-[calc(var(--u)*30)] xl:pt-[calc(var(--u)*31)]">
            <ul className="font-display text-[0.92rem] font-medium leading-[1.3] text-[#0e2980] sm:text-lg xl:text-[max(14px,calc(var(--u)*19.8))]">
              <li className="mb-4 flex items-start gap-3 sm:gap-4 xl:mb-[calc(var(--u)*14)] xl:gap-[calc(var(--u)*18)]">
                <IconCircle>
                  <MapPin className="h-1/2 w-1/2" strokeWidth={2.4} />
                </IconCircle>
                <p className="max-w-[440px] pt-1.5 xl:max-w-[calc(var(--u)*440)] xl:pt-[calc(var(--u)*4)] xl:leading-[1.25]">
                  Av. Francisco de Angelis, 1244 - Vila Paraíso, Campinas/SP.
                </p>
              </li>
              <li className="mb-4 flex items-center gap-3 sm:gap-4 xl:mb-[calc(var(--u)*14)] xl:gap-[calc(var(--u)*18)]">
                <IconCircle>
                  <Clock className="h-1/2 w-1/2" strokeWidth={2.4} />
                </IconCircle>
                <p>Seg a Sex: 07:30 - 17:30 | Sáb: 08:00 - 13:00</p>
              </li>
              <li className="flex items-center gap-3 sm:gap-4 xl:gap-[calc(var(--u)*18)]">
                <IconCircle>
                  <Phone className="h-[45%] w-[45%]" fill="currentColor" strokeWidth={0} />
                </IconCircle>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#FE6200]"
                >
                  +55 19 98454-7023
                </a>
              </li>
            </ul>

            <div className="mt-4 h-52 w-full overflow-hidden rounded-2xl shadow-[0_6px_18px_rgba(0,26,114,0.1)] sm:h-64 xl:mt-[calc(var(--u)*14)] xl:h-auto xl:min-h-[max(160px,calc(var(--u)*217))] xl:flex-1 xl:rounded-[calc(var(--u)*16)]">
              <iframe
                src="https://maps.google.com/maps?q=-22.9312133,-47.0417235&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Mape Mix em Campinas"
              />
            </div>

            <div className="mt-4 grid gap-3 font-display font-semibold text-white sm:grid-cols-[375fr_420fr] sm:gap-5 sm:text-lg xl:mt-[calc(var(--u)*18)] xl:gap-[calc(var(--u)*20)] xl:text-[max(14px,calc(var(--u)*19))]">
              <a
                href={STORE_360_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[52px] items-center justify-center gap-3 rounded-full bg-[#012c80] px-4 transition-colors hover:bg-[#0025a8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE6200] sm:h-[57px] xl:h-[max(44px,calc(var(--u)*57))]"
              >
                <Navigation className="h-[1.05em] w-[1.05em]" fill="currentColor" />
                Ver Loja 360°
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[52px] items-center justify-center gap-3 rounded-full bg-[#FE6301] px-4 transition-colors hover:bg-[#d94300] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001A72] sm:h-[57px] xl:h-[max(44px,calc(var(--u)*57))]"
              >
                <MapPin className="h-[1.05em] w-[1.05em] [&_circle]:fill-[#FE6301]" fill="currentColor" />
                Como Chegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconCircle({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FE6200] text-white sm:h-11 sm:w-11 xl:h-[max(34px,calc(var(--u)*44))] xl:w-[max(34px,calc(var(--u)*44))]">
      {children}
    </span>
  );
}
