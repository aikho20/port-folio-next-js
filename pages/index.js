
import Header from '../components/Layouts/Header'
import { experience, skillSet } from '../data/home';
import SocialMedia from '../components/Layouts/SocialMedial'
import { useTheme } from 'next-themes';

export default function Home() {

  
  return (
    <>
      <Header activePage={1}/>
      <div className='fixed w-10 z-10 right-0 bg-transparent'>
      <SocialMedia/></div>
      <main className='dark:bg-black-400 mx-auto max-w-7xl px-6 '>
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-20 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-white">
                  <span className="text-gray-600">
                    Check personal blog post.{" "}
                    <a href="/" className="font-semibold text-indigo-600">
                      <span className="absolute inset-0" aria-hidden="true" />
                      View <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Hi my name is Marco and welcome to my profile.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                A Front-End Developer is responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages.
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <a
                    href="mailto:marco.deguzman.ico@gmail.com"
                    className="inline-block rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-0 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:ring-pink-700"
                  >
                    Send Message{" "}
                    <span className="text-indigo-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                  <a
                    href="/Information"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 dark:text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-white"
                  >
                    View Information{" "}
                    <span className="text-gray-400" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
          
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="p-1 flex flex-col justify-evenly md:flex-row">
          <div className="p-2 md:w-2/4 w-full flex flex-col item-start md:items-end">
            <h1 className="p-2">Skills and Technology</h1>
            <ul class="w-full space-y-1 text-gray-500 list-inside dark:text-gray-400">
              
            {skillSet.map(items=>{
              return(           <li key={items.title}class="flex items-center">
                <div className="flex flex-col w-full item-start md:items-end px-5">
                  {items.title}
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-4 dark:bg-gray-700 mt-2">
                    <div className={`bg-indigo-600 h-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500`} style={{width:items.performance}}></div>
                  </div>
                </div>
              </li>
              )
            })}
              
            </ul>
          </div>
          <div className="p-2 md:w-2/4 w-full  block">
            <h1 className="p-2">Work Experience</h1>
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
            {experience.map(items=>{
              return(
                
              <li key={items.title} class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {items.date}
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  {items.title}
                </h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 whitespace-pre-wrap">
             {items.description}
                </p>
                </li>
              )
            })}
           
             
              
            </ol>
          </div>
          
        </div>
        
      </main>
    </>
  );
}
