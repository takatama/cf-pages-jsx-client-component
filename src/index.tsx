import { Hono } from 'hono'

const app = new Hono()

app.get('/api/clock', (c) => {
  return c.json({
    time: new Date().toLocaleTimeString()
  })
})

app.get('/', (c) => {
  return c.html(
    <html>
      <head>
        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="/src/client.tsx"></script>
      </body>
    </html>
  )
})

export default app