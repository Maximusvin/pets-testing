import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/counter/counter-actions';
import s from './Counter.module.css';

const Counter = ({ value, step, onIncrement, onDecrement }) => {
  return (
    <div className={s.counter}>
      <h2 className={s.title}>Counter</h2>
      <span className={s.value}>{value}</span>
      <div className={s.controls}>
        <button className={s.button} onClick={() => onDecrement(step)}>
          Уменьшить на {step}
        </button>
        <button className={s.button} onClick={() => onIncrement(step)}>
          Увеличить на {step}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = dispatch => ({
  onIncrement: val => dispatch(increment(val)),
  onDecrement: val => dispatch(decrement(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
