import Head from 'next/head'
import { Button, Heading, Text } from '@design-system-course/react'

import { Container, Hero } from './styles'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Container>
        <Hero>
          <Heading as="h1" size="6xl">
            Web Project
          </Heading>
          <Text as="p" size="lg">
            NextJS example project inside a monorepo
          </Text>
          <Button variant="secondary">Click me</Button>
        </Hero>
      </Container>
    </>
  )
}

export default Home
