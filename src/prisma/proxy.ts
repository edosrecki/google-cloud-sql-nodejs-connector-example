import net from 'net'
import { TLSSocket } from 'tls'

type StreamFunction = () => TLSSocket

export const port = 8080

export const buildProxy = (stream: StreamFunction) => {
  const proxy = net.createServer((c) => {
    const s = stream()
    c.pipe(s)
    s.pipe(c)

    c.on('error', (err) => {
      console.error(err)
    })
  })

  proxy.on('error', (err) => {
    console.log('proxy error')
    console.log(err)
  })

  proxy.listen(port)

  return proxy
}
