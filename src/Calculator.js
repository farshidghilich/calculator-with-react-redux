import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import MyButton from './MyButton'
import useKeyPress from './useKeyPress'
import { useDispatch, useSelector } from 'react-redux'
import { sumCalc } from './action'

const Calculator = () => {
  const dispatch = useDispatch()
  const { sum, result, error: resultError } = useSelector((state) => state.sum)
  const [input, setInput] = useState('')

  const [error, setError] = useState(false)
  const zero = useKeyPress('0')
  const one = useKeyPress('1')
  const two = useKeyPress('2')
  const three = useKeyPress('3')
  const four = useKeyPress('4')
  const five = useKeyPress('5')
  const six = useKeyPress('6')
  const seven = useKeyPress('7')
  const eight = useKeyPress('8')
  const nine = useKeyPress('9')
  const point = useKeyPress('.')
  const pOpen = useKeyPress('(')
  const pClose = useKeyPress(')')
  const plus = useKeyPress('+')
  const minus = useKeyPress('-')
  const multipy = useKeyPress('*')
  const divide = useKeyPress('/')
  const backspace = useKeyPress('Backspace')
  const enter = useKeyPress('Enter')
  const clear = useKeyPress('Delete')

  useEffect(() => {
    clear && setInput('')
  }, [clear])
  useEffect(() => {
    zero && setInput((p) => p + '0')
  }, [zero])
  useEffect(() => {
    one && setInput((p) => p + '1')
  }, [one])
  useEffect(() => {
    two && setInput((p) => p + '2')
  }, [two])
  useEffect(() => {
    three && setInput((p) => p + '3')
  }, [three])
  useEffect(() => {
    four && setInput((p) => p + '4')
  }, [four])
  useEffect(() => {
    five && setInput((p) => p + '5')
  }, [five])
  useEffect(() => {
    six && setInput((p) => p + '6')
  }, [six])
  useEffect(() => {
    if (seven) {
      setInput((p) => p + '7')
    }
  }, [seven])
  useEffect(() => {
    eight && setInput((p) => p + '8')
  }, [eight])
  useEffect(() => {
    nine && setInput((p) => p + '9')
  }, [nine])
  useEffect(() => {
    plus && setInput((p) => p + '+')
  }, [plus])
  useEffect(() => {
    minus && setInput((p) => p + '-')
  }, [minus])
  useEffect(() => {
    multipy && setInput((p) => p + '*')
  }, [multipy])
  useEffect(() => {
    divide && setInput((p) => p + '/')
  }, [divide])
  useEffect(() => {
    point && setInput((p) => p + '.')
  }, [point])
  useEffect(() => {
    pOpen && setInput((p) => p + '(')
  }, [pOpen])
  useEffect(() => {
    pClose && setInput((p) => p + ')')
  }, [pClose])
  useEffect(() => {
    backspace && setInput((p) => p.slice(0, p.length - 1))
  }, [backspace])
  useEffect(() => {
    enter && dispatch(sumCalc(input))
  }, [enter])
  console.log(typeof sum)
  useEffect(() => {
    setError(resultError)
    return () => setError(false)
  }, [resultError])
  useEffect(() => {
    if (!error && result) setInput(result.toString())
  }, [result])

  return (
    <Container style={{ width: '30%', border: '1px solid grey' }}>
      <Row>
        <Col xs={12}>
          <p>{error ? 'check your input' : result}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form>
            <Form.Control
              type='input'
              disabled
              style={{ width: '100%', marginBottom: '10px' }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              isInvalid={error}
              onChange={() => setError(false)}
            ></Form.Control>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <MyButton
            status={pOpen}
            variant='warning'
            type='button'
            onClick={() => setInput((p) => p + '(')}
          >
            (
          </MyButton>
        </Col>
        <Col xs={3}>
          <MyButton
            variant='warning'
            onClick={() => setInput((p) => p + ')')}
            status={pClose}
          >
            )
          </MyButton>
        </Col>
        <Col xs={3}>
          <MyButton
            variant='danger'
            onClick={() => setInput((p) => p.slice(0, p.length - 1))}
            status={backspace}
          >
            &lt;
          </MyButton>
        </Col>
        <Col xs={3}>
          <MyButton
            variant='danger'
            onClick={() => setInput('')}
            status={clear}
          >
            C
          </MyButton>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <MyButton
            status={seven}
            variant='secondary'
            onClick={() => setInput((p) => p + '7')}
          >
            7
          </MyButton>
        </Col>
        <Col xs={3}>
          <MyButton
            status={eight}
            variant='secondary'
            onClick={() => setInput((p) => p + '8')}
          >
            8
          </MyButton>
        </Col>
        <Col xs={3}>
          <MyButton
            status={nine}
            variant='secondary'
            onClick={() => setInput((p) => p + '9')}
          >
            9
          </MyButton>
        </Col>
        <Col xs={3}>
          <MyButton
            variant='success'
            onClick={() => setInput((p) => p + '+')}
            status={plus}
          >
            +
          </MyButton>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <MyButton
            status={four}
            variant='secondary'
            onClick={() => setInput((p) => p + '4')}
          >
            4
          </MyButton>
        </Col>
        <Col xs={3}>
          <MyButton
            status={five}
            variant='secondary'
            onClick={() => setInput((p) => p + '5')}
          >
            5
          </MyButton>
        </Col>
        <Col xs={3}>
          <MyButton
            status={six}
            variant='secondary'
            onClick={() => setInput((p) => p + '6')}
            status={six}
          >
            6
          </MyButton>
        </Col>
        <Col xs={3}>
          <MyButton
            variant='success'
            onClick={() => setInput((p) => p + '-')}
            status={minus}
          >
            -
          </MyButton>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <MyButton
            variant='secondary'
            onClick={() => setInput((p) => p + '1')}
            status={one}
          >
            1
          </MyButton>
        </Col>
        <Col xs={3}>
          <MyButton
            status={two}
            variant='secondary'
            onClick={() => setInput((p) => p + '2')}
          >
            2
          </MyButton>
        </Col>
        <Col xs={3}>
          <MyButton
            status={three}
            variant='secondary'
            onClick={() => setInput((p) => p + '3')}
          >
            3
          </MyButton>
        </Col>
        <Col xs={3}>
          <MyButton
            variant='success'
            onClick={() => setInput((p) => p + '*')}
            status={multipy}
          >
            *
          </MyButton>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <MyButton
            status={point}
            variant='secondary'
            onClick={() => setInput((p) => p + '.')}
          >
            .
          </MyButton>
        </Col>
        <Col xs={3}>
          <MyButton
            status={zero}
            variant='secondary'
            onClick={() => setInput((p) => p + '0')}
          >
            0
          </MyButton>
        </Col>
        <Col xs={3}>
          <MyButton
            variant='dark'
            onClick={() => dispatch(sumCalc(input))}
            status={enter}
          >
            =
          </MyButton>
        </Col>
        <Col xs={3}>
          <MyButton
            variant='success'
            onClick={() => setInput((p) => p + '/')}
            status={divide}
          >
            /
          </MyButton>
        </Col>
      </Row>
    </Container>
  )
}

export default Calculator
