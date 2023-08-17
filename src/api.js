const API_KEY = 'ce3fd966e7a1d10d65f907b20bf000552158fd3ed1bd614110baa0ac6cb57a7e'

const tickers = new Map()



export const loadTickers = () => {
  if (tickers.size ==0) {
    return
  }
    fetch(
    `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${[
      ...tickers.keys()
      ].join(
      ','
      )}&tsyms=USD$api_key=${API_KEY}`
  ) .then(r => r.json())
    .then(rawData =>
      
      const updataPrices = Object.fromEntries(
        Object.entries(rawData).map(([key, value]) => [key, value.USD])
      )

    )
}
export const subscribeToTicker = (ticker, cd) => {
  const subscribers = tickers.get(ticker) || []
  tickers.set(ticker, [...subscribers, cb])
}

export const unsubscribeFromTicker = (ticker, cd) => {
  const subscribers = tickers.get(ticker) || []
  tickers.set(
    ticker,
    subscribers.filter( fn => fn != cd)
  )
  
}
setInterval(loadTickers, 5000)

window.tickers = tickers