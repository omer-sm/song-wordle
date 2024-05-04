import React from 'react'
import { CssVarsProvider } from '@mui/joy/styles'
import Sheet from "@mui/joy/Sheet"
import { SpotifyApi } from '@spotify/web-api-ts-sdk'
import { getApi, getPlaylistItems } from './spotifyManager'

function App() {
  const [api, setApi] = React.useState<SpotifyApi>()
  api?.getAccessToken().then(r => console.log(r))
  React.useEffect(() => {
    if (api == null) setApi(getApi())
  }, [api])
  return (
    <CssVarsProvider defaultMode="dark">
      <Sheet variant="outlined" sx={{ height: "100vh", border: "none", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
        {api !== undefined && <button onClick={() => getPlaylistItems(api, "4h8tQ8TlGnxoaxyXaTzYOk?si=60e872c46de64ca5")}>press</button>}
      </Sheet>
    </CssVarsProvider>
  )
}

export default App
