import { useSelector } from 'react-redux';

const Counter = (state) => {
    const countVal = useSelector(state => state.value);
    
    return (
        <div>
            {countVal}
        </div>
    )
}

export default Counter;