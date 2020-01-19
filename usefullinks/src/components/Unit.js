import React, {useState} from 'react'
import styled from 'styled-components'
import bannerImg from '../imgs/react.jpg'
import links from '../data/links'
import ReactCardFlip from 'react-card-flip';

const Banner = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 35vh;
    background: #212121;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    color: #2ECFFF;
`;

const Container = styled.div`
    // width: 80%;
    background: #212121;
    margin: 0 auto;
    display: flex;
    // flex-wrap: wrap; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background: #222129;
    // color: white;
`;

const WeekContainer = styled.div`
    // border: 1px solid red;
    background: #413f4c;
    color: white;
    margin: 4%;
    box-shadow: 0.3em 0.3em 1em rgba(30,30,30,0.3);
    padding: 6%;
    width: 50%;
`;

const H2 = styled.h2`
    margin-bottom: 4%;
`;

const A = styled.a`
    display: inline-block;
    // margin-bottom: 4%;
    color: #2ECFFF;
`;

const Ul = styled.ul`
    // color: red;
    margin: 2%;
`;

const Li = styled.li`
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 8%;
`;

const Unit = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    // const {unit} = props;
    const unit = links[props.unit]
    const title = unit.title;
    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
      }

      //need to only flip the card that is clicked, not all of them.....
    return(
        <>
<Banner><Title>{title}</Title></Banner>
        <Container>
            {unit.weeks.map(week => {
                return <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <WeekContainer onClick={handleClick}>
            <H2>{week.title}</H2>
            {week.days.map(day => {
                return (<div>
                        <h4>{day.title}</h4>
                        {console.log(day.links.tk)}
                    <Ul>
                        <Li><A href={day.links.tk} target="_blank">Training Kit</A></Li>
                        <Li><A href={day.links.gp} target="_blank">Guided Project</A></Li>
                    </Ul>
                    </div>)
                    
            })}
                </WeekContainer>
                <WeekContainer onClick={handleClick}>Stuff</WeekContainer>
                </ReactCardFlip>
            })}
        </Container>
        {/* <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <YOUR_FRONT_CCOMPONENT>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </YOUR_FRONT_CCOMPONENT>
 
        <YOUR_BACK_COMPONENT>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </YOUR_BACK_COMPONENT>
      </ReactCardFlip> */}
        </>
    )
}

export default Unit