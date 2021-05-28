import React, { Component } from 'react'
import '../App.less'
import { Button, Table } from 'antd'
const math = require('mathjs')

var dataSource = [];

const columns = [
    {
        title: 'Iteration',
        dataIndex: 'iteration',
        key: 'iteration'
    },
    {
        title: 'X',
        dataIndex: 'x',
        key: 'x'
    },
    {
        title: 'Error',
        key: 'error',
        dataIndex: 'error'
    }
];

class Onepoint extends Component {
    constructor(props) {
        super(props)
        this.result = this.result.bind(this)
        this.fn = this.fn.bind(this)
        this.state = { X: null, function: "" }
    }

    fn(x) {
        return math.evaluate(this.state.function, { x: x })
    }

    result() {
        var fn = this.fn
        var x = Number(this.state.X);
        // console.log(fn);
        // console.log(x);

        var data = [];

        data['x'] = []
        data['error'] = []

        var eps = 0.001;
        var xmo, xmn;
        var error;
        var i = 1;

        xmn = fn(x) ;
        data['x'][0] = xmn.toFixed(6)
        data['error'][0] = Math.abs(error).toFixed(6)
        this.resultTable(data['x'], data['error'])
        this.forceUpdate()

        while (true) {
            xmo = xmn ;
            xmn = fn(xmo)
            error = Math.abs((xmn - xmo) / xmn)

            if(error <= eps) {
                break ;
            }

            if(i >= 100) {
                break ;
            }

            data['x'][i] = xmn.toFixed(6)
            data['error'][i] = Math.abs(error).toFixed(6)
            i++

            this.resultTable(data['x'], data['error'])
            this.forceUpdate()
            console.log(xmn)
        }
        console.log(data)
    }

    resultTable(x, error) {
        dataSource = []
        for (var i = 0; i < x.length; i++) {
            dataSource.push({
                iteration: i + 1,
                x: x[i],
                error: error[i],
            })
        }
    }

    render() {
        return (
            <div>
                <h1 style={{ fontSize: '30px' }}>Onepoint</h1>
                <p> Function : </p>
                <input onChange={(e) => {
                    this.setState({ function: e.target.value })
                    this.forceUpdate()
                }}
                    value={this.state.function}
                    placeholder="Function" />

                <p> X0 : </p>
                <input onChange={(e) => {
                    this.setState({ X: e.target.value })
                    this.forceUpdate()
                }}
                    value={this.state.X}
                    placeholder="X0" />

                <br></br> <br></br>

                <Button onClick={this.result}> Result </Button> <br></br>

                <Table columns={columns} dataSource={dataSource} />

            </div>
        );
    }
}

export default Onepoint;
