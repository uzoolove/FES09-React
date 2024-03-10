import { Component } from "react";
import PropTypes from 'prop-types';

class Child extends Component{
  increase = () => {
    this.setState({ count: this.state.count + this.props.level });
  }

  // 1-1
  constructor(props){
    console.log('1-1 constructor 호출됨.');
    super(props);
    this.state = { count: 0 };
  }

  // 1-2/2-1
  static getDerivedStateFromProps(props, state){
    console.log('1-2/2-1 getDerivedStateFromProps 호출됨.');
    console.log('\tprops', props);
    console.log('\tstate', state);

    if(state.count > 10){
      state = { count: 10 };
    }

    return state;
  }

  // 2-2
  shouldComponentUpdate(nextProps, nextState){
    console.log('2-2 shouldComponentUpdate 호출됨.');
    console.log('\t현재값', this.props, this.state);
    console.log('\t다음값', nextProps, nextState);
    return true;
  }

  // 1-3/2-3
  render(){
    console.log('1-3/2-3 render 호출됨.');
    return (
      <>
        <div>
          클릭 횟수 X { this.props.level } : { this.state.count }
          <button onClick={ this.increase }>클릭</button>
        </div>
      </>
    );
  }

  // 1-4
  componentDidMount(){
    console.log('1-4 componentDidMount 호출됨.');
  }

  // 2-4
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('2-4 getSnapshotBeforeUpdate', prevProps, prevState);
    return 'hello';
  }

  // 2-5
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('2-5 componentDidUpdate', prevProps, prevState, snapshot);
  }

  // 3-1
  componentWillUnmount(){
    console.log('3-1 componentWillUnmount');
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
        {/* <Child level={1} /> */}
        <Child level={5} />
      </div>
    );
  }
}

export default Parent;