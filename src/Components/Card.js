

import { Container } from '@material-ui/core'
import React from 'react'
import { useStyle } from './Card.style'

const Card = (props) => {
    const classes = useStyle()
  return (
    <Container className={classes.Card}>{props.children}</Container>
  )
}

export default Card