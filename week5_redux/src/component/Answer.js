import { useSelector } from 'react-redux';

const Answer = () => {
    const currentState = useSelector(state => state.current);

    if (currentState) {
        document.getElementById('answer').style.display = "block";
        console.log('asdf');
    }

    return (
        <div id="answer">
            정답입니다!
        </div>
    );
}

export default Answer;