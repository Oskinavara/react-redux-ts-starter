import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './store';

const App = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: State) => state.bank);

  return (
    <div className='App'>
      <h1>{state}</h1>
      <button onClick={() => depositMoney(10)}>Deposit</button>
      <button onClick={() => withdrawMoney(10)}>Withdraw</button>
      <button onClick={bankrupt}>Bankrupt</button>
    </div>
  );
};

export default App;
