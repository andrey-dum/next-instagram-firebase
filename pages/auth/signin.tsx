import React from 'react'
import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from '../../components/Header/Header';


function signIn({providers}: any) {
    

//  const [providers, setProviders] = useState<any>(null);

 const checkProviders = (
    providers &&
    providers?.length
 );


  return (
    <>
        <Header />
        <div className='flex items-center flex-col justify-center min-h-screen py-2 -mt-20 px-14 text-center'>
            <img
                src="https://links.papareact.com/ocw"
                className='w-80'
            />
            <p className='font-xs italic'>
                This is test app for educational
            </p>
            <div className='mt-40'>
                {Object.values(providers).map((provider: any) => (
                <div key={provider.name}>
                    <button
                        onClick={() => SignIntoProvider(provider.id, {
                            callbackUrl: "/"
                        })}
                        className='p-3 bg-blue-500 rounded-lg text-white'
                    >
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
            </div>
        </div>
  </>
  )
}

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
      props: { providers },
    }
  }

export default signIn
