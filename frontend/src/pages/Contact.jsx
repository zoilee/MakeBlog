import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {FcDiplomal} from "react-icons/fc"
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <Container className='pt-5'>
      <Row className='mt-5'>
        <Col md="6"></Col>
        <Col md="6">
          <h3 className='text-center mb-4'>연락을 기다립니다.</h3>
          <ContactForm/>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact