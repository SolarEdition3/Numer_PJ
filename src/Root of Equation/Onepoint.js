import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Card, Input, Button, Table } from 'antd'
import Desmos from 'desmos'
import { addStyles } from 'react-mathquill'
const math = require('mathjs')

addStyles()

var dataInTable = []
const columns = [
    {
        title: 'Iteration',
        dataIndex: 'iteration',
        key: 'iteration',
    },
    {
        title: 'X',
        dataIndex: 'x',
        key: 'x',
    },
    {
        title: 'Error',
        key: 'error',
        dataIndex: 'error',
    },
]

export default class Test extends Component {
    constructor(props) {
        super(props)
        this.bi = this.bi.bind(this)
        this.fn = this.fn.bind(this)
        this.Ex = this.Ex.bind(this)
        this.state = { ans: [], Funtion: '', X0: null }
        this.elt = {}
        this.calculator = {}
    }

    async Ex() {
        // const url = "https://api.randomuser.me/";
        const url = 'http://localhost:8000/Onepoint'
        // const url = "http://127.0.0.1/Json/item.json";
        const response = await fetch(url)
        console.log(response)
        const data = await response.json()
        console.log(data.Onepoint.X0)
        this.setState({
            Funtion: data.Onepoint.Funtion,
            X0: data.Onepoint.X0,
        })
        console.log(this.state.X0)
    }

    componentDidMount() {
        //ทำอัตโนมัติหลังจาก render เสร็จ
        console.log(this.state.Funtion)
        console.log(this)
        this.elt = document.getElementById('calculator')
        this.calculator = Desmos.GraphingCalculator(this.elt, {
            expressions: false,
            backgroundColor: '#F4F6F7',
            textColor: '#C70039',
        })
        this.calculator.setExpression({
            id: 'graph1',
            latex: this.state.Funtion,
        })
        document.getElementsByClassName(
            'dcg-graphpaper-branding'
        )[0].style.display = 'none'
    }

    componentDidUpdate() {
        this.calculator.destroy()
        this.elt = document.getElementById('calculator')
        this.calculator = Desmos.GraphingCalculator(this.elt, {
            expressions: false,
            backgroundColor: '#F4F6F7',
            textColor: '#C70039',
        })
        this.calculator.setExpression({
            id: 'graph1',
            latex: this.state.Funtion,
        })
        console.log(this.calculator)
        document.getElementsByClassName(
            'dcg-graphpaper-branding'
        )[0].style.display = 'none'
    }

    fn(x) {
        return math.evaluate(this.state.Funtion, { x: x })
    }

    func(Funtion, x) {
        // console.log(this);
        return math.evaluate(Funtion, { x: x })
        // console.log(math.evaluate(algebraObj, { x: x }));
    }

    error(xnew, xold) {
        return Math.abs((xnew - xold) / xnew)
    }

    bi() {
        var func = this.func
        var error = this.error
        var xnew = 0
        var epsilon = parseFloat(0.0)
        var n = 0
        var xold = Number(this.state.X0)
        var data = []
        data['x'] = []
        data['error'] = []

        do {
            xnew = func(this.state.Funtion, xold)
            epsilon = error(xnew, xold)
            data['x'][n] = xnew.toFixed(8)
            data['error'][n] = Math.abs(epsilon).toFixed(8)
            n++
            xold = xnew
            if (n >= 1000) {
                break
            }
        } while (Math.abs(epsilon) > 0.000001)

        this.createTable(data['x'], data['error'])
    }

    createTable(x, error) {
        dataInTable = []
        console.log('X length = ' + x.length)
        for (var i = 0; i < x.length; i++) {
            dataInTable.push({
                iteration: i + 1,
                x: x[i],
                error: error[i],
            })
        }
        console.log(dataInTable)
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                <h1>One Point Iteration</h1>
                <div className="row">
                    <div className="col">
                        <div>
                            <p>Funtion</p>
                            <Input
                                onChange={(e) => {
                                    this.setState({ Funtion: e.target.value })
                                    this.forceUpdate()
                                }}
                                value={this.state.Funtion}
                                name="Funtion"
                                placeholder="Funtion"
                            />
                            <br></br>
                            <br></br>
                            <Input
                                onChange={(e) => {
                                    this.setState({ X0: e.target.value })
                                    this.forceUpdate()
                                }}
                                value={this.state.X0}
                                name="X0"
                                placeholder="X0"
                            />
                            <br></br>
                            <br></br>
                            <Button onClick={this.bi} type="primary">
                                Submit
                            </Button>
                            <Button
                                style={{
                                    marginLeft: '73%',
                                    backgroundColor: '#d580ff',
                                    borderColor: '#76D7C4',
                                }}
                                onClick={this.Ex}
                                type="primary"
                            >
                                Example
                            </Button>
                        </div>
                        <br></br>
                    </div>
                    <div className="col">
                        <div
                            id="calculator"
                            style={{
                                width: '600px',
                                height: '400px',
                            }}
                        ></div>
                    </div>
                </div>
                <br></br>
                <br></br>
                {/* {this.state.ans.map((data, i) => {
          return (
            <p>
              Iteration No.{i + 1} Root of equation is {data}
            </p>
          );
        })} */}
                <Card
                    title={'Output'}
                    bordered={true}
                    style={{
                        width: '100%',
                        background: '#2196f3',
                        color: '#FFFFFFFF',
                    }}
                    id="outputCard"
                >
                    <Table
                        pagination={{ defaultPageSize: 5 }}
                        columns={columns}
                        dataSource={dataInTable}
                        bodyStyle={{
                            fontWeight: 'bold',
                            fontSize: '18px',
                            color: 'black',
                        }}
                    ></Table>
                </Card>
            </div>
        )
    }
}
