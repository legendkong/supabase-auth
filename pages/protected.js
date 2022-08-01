import { supabase } from '../client'

// must be signed in to access protected routes
export default function Profile({ user }) {
  console.log({ user })
  return (
    <div style={{ maxWidth: '420px', margin: '96px auto' }}>
      <h2>Welcome, fellow trainer.</h2>
      <h3>It is time to roam!</h3>
    </div>
  )
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    return { props: {}, redirect: { destination: '/sign-in' } }
  }
  // do something with the user
  return { props: { user } }
}
