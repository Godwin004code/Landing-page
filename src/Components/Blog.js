
import { Button, Card, Typography } from '@material-ui/core'
import React from 'react'
import { BlogTexts } from './Texts'
import "../style/blog.scss"

const Blog = () => {
  return (
      <>
      <h1 className='blog__header'>See Our Latest News & Blog</h1>
    <div className='blog__container'>
        {
            BlogTexts.map((item) => {
                const {id, img, sub__title, title, desc, btn } = item
                return (
                    <>
                    
                    <Card  className="card">
                        <div className='img__container' key={id}>
                            <img src={img} alt={title} />
                        </div>
                        <div className='blog__container__text'>
                            <Typography variant='h6'>{sub__title}</Typography>
                            <Typography variant='h5'>{title}</Typography>
                            <Typography className='blog__container__des'>{desc}</Typography>
                            <Button variant='contained' style={{color: '#fff', backgroundColor: '#ce8f00',}}>{btn}</Button>
                        </div>
                    </Card>
                    </>
                )
            })
        }
    </div>
    </>
  )
}

export default Blog