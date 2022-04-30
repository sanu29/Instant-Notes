export function ColorPallete(dispColorPallete, setDIspColorPallete,colorState, setColor, setDIspDateAndTime) {
    const colors = ["Yellow", 'Pink', 'Green', 'Blue', 'White'];
    return <div className="position-relative w-100 d-flex-columns">
        <span class="material-icons " onClick={
            () =>{
                if( dispColorPallete==="none"){
                    setDIspDateAndTime('none');
                   setDIspColorPallete('flex')}
                   else{setDIspColorPallete('none')}}}>
          palette</span>
        <div className="w-100 border-1 color-palette position-absolute d-flex justify-content-evenly flex-wrap" style={{ display: dispColorPallete }}>
            {colors.map((color) => {
                return (<div className="colors" style={{ backgroundColor: `var(--${color})` ,border:color===colorState?`2px solid black`:""}} value={color} onClick={() => setColor(color)}></div>);
            })}

        </div>
    </div>;
}
