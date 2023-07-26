import { useState, useReducer } from "react";


export default function useStateVSuseReducer() {

  // useState
  const [password, setPassword] = useState('useState');
  const [counter1, setCounter1] = useState(0);
  function changePassword() {
    let newPassword : string = prompt("Введите новый пароль:  ") || '1234567890';
    setPassword(newPassword)
  }
  function encryptPassword() {
    const newPassword : string = password.split('').map(value => value.charCodeAt(0) ^ 1).join(' ')
    setPassword(newPassword)
    setCounter1(counter1 + 1)
  }
  function decipherPassword() {
    if (counter1) {
      const newPassword : string = password.split(' ').map(value => Number(value) ^ 1).map(value => String.fromCharCode(value)).join('')
      setPassword(newPassword)
      setCounter1(counter1 - 1)
    }
  }

  // useReducer
  function counterReducer(counter: any, action: string) {
    switch (action) {
      case 'plus' : {
        return counter + 1
      }
      case 'minus' : {
        return counter - 1
      }
      throw Error('Unknown action: ' + action);
    }
  }
  function passwordReducer(password2: any, action: string) {
    switch (action) {
      case 'change' : {
        let newPassword: string = prompt("Введите новый пароль:  ") || '1234567890';
        return newPassword
      }
      case 'encrypt' : {
        const newPassword : string = password2.split('').map((value: string) => value.charCodeAt(0) ^ 1).join(' ')
        return newPassword
      }
      case 'decode' : {
        const newPassword : string = password2.split(' ').map((value: string) => Number(value) ^ 1).map((value: number) => String.fromCharCode(value)).join('')
        return newPassword
      }
      throw Error('Unknown action: ' + action);
    }
  }
  const [counter2, dispatchCounter] = useReducer(counterReducer, 0);
  const [password2, dispatchPassword] = useReducer(passwordReducer, 'useReducer');
  
  function handleEncrypt() {
    dispatchPassword('encrypt')
    dispatchCounter('plus')
  }
  function handleDecode() {
    if (counter2) {
      dispatchPassword('decode')
      dispatchCounter('minus')
    }
  }



  return (
    <section className="text-center lg:w-full lg:py-20 lg:text-left">
        <div className="hero mx-auto w-full max-w-6xl px-6">
          <div className="hero-inner w-full relative lg:flex">
            <div
              className="hero-copy w-full bg-white pt-10 pb-16 lg:pt-16 lg:pr-20"
              style={{ minWidth: '600px' }}
            >
              <div className="mx-auto w-full max-w-3xl">
                <h1 className="mt-0 mb-4 text-4xl font-bold md:text-5xl ">
                  useState vs useReducer ⚓
                </h1>
                <br />
                <p className="prose-m px-12 text-gray-500 md:px-0">In order to understand and feel the difference between these hooks and figure out which one is better to use and when, I will compare them for the same task</p>
                <br/>
                <p className="prose-m px-12 text-gray-500 md:px-0">We have password. Let's realize the opportunity to change, encrypt or decipher it</p>
                <br/>
                <br/>
                <p className="prose-m px-12 text-gray-500 md:px-0">useState</p>
                <p>password: {password}</p>
                <div className="control">
                  <button
                    className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg mr-2 mt-2"
                    type="submit"
                    onClick={changePassword}
                  >
                    change
                  </button>
                  <button
                    className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg mr-2"
                    type="submit"
                    onClick={encryptPassword}
                  >
                    encrypt
                  </button>
                  <button
                    className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"
                    type="submit"
                    onClick={decipherPassword}
                    style={ counter1 ? {} : {opacity: '.5', cursor: 'not-allowed'}}
                  >
                    decode
                  </button>
                </div>



                
                <br />
                <p className="prose-m px-12 text-gray-500 md:px-0">useReducer</p>
                <p>password: {password2}</p>
                <div className="control">
                  <button
                    className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg mr-2 mt-2"
                    type="submit"
                    onClick={() => dispatchPassword('change')}
                  >
                    change
                  </button>
                  <button
                    className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg mr-2"
                    type="submit"
                    onClick={handleEncrypt}
                  >
                    encrypt
                  </button>
                  <button
                    className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"
                    type="submit"
                    onClick={handleDecode}
                    style={ counter2 ? {} : {opacity: '.5', cursor: 'not-allowed'}}
                  >
                    decode
                  </button>
              </div>
              <br />
              <a href="https://github.com/burydmitri/my-front-lab/tree/master/lab/src/pages/usestate-vs-usereducer.tsx" className="border-b lg:text-gray-400">
                Code on github
              </a>

              <br />
              <br />
              <br />

              <p className="font-medium">UseReducer is an alternative to useState, they do the same thing. </p>
              <p className="font-medium">In huge components it can be more comfortable to see all variations of changing of state in one place - reducer.
              But in common cases i prefer useState, because, in my opinion useReducer is more cumbersome</p>
              <br/>
            </div>
          </div>
          </div>
        </div>
      </section>
  )
}