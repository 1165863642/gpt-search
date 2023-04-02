import request from '@/utils/request'

export const gptSearch = async (data: { text: string }): Promise<string> => {
  return request("/search", {
    method: 'POST',
    data
  })
}