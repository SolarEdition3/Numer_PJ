import React, { Component } from 'react'
import '../App.less'
import { Button, Table } from 'antd'
import apis from '../APIindex'
const math = require('mathjs')


var dataSource = [];

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
        title: 'Error',
        key: 'error',
        dataIndex: 'error'
    }
];

class Bisection extends Component {
    constructor(props) {
        super(props)
        this.result = this.result.bind(this)
        this.fn = this.fn.bind(this)
        this.state = { XL: null, XR: null, function: "" }
    }

    async getData() {

        let tempData = null
        await apis.getRootofequation().then(res => { tempData = res.data })
        this.setState({ apiData: tempData })

        console.log("A",this.state.apiData[0]["function"])
        console.log("B",this.state.apiData[0]["XL"])
        console.log("B",this.state.apiData[0]["XR"])

        this.setState({
            function: this.state.apiData[0]["function"],
            XL: this.state.apiData[0]["XL"],
            XR: this.state.apiData[0]["XR"]
        })

    }

    onClickAPI = e => {

        this.getData()
    }

    fn(x) {
        console.log("A", this.state.function)
        return math.evaluate(this.state.function, { x: x })
    }

    result() {
        var fn = this.fn
        var Test = fn(3)
        console.log("B", Test)
        var xl = Number(this.state.XL);
        var xr = Number(this.state.XR);
        // console.log(fn);
        // console.log(xl);
        // console.log(xr);

        var data = [];
        data['xl'] = []
        data['xr'] = []
        data['xm'] = []
        data['error'] = []

        var eps = 0.001;
        var xmo, xmn;
        var i = 1;

        xmn = (xl + xr) / 2

        if (fn(xmn) * fn(xr) > 0) {
            xr = xmn
        } else {
            xl = xmn
        }

        data['xl'][0] = xl
        data['xr'][0] = xr
        data['xm'][0] = xmn.toFixed(6)
        data['error'][0] = Math.abs(error).toFixed(6)
        this.resultTable(data['xl'], data['xr'], data['xm'], data['error'])
        this.forceUpdate()

        while (true) {
            xmo = xmn
            xmn = (xl + xr) / 2

            if (fn(xmn) * fn(xr) > 0) {
                xr = xmn
            } else {
                xl = xmn
            }

            var error = Math.abs((xmn - xmo) / xmn)

            if (error <= eps) {
                break;
            }

            if (i >= 100) {
                break;
            }

            data['xl'][i] = xl
            data['xr'][i] = xr
            data['xm'][i] = xmn.toFixed(6)
            data['error'][i] = Math.abs(error).toFixed(6)
            i++

            this.resultTable(data['xl'], data['xr'], data['xm'], data['error'])
            this.forceUpdate()
            //console.log(xmn)
        }
        //console.log(data)
    }

    resultTable(xl, xr, xm, error) {
        dataSource = []
        for (var i = 0; i < xl.length; i++) {
            dataSource.push({
                iteration: i + 1,
                xl: xl[i],
                xr: xr[i],
                xm: xm[i],
                error: error[i],
            })
        }
    }

    render() {
        return (
            <div>
                <h1 style={{ fontSize: '30px' }}>Bisection</h1>
                <p> Function : </p>
                <input onChange={(e) => {
                    this.setState({ function: e.target.value })
                    this.forceUpdate()
                }}
                    value={this.state.function}
                    placeholder="Function" />

                <p> XL : </p>
                <input onChange={(e) => {
                    this.setState({ XL: e.target.value })
                    this.forceUpdate()
                }}
                    value={this.state.XL}
                    placeholder="XL" />

                <p> XR :</p>
                <input onChange={(e) => {
                    this.setState({ XR: e.target.value })
                    this.forceUpdate()
                }}
                    value={this.state.XR}
                    placeholder="XR" />

                <br></br> <br></br>

                <Button onClick={this.result}> Result </Button> <br></br>
                <Button onClick={this.onClickAPI}> API </Button> <br></br>

                <Table columns={columns} dataSource={dataSource} />

            </div>
        );
    }
}

export default Bisection;