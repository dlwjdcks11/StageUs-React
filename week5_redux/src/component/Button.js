const Button = (props) => {
    return (   
        <div key={props.num} id={props.index}>
            <button className="numBtn">
                {props.num}
            </button>
        </div>
    );
};

// const Button = (state) => {
//     const dispatch = useDispatch();

//     return (
//         <div>
//             <button onClick={() => dispatch(increment())}>증가</button>
//             <button onClick={() => dispatch(decrement())}>감소</button>
//         </div>
//     );
// }

export default Button;