import React from "react";

export default class HexDec extends React.Component {
    state = {
        colorInField: '#FFFFFF',
        colorOfBlock: '#FFFFFF',
        r: 255,
        g: 255,
        b: 255,
        isError: false
    }

    onChangeHandler = (e) => {
        const val = e.target.value.toUpperCase();
        if (val.match(/#[0-9A-F]{6}/)) {
            this.setState({
                colorInField: val,
                colorOfBlock: val,
                r: parseInt(val.substring(1, 3), 16),
                g: parseInt(val.substring(3, 5), 16),
                b: parseInt(val.substring(5, 7), 16),
                isError: false
            });
        } else {
            this.setState({colorInField: val, isError: true})
        }
    }

    render() {
        const {colorInField, colorOfBlock, r, g, b, isError} = this.state;

        return (
            <div className="wrapper" style={{backgroundColor: colorOfBlock}}>
                <form>
                    <input onChange={this.onChangeHandler} value={colorInField}/>
                    <div className="rgbBlock">{isError ? `Ошибка!` : `rgb(${r},${g},${b})`}</div>
                </form>
            </div>
        );
    }
}
