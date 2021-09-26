import Head from 'next/head'
import Main from './Component/Main'
import Secondary from './Component/Secondary'
export default function Home() {
  return (
    <div className="wrapper">
        <Main />
        <Secondary />
      </div>
  )
}
