export default function ActionButton({ children, dispatch, action }){
    
    function handleClick() {
        dispatch({ action });
    }
    
    return <button onClick={handleClick}>{children}</button>
};