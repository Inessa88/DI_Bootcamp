import Cards from './components/Cards'
import './App.css';
import * as Icon from 'react-bootstrap-icons';
import { ArrowRight } from 'react-bootstrap-icons';

function App() {
  return (
    <div style={{backgroundColor: 'aquamarine', display: 'inline-block'}}>
      <Cards lable="Square"  number="300,000"> <Icon.Square color="darkGrey" size={18}/></Cards>
      <Cards lable="Airplane" number="2,980"><Icon.Airplane color="darkGrey" size={18}/></Cards>
      <Cards lable="Sun" number="20,000"><Icon.Sun color="darkGrey" size={18}/></Cards>
      <Cards lable="Tree" number="1,500"><Icon.Tree color="darkGrey" size={18}/></Cards>
      <Cards lable="Trophy" number="750,000"><Icon.Trophy color="darkGrey" size={18}/></Cards>
      <Cards lable="Phone" number="59,200"><Icon.Phone color="darkGrey" size={18}/></Cards>
      <Cards lable="List" number="6,200"><Icon.List color="darkGrey" size={18}/></Cards>
      <Cards lable="Hammer" number="33,500"><Icon.Hammer color="darkGrey" size={18}/></Cards>
      <Cards lable="Eye" number="35,200"><Icon.Eye color="darkGrey" size={18}/></Cards>
      <Cards lable="Diamond" number="998,000"><Icon.Diamond color="darkGrey" size={18}/></Cards>
      <Cards lable="Calendar" number="36,100"><Icon.Calendar color="darkGrey" size={18}/></Cards>
      <Cards lable="Book" number="159,000"><Icon.Book color="darkGrey" size={18}/></Cards>
      <Cards lable="Box" number="200"><Icon.Box color="darkGrey" size={18}/></Cards>
    </div>
  );
}

export default App;
