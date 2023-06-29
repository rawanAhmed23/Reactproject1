import { Container, Row ,Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useState,useEffect } from "react";


export const Banner=()=>{

    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "front-end Developer", "back-end Developer", "Full Stack Developer" ];
  const period = 50;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

    return(
        <section className="banner" id="home" >
<Container>
    <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
            <span className="tagline" > Welcome To My Portfile</span>
            <h1>{`Hi! I'm Rawan Ahmed`} <span className="wrap"> {text} </span></h1>
            <p>Hello Everyone.I have Two years of Experience in Web Development </p>
       <button onClick={()=>console.log('connect')}> Let's To connect <ArrowRightCircle size={24}/></button>
        </Col>
        <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img"/>
            </Col> 
    </Row>
</Container>
        </section>
    )
}
