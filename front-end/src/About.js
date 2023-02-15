import axios from 'axios'
import { useEffect, useState } from 'react'

const About = () => {
  const [pfp, setPfp] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    getAboutPage()
  }, [])

  function getAboutPage() {
    axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutus`).then(res => {
      console.log(res.data.text)
      setPfp(res.data.img)
      setText(res.data.text)
    })
  } 
  

  return (
    <>
      <img src={pfp} width="450"></img>
      {text && <p>{text}</p>}
    </>
  )
}

export default About