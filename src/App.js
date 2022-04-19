import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Calculator from './Calculator'

const App = () => {
  const { sum } = useSelector((state) => state.sum)
  return (
    <Container>
      <Row>
        <Col>
          <Calculator />
        </Col>
        <Col xs={2}>
          {sum.slice(sum.length - 5).map((item, index) => (
            <p>{item}</p>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default App
