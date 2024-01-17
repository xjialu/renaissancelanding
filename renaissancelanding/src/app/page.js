import Image from 'next/image'
import { MdOutlineAccessTime } from "react-icons/md";
import { MdLightbulbOutline } from "react-icons/md";
import { MdAirplanemodeActive } from "react-icons/md";
import BachelorCard from "../../components/bachelorCard";
import MastersCard from "../../components/mastersCard";
import Goodbye from "../../components/goodbye";
import SchoolsCard from "../../components/schoolsCard";


const infoItems = [
    { text: "4.5 year Dual Degree", icon: <MdOutlineAccessTime className="xl:h-20 xl:w-20 sm:w-10 sm:h-10 w-12 h-12" /> },
    { text: "NTU Premier Scholars Programme", icon: <MdLightbulbOutline className="xl:h-20 xl:w-20 sm:w-10 sm:h-10 w-12 h-12" /> },
    { text: "Year 3 Exchange @ Partner Universities", icon: <MdAirplanemodeActive className="xl:h-20 xl:w-20 sm:w-10 sm:h-10 w-12 h-12" /> },
];
export default function Home() {
  return (
    <main className="flex flex-col items-center xl:p-10 p-2">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex xl:h-24 lg:h-24 h-28 w-full justify-center lg:static lg:w-auto lg:rounded-xl lg:p-4 bg-gradient-to-b bg from-white via-white dark:from-black dark:via-black lg:bg-none">
          <Image
              src="/RELogo-black.png"
              alt="REP Logo"
              className="dark:invert object-cover"
              width={200}
              height={24}
              priority
          />
          </div>
          <div className="xl:border xl:h-20 border-gray-400 ">

          </div>
        <div className="fixed bottom-0 left-0 flex h-32 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <Image
              src="/ntu.png"
              alt="NTU Logo"
              width={200}
              height={24}
              priority
            />
        </div>
      </div>
      <div className="w-full">
          <div className="ml-6 mt-36 xl:mt-48 flex flex-col place-items-center">
              <a className="xl:font-bold font-semibold tracking-tight xl:text-5xl lg:text-5xl text-3xl justify-start items-center w-full h-24 bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
                  We are Renaissance Engineering Programme.
              </a>
              <a className="w-full mt-5 tracking-tight">
                  A flagship engineering programme by Nanyang Technological University.
              </a>
          </div>
          <div className="grid grid-cols-5 grid-rows-4 gap-3 w-full xl:p-52 p-6">
              <div className="rounded-lg overflow-hidden border border-white col-span-3 row-span-4">
                  <Image
                      src="/R12.jpg"
                      alt="r12"
                      className="object-cover w-full h-full rounded"
                      width={400}
                      height={300}
                      priority
                  />
              </div>
              <div className="rounded-lg overflow-hidden border border-white col-span-2 row-span-2">
                  <Image
                      src="/R13.jpg"
                      alt="r13"
                      className="object-cover rounded"
                      width={500}
                      height={200}
                      priority
                  />
              </div>
              <div className="rounded-lg overflow-hidden border border-white col-span-2 row-span-2">
                  <Image
                      src="/R9.jpg"
                      alt="r9"
                      className="object-cover rounded"
                      width={500}
                      height={200}
                      priority
                  />
              </div>
          </div>
          <div className="grid xl:grid-cols-3 grid-rows-3 gap-6 xl:place-items-center place-items-start px-5 xl:pl-0">
              {infoItems.map((item, index) => (
                  <div key={index} className="flex xl:flex-col flex-row place-items-center gap-3">
                      {item.icon}
                      <a className="text-lg xl:text-2xl text-start xl:text-center tracking-tight">{item.text}</a>
                  </div>
              ))}
          </div>
          <div className="relative mr-6 mt-16 mb-6 flex flex-col place-items-center">
              <a className="xl:font-bold font-semibold tracking-tight xl:text-5xl lg:text-5xl text-3xl text-end items-center w-full bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
                  A unique dual-degree programme.
              </a>
              <a className="w-full text-end mt-5 tracking-tight">
                  REP students are awarded a Bachelor of Engineering Science and a Masters of Science (Technology Management)
              </a>
          </div>
          <BachelorCard/>
          <MastersCard/>
          <div className="relative ml-6 mt-16 mb-6 flex flex-col place-items-center">
              <a className="xl:font-bold font-semibold tracking-tight xl:text-5xl lg:text-5xl text-3xl text-start items-center w-full bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                  Global perspective.
              </a>
              <a className="w-full text-start mt-5 tracking-tight">
                  Year 3 overseas study provides a one-of-a-kind global experience.
              </a>
          </div>
          <SchoolsCard/>
          <Goodbye/>
          <div className="h-48 w-full"/>
      </div>
    </main>
  )
}
