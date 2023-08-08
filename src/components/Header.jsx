import React from 'react'
import '../components/header.css'

function Header() {
  return (
    // whole screen
    <div className='flex sm:inline-flex  w-screen  h-screen p-[32px] flex-row sm:flex-rows justify-center items-center gap-[32px] sm:gap-[27px] flex-shrink-0 '>

        {/* left side */}
        <div className='flex justify-center items-center flex-1 self-stretch '>
        

            {/* form content space */}
            <div className='flex w-[300px] flex-col items-start gap-[20px] bg-white'>    {/* 48px */}
                {/* head section */}
                <div className='flex flex-col items-start gap-[10px]'>  {/* 28 */}
                    <h1 className='font-sans text-4xl font-normal leading-normal tracking-wide'>Welcome Back👋</h1>
                    <p className='text-sm'>Today is a new day. It's your day. You shape it. Sign in to start managing your projects.</p>
                </div>
                  {/* initail form section */}
                <div className='flex w-[300px] flex-col items-center gap-5'>   {/* 12 */}

                  <div className='flex flex-col justify-center items-end gap-[10px] self-stretch'> {/* 24 */}
                     <form action="">
                        <div className='flex flex-col items-start gap-[4px] self-stretch'>  {/* 4 */}
                            <h3 className='font-normal text-sm'>Email</h3>
                            <input type="text" name="" id="" className='w-[300px] height-[48px] flex-shrink-0 border-1-gray bg-slate-100 rounded-[12px]'placeholder='Example@email.com'/>
                        </div>
                        <div className='flex flex-col items-start gap-[4px] self-stretch pt-3'>
                            <h3 className='font-normal text-sm'>Password</h3>
                            <input type="password" name="" id="" className='w-[300px] height-[48px] flex-shrink-0 border-1-gray bg-slate-100 rounded-[12px]'placeholder='At least 8 characters'/>
                        </div>
                      </form>
                    <h3><a href=''>Forgot Password?</a></h3>
                    <button type='submit' className='flex py-4 px-0 justify-center items-center self-stretch rounded-xl bg-slate-800 text-white text-center'>Sign In</button>
                </div>
                <div className='flex flex-col items-center gap-4'> {/* 6*/}
                    <div className='flex w-[300px] py-[4px] px-0 content-center items-center gap-2'>{/* 4*/}
                        <div className='flex-1 h-[1px] bg-gray-300'></div>
                        <h4 className='text-base text-center'>or</h4>
                        <div className='flex-1 h-[1px] bg-gray-300'></div>
                    </div>

                    {/* social media button group */}
                    <div className='flex w-[300px] flex-col items-start gap-2'> {/* 4 */}
                        <button className='flex justify-center items-center py-3 px-[9px] content-center text-center gap-4 self-stretch rounded-xl bg-slate-100'>
                           <div className='w-7 h-7 relative'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                <g clip-path="url(#clip0_306_6)">
                                <path d="M28.227 14.8225C28.227 13.8709 28.1499 12.914 27.9853 11.9778H14.78V17.3689H22.342C22.0283 19.1077 21.02 20.6458 19.5436 21.6232V25.1213H24.0551C26.7044 22.6829 28.227 19.082 28.227 14.8225Z" fill="#4285F4"/>
                                <path d="M14.78 28.501C18.5559 28.501 21.7402 27.2612 24.0602 25.1213L19.5487 21.6232C18.2935 22.4771 16.6731 22.9607 14.7852 22.9607C11.1328 22.9607 8.03596 20.4966 6.92481 17.1837H2.26929V20.7898C4.64592 25.5174 9.48663 28.501 14.78 28.501Z" fill="#34A853"/>
                                <path d="M6.91966 17.1837C6.33322 15.4449 6.33322 13.5621 6.91966 11.8234V8.21729H2.26928C0.283612 12.1732 0.283612 16.8339 2.26928 20.7898L6.91966 17.1837Z" fill="#FBBC04"/>
                                <path d="M14.78 6.04127C16.776 6.01041 18.7051 6.76146 20.1506 8.14012L24.1477 4.14305C21.6167 1.76642 18.2575 0.45979 14.78 0.500943C9.48663 0.500943 4.64592 3.48459 2.26929 8.21728L6.91966 11.8234C8.02567 8.50536 11.1276 6.04127 14.78 6.04127Z" fill="#EA4335"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_306_6">
                                <rect width="28" height="28" fill="white" transform="translate(0.5 0.5)"/>
                                </clipPath>
                                </defs>
                           </svg>
                           </div>
                           <div className="w-[159px] text-slate-700 text-base font-normal leading-none tracking-tight text-center">Sign in with Google</div>

                        </button>
                        <button className='flex justify-center items-center py-3 px-[9px] content-center text-center gap-2 self-stretch rounded-xl bg-slate-100'>
                           <div className='w-7 h-7 relative'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                  <g clip-path="url(#clip0_306_19)">
                                      <path d="M28.5 14.5C28.5 6.76801 22.232 0.5 14.5 0.5C6.76801 0.5 0.5 6.76801 0.5 14.5C0.5 21.4877 5.61957 27.2796 12.3125 28.3299V18.5469H8.75781V14.5H12.3125V11.4156C12.3125 7.90687 14.4027 5.96875 17.6005 5.96875C19.1318 5.96875 20.7344 6.24219 20.7344 6.24219V9.6875H18.9691C17.23 9.6875 16.6875 10.7668 16.6875 11.875V14.5H20.5703L19.9496 18.5469H16.6875V28.3299C23.3804 27.2796 28.5 21.4877 28.5 14.5Z" fill="#1877F2"/>
                                      <path d="M19.9496 18.5469L20.5703 14.5H16.6875V11.875C16.6875 10.7679 17.23 9.6875 18.9691 9.6875H20.7344V6.24219C20.7344 6.24219 19.1323 5.96875 17.6005 5.96875C14.4027 5.96875 12.3125 7.90688 12.3125 11.4156V14.5H8.75781V18.5469H12.3125V28.3299C13.762 28.5567 15.238 28.5567 16.6875 28.3299V18.5469H19.9496Z" fill="white"/>
                                  </g>
                                  <defs>
                                     <clipPath id="clip0_306_19">
                                         <rect width="28" height="28" fill="white" transform="translate(0.5 0.5)"/>
                                     </clipPath>
                                  </defs>
                              </svg>
                           </div>
                           <div className="w-[159px] text-slate-700 text-base font-normal leading-none tracking-tight text-center">Sign in with Facebook</div>

                        </button>
                    </div>
                </div>
                </div>
                <div className='w-[300px] text-center'>
                    <h4>Don't you have an account? <a href="" className='text-blue-700'>Sign up</a></h4>
                </div>
                  <h6 className='w-[300px] text-center text-sm text-gray-500 '>©YASITH NAWODYA - ALL RIGHTS RESERVED</h6>
                

            </div>
        </div>

        {/* right side */}
        <div className="flex-1 self-stretch rounded-3xl bg-custom-bg sm:.bg-custom-bg-hidden bg-cover bg-no-repeat  ">
       </div>

        
    </div>
  )
}

export default Header