import { PaperClipIcon } from '@heroicons/react/20/solid'
import Header from '../../components/Layouts/Header'
import { information } from '../../data/information'
import SocialMedia from '../../components/Layouts/SocialMedial'
export default function Information() {
  return (<>
    <Header activePage={3}/>
    <div className='fixed w-10 z-10 right-0 bg-transparent'>
      <SocialMedia/></div>
    <div className="mx-auto max-w-7xl px-6 overflow-hidden dark:bg-black-400 shadow sm:rounded-lg ">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] ">
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
      <div className="border-t border-gray-200">
        <dl>
          {information.map((items,index)=>{
            return(
            <div key={index} className={`bg-transparent px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
            <dt className="text-sm font-medium text-gray-500">{items.title}</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 dark:text-gray-400">{items.details}</dd>
          </div>)
          })}
          
        </dl>
      </div>
    </div>
    </>
  )
}