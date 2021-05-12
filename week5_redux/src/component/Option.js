import { useDispatch, useSelector } from 'react-redux';
import { setDiff } from '../action/index'

const Option = (state) => {
    const diffValue = useSelector(state => state.diff);
    const dispatch = useDispatch();

    document.getElementById('tmp').addEventListener("change", function (e) {
        dispatch(setDiff(parseInt(e.target.value)))
    })

    return (
        <div>
            <input id="tmp" type="text" value={diffValue}/>
        </div>
    )
}

export default Option;