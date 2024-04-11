import axios from 'axios'
import * as Cookies from '@/utils/Cookies'
import { getAlbums } from '@/services/AlbumsService'

// I didn't have enough time to setup jest properly, but the tests should be looks like this
describe('AlbumsService', () => {
  describe('getAlbums', () => {
    it('should throw an error if no token', async () => {
      jest.spyOn(Cookies, 'getToken').mockImplementation(() => undefined)
      await expect(() => getAlbums('someArtistId')).toThrow()
    })

    it('should return data from api', async () => {
      const expectedResult = { some: 'mock_data' } as any
      jest
        .spyOn(Cookies, 'getToken')
        .mockImplementation(() => 'some-mock-token')
      jest.spyOn(axios, 'get').mockImplementation(() => expectedResult)
      const result = await getAlbums('someArtistId')
      expect(result).toBe(expectedResult)
    })
  })
})
