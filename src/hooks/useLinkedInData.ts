import { useEffect } from 'react'
import axios from 'axios'
import { useLinkedInStore } from '@/store/linkedinStore'

export const useLinkedInData = (accessToken: string) => {
  const { setUserData } = useLinkedInStore()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.linkedin.com/v2/me', {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        setUserData(response.data)
      } catch (error) {
        console.error('Erro ao buscar dados do LinkedIn:', error)
      }
    }

    fetchData()
  }, [accessToken])
}
