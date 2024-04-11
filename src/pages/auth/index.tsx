import { getClientCredentials } from '@/services/AuthService'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { setToken } from '@/utils/Cookies'

export default function Auth() {
  const clientId = '5c03a2d9ca984c8dbc56aa9c2fbf05c6'
  const clientSecret = '7c85ed4cc1054fbca37d407f85e7328d'

  const router = useRouter()
  const { code } = router.query

  useEffect(() => {
    if (!code) return
    getClientCredentials(code as string, clientId, clientSecret).then(
      ({ access_token, expires_in }) => {
        setToken(access_token, expires_in)
        router.push('/find')
      }
    )
  }, [code, router])

  return <div>Loading...</div>
}
