import styled  from 'styled-components';
import defaultImg from '../images/room-1.jpeg';


const StyledHero = styled.header `
 min-height: 60vh;
  background: url(${props => (props.img? props.img: defaultImg)}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;`;

/*const SimpleButton = styled.button `
color:${orange};
background:green;
const orange = '#f15025';
font-size: 3rem;`*/


export default StyledHero;
