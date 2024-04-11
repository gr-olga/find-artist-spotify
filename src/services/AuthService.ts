import axios from 'axios'

export interface CredentialsResponse {
  readonly access_token: string
  readonly expires_in: number
  readonly token_type: string
}

export async function getClientCredentials(
  code: string,
  clientId: string,
  clientSecret: string
): Promise<CredentialsResponse> {
  //TODO store?
  const redirect = 'http://localhost:3000/find'

  const spotifyResponse = await axios.post(
    'https://accounts.spotify.com/api/token',
    new URLSearchParams({
      grant_type: 'client_credentials',
      code: code,
      redirect_uri: redirect,
    }).toString(),
    {
      headers: {
        Authorization:
          'Basic ' +
          new Buffer(clientId + ':' + clientSecret).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  )

  return spotifyResponse.data
}
