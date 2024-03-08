import { Component } from "react";
import PropTypes from 'prop-types';

class Child extends Component{
  // state/setState는 부모에(Component) 정의되어 있는 이름
  // 샹태는 state 변수 하나만 사용 가능해서 여러개의 상태를 관리하려면 객체로 지정
  // 함수형에서는 state 변수를 여러개 지정 가능(useState 훅)
  state = { count: 0 };

  // arrow function으로 작성해야 this.state 등에 접근 가능함
  increase = () => {
    this.setState({ count: this.state.count + this.props.level });
  }

  render(){
    return (
      <>
        <div>
          클릭 횟수 X { this.props.level } : { this.state.count }
          <button onClick={ this.increase }>클릭</button>
        </div>
      </>
    );
  }
}

Child.propTypes = {
  level: PropTypes.number
};

class Parent extends Component{
  render(){
    return(
      <div>
        <h1>클래스 컴포넌트</h1>
        <Child level={1} />
        <Child level={5} />
      </div>
    );
  }
}

export default Parent;