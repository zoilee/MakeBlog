import React, { useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import axios from 'axios'


const About = () => {
  const [myskills, setMyskills] = useState([]);
  
  const fetchMyskills = async() => {
    try {
      const response = await axios.get("api/myskills");
      setMyskills(response.data)
    } catch (error) {
      console.error("파일을 가져오는 동안 에러가 발생했습니다.", error);
    }
  }
  useEffect(()=>{
    fetchMyskills();
  },[])

  return (
    <Container>
      <Row>
        <Col md="12" className='position-relative about-box'>
          <img src='images/img.jpg' alt="about" className="about"/>
          <div className='gray-box'></div>
          <div className='text-box'>
            <h1>
              I REALLY<br/>
              LOVE TO<br/>
              TALK WITH<br/>
              PEOPLE
            </h1>
            <p>zoile</p>
          </div>
          <ul className='follow-us'>
            <li><a href="#" target='_blank'>Instagram</a></li>
            <li><a href="#" target='_blank'>Youtube</a></li>
            <li><a href="#" target='_blank'>LinkedIn</a></li>
          </ul>
        </Col>
        <Col md="3" className='gcolor'>

        {
        myskills.map((item, index)=>(
          <div key={index} className='progress-box'>
          <h3 className='progress-title'>{item.name}</h3>
          <div className='progress'>
            <div className='progress-bar' style={{width:`${item.value}%`}}>
              <div className='progress-value'>
                {item.value}%
              </div>
            </div>
          </div>
        </div>
        ))
      }
          
          
        </Col>
        <Col md="9" className='gcolor'>
          <div className='about-me'>
            <p>안녕하세요! 저는 신입 개발자로, 끊임없이 배우고 성장하는 것을 목표로 하고 있습니다. 국가에서 지원하는 전문교육을 통해 프로그래밍의 기초를 다졌으며, Java, Spring Framework, React와 같은 기술 스택을 활용한 프로젝트 경험을 통해 실무 능력을 키웠습니다. 특히, 효율적인 코드 작성과 협업에 관심이 많아, 팀 프로젝트에서의 코드 리뷰와 버전 관리(Git)를 적극 활용하며 협업 역량을 향상시켰습니다.</p>
            <p>제 강점은 문제 해결 능력과 새로운 기술에 대한 빠른 적응력입니다. 어려운 문제에 직면했을 때도 논리적으로 접근하며 해결책을 찾아가는 과정에서 큰 보람을 느낍니다. 또한, 최신 기술 트렌드를 지속적으로 학습하고, 이를 프로젝트에 적용해 더 나은 결과물을 만들어내고자 노력하고 있습니다.</p>
            <p>앞으로도 개발자로서 기술적인 깊이를 더하고, 사용자에게 가치를 제공하는 서비스 개발에 기여하며 성장하고 싶습니다. 감사합니다!</p>
          </div>
        </Col>
      </Row>

    </Container>

    /*
    <div className='aboutBody'>
        <div className="aboutContainer">
            <div className="left">
                <h1>Hi, I'm <span  className='aboutName'>Zoile</span ></h1>
                <p>
                I'm studying <span  className='aboutName'>Electronics</span >, <span  className='aboutName'>Java</span >, and <span  className='aboutName'>JavaScript</span >. I enjoy
                honing my skills and love learning new things every day!
                </p>
                <a href="#contact" className="aboutBtn">
                Contact Me
                </a>
            </div>
            <div className="right">
                <img
                src="https://via.placeholder.com/300" // Replace with your image URL
                alt="Zoile"
                className="profile-img"
                />
            </div>
        </div>
    </div>
    */
  )
}

export default About