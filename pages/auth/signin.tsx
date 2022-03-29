import React, { useEffect, useState } from 'react'
import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'


function signIn({providers}: any) {
    

//  const [providers, setProviders] = useState<any>(null);

 const checkProviders = (
    providers &&
    providers?.length
 );

//   useEffect(() => {
//     (async () => {
//       const res = await getProviders();
//       setProviders(res);
//     })();
//   }, []);

  return (
    <>
        {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
            <button onClick={() => SignIntoProvider(provider.id)}>
            Sign in with {provider.name}
            </button>
        </div>
        ))}
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
