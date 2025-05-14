function Btn(){
    const a=()=> console.log("mouseOver");
    return (
        <button onMouseOver={a}> click</button>
    );
};
export default Btn;