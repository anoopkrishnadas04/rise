import PageHeader from './header/PageHeader'
import PageFooter from './footer/PageFooter'

//const { exec } = require('child_process');

//exec('"scripts/update_stock.py" AAPL');

export const metadata = {
  title: 'RISE Stock Navigation',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" style={{
      backgroundColor: "black",
      color: "white",
      height: "100%",
      width: "100%"
    }}>
      <head>
        <script type="text/javascript" src="Stock.json"></script>
        
      </head>
      <body style={{
        display: "flex",
        flexDirection: "column",
        margin: "0px",
        justifyContent: 'space-between',
        height: "100%"
      }}>
        <PageHeader />

        <div id="body" style={{
          flex: "auto"
        }}>
          {children}
        </div>

        <PageFooter />
      </body>
    </html>
  )
}

