import React, { Component } from 'react'
import '../App.less'
import { Button, Table } from 'antd'
import regression from 'regression'

var x = [];
var y = [];
var InputTable = [];
var answer;

var AnswerArray = []

var columnsInput = [
    {
        title: 'No.',
        dataIndex: 'no',
        key: 'no',
    },
    {
        title: 'X',
        dataIndex: 'x',
        key: 'x',
    },
    {
        title: 'Y',
        dataIndex: 'y',
        key: 'y',
    },
]

var columnsAnswer = [
    {
        title: 'Answer',
        dataIndex: 'Ans',
        key: 'Ans',
    }
]

class Linear extends Component {
    constructor(props) {
        super(props)
        this.Result = this.Result.bind(this)
        this.state = { nPoints: null, showTable: false }
    }

    IntitialValues() {
        x = []
        y = []
        for (var i = 0; i < this.state.nPoints; i++) {
            x[i] = parseFloat(document.getElementById('x' + (i + 1)).value)
            y[i] = parseFloat(document.getElementById('y' + (i + 1)).value)
        }
        console.log("X",x)
        console.log("Y",y)
    }

    CalLinear(nPoints) {
        if (x.length !== 0 && y.length !== 0) {
            var arr = []
            var xi = this.state.X
            for (let i = 0; i < nPoints; i++) {
                arr.push([x[i], y[i]])
            }
            console.log(arr)
        }
        //console.log(regression.linear(arr).predict(xi)[1])
        answer = regression.linear(arr).predict(xi)[1]
    }

    Result() {
        AnswerArray = []
        // console.log(this.state.nPoints)
        this.IntitialValues()
        this.CalLinear(this.state.nPoints)
        console.log('answer', answer)

        AnswerArray.push({ Ans: answer })
        this.forceUpdate()
    }

    createTableInput(nPoints) {
        x = []
        y = []
        InputTable = []

        for (var i = 1; i <= nPoints; i++) {
            x.push(
                <input
                    id={'x' + i}
                    key={'x' + i}
                    placeholder={'x' + i}
                />
            )

            y.push(
                <input
                    id={'y' + i}
                    key={'y' + i}
                    placeholder={'y' + i}
                />
            )

            InputTable.push({
                no: i,
                x: x[i - 1],
                y: y[i - 1]
            })
        }

        this.setState({
            showTable: true
        })
        //console.log(x, y,InputTable)
    }

    render() {
        return (
            <div>
                <input onChange={async (e) => {
                        await this.setState({
                            nPoints: e.target.value,
                        })
                        this.createTableInput(
                            parseInt(this.state.nPoints)
                        )
                        this.forceUpdate()
                    }}
                    value={this.state.nPoints}
                    placeholder="Number of Point"
                />

                <input onChange={(e) => {
                    this.setState({ X: e.target.value })
                    this.forceUpdate()
                }}
                    value={this.state.X}
                    placeholder="X" />

                <Button onClick={this.Result}> result </Button>

                {this.state.showTable && (<Table columns={columnsInput} dataSource={InputTable} />)}

                <Table columns={columnsAnswer} dataSource = {AnswerArray} pagination={false}/>

            </div>
        );
    }
}

export default Linear;