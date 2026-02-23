export default function ActionButton({children, dispatch, payload, type}){
    
    function handleClick() {
        dispatch({ type: type, payload: payload });
    }
    
    return <button onClick={handleClick}>{children}</button>
};