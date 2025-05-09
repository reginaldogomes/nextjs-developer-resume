// hooks/useContacts.ts
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const fetchContacts = async () => {
  const response = await fetch('https://www.zohoapis.com/crm/v2/Contacts', {
    headers: {
      Authorization: `Bearer ${process.env.ZOHO_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
  })
  return response.json()
}

const createContact = async (contactData: any) => {
  const response = await fetch('https://www.zohoapis.com/crm/v2/Contacts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.ZOHO_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: [contactData] }),
  })
  return response.json()
}

export function useContacts() {
  return useQuery({
    queryKey: ['contacts'],
    queryFn: fetchContacts,
    staleTime: 1000 * 60 * 5,
  })
}

export function useCreateContact() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
    },
  })
}
