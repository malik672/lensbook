import Layout from "../components/Layout"
import Header from "../components/Header"
import Body from "../components/Body"
import "semantic-ui-css/semantic.min.css"

export default function Home() {
  return (
    <Layout pageTitle="Welcome to LensBook, built on lens protocol">
      <Header />
      <Body/>
    </Layout>
  )
}
