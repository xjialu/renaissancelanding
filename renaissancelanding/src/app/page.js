import Image from 'next/image'
import { MdOutlineAccessTime } from "react-icons/md";
import { MdLightbulbOutline } from "react-icons/md";
import { MdAirplanemodeActive } from "react-icons/md";


const infoItems = [
    { text: "4.5 year Dual Degree", icon: <MdOutlineAccessTime className="h-20 w-20" /> },
    { text: "NTU Premier Scholars Programme", icon: <MdLightbulbOutline className="h-20 w-20" /> },
    { text: "Year 3 Exchange @ Partner Universities", icon: <MdAirplanemodeActive className="h-20 w-20" /> },
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center xl:p-10 p-2">
      <div className="z-10 max-w-5xl w-full items-center justify-start font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex xl:h-24 lg:h-24 h-24 w-full justify-center lg:static lg:w-auto  lg:rounded-xl lg:p-4">
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
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <Image
              src="/ntu.png"
              alt="NTU Logo"
              width={200}
              height={24}
              priority
            />
        </div>
      </div>

      <div className="relative ml-6 mt-48 flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <a className="font-bold xl:text-5xl lg:text-5xl text-3xl justify-start items-center w-full">
          We are the Renaissance Engineering Programme.
        </a>
        <a className="w-full mt-5">
          A flagship engineering programme by Nanyang Technological University.
        </a>
      </div>
      <div className="grid grid-cols-5 grid-rows-4 gap-3 w-full xl:p-52 p-6">
        <div className="rounded-lg overflow-hidden border border-white col-span-3 row-span-4">
            <Image
                src="/test.jpg"
                alt="test"
                className="object-cover w-full h-full rounded"
                width={400}
                height={300}
                priority
            />
        </div>
        <div className="rounded-lg overflow-hidden border border-white col-span-2 row-span-2">
            <Image
                src="/test.jpg"
                alt="test"
                className="object-cover rounded"
                width={500}
                height={200}
                priority
            />
        </div>
          <div className="rounded-lg overflow-hidden border border-white col-span-2 row-span-2">
              <Image
                  src="/test.jpg"
                  alt="test"
                  className="object-cover rounded"
                  width={500}
                  height={200}
                  priority
              />
          </div>
      </div>
        <div className="grid xl:grid-cols-3 grid-rows-3 gap-6 place-items-center">
            {infoItems.map((item, index) => (
                <div key={index} className="flex xl:flex-col flex-row place-items-center gap-3">
                    {item.icon}
                    <a className="text-2xl text-start xl:text-center">{item.text}</a>
                </div>
            ))}
        </div>
    </main>
  )
}
