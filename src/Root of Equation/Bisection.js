import React, { Component } from 'react'
import '../App.less'
import { Button, Table } from 'antd'
const math = require('mathjs')

const data = [];

const columns = [
    {
        title: 'Iteration',
        dataIndex: 'iteration',
        key: 'iteration'
    },
    {
        title: 'XL',
        dataIndex: 'xl',
        key: 'xl'
    },
    {
        title: 'XR',
        dataIndex: 'xr',
        key: 'xr'
    },
    {
        title: 'XM',
        dataIndex: 'xm',
        key: 'xm'
    },
    {
        title: 'Epsilon',
        key: 'check',
        dataIndex: 'check'
    }
];

class Bisection extends Component {
    constructor(props) {
        super(props)
        this.result = this.result.bind(this)
        this.fn = this.fn.bind(this)
        this.state = { XL: null, XR: null, function: "" }
    }

    fn(x) {
        return math.evaluate(this.state.function, { x: x })
    }

    // clearArray(){
    //     return this.setState({data : []})
    // }

    result() {
        var fn = this.fn
        var xl = Number(this.state.XL);
        var xr = Number(this.state.XR);
        //data = this.setState({data : []}) 
        // console.log(fn);
        // console.log(xl);
        // console.log(xr);
        let data = [] ;

        var eps = 0.001;
        var xm;
        var check = 1;
        var i = 1;
        //this.setState({data : []})

        console.log("A", data)

        while (Math.abs(check) >= eps) {

            data.push({iteration: i, xl, xr, xm, check : Math.abs(check)})
            i++

            xm = (xr + xl) / 2;

            if (fn(xm) * fn(xr) > 0) {
                xr = xm;
                check = (xm - xl) / xm;
            }
            else {
                xl = xm;
                check = (xm - xr) / xm;
            }
            //console.log(check, xm.toFixed(6));
        }
        console.log(data)
    }

    render() {
        return (
            <div>
                <p> Function </p>
                <input onChange={(e) => {
                    this.setState({ function: e.target.value })
                }}
                    value={this.state.function}
                    name="function"
                    placeholder="Function" /> <br></br>

                <p> XL </p>
                <input onChange={(e) => {
                    this.setState({ XL: e.target.value })
                }}
                    value={this.state.XL}
                    name="XL"
                    placeholder="XL" /> <br></br>

                <p> XR </p>
                <input onChange={(e) => {
                    this.setState({ XR: e.target.value })
                }}
                    value={this.state.XR}
                    name="XR"
                    placeholder="XR" /> <br></br> <br></br>

                <Button onClick={this.result}> Result </Button> <br></br>

                <Table columns={columns} dataSource={data} />

            </div>
        );
    }
}

export default Bisection;