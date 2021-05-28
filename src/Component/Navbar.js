//Root OF Eqution
import Bisection from '../Root of Equation/Bisection'
import False_position from '../Root of Equation/False_position'
import Onepoint from '../Root of Equation/Onepoint'
import Newton_raphson from '../Root of Equation/Newton_raphson'
import Secant from '../Root of Equation/Secant'
//Regresstion
import Linear from '../Regression/Linear'
import MultipleLinear from '../Regression/MultipleLinear'
import Polynomial from '../Regression/Polynomial'
//Linear
import Conjugate_Gradient from '../Linear Algebra/Conjugate_Gradient'
import Crammer from '../Linear Algebra/Crammer'
import Gauss_eliminate from '../Linear Algebra/Gauss_eliminate'
import Gauss_Jordan from '../Linear Algebra/Gauss_Jordan'
import Gauss_seidel from '../Linear Algebra/Gauss_seidel'
import LU from '../Linear Algebra/LU'
import Jacobi from '../Linear Algebra/Jacobi'
//Interpolation
import Lagrange from '../Interpolation/Lagrange'
import Newton from '../Interpolation/Newton'
import Spline from '../Interpolation/Spline'

import Swagger from '../Swagger';

import React, { Component } from 'react';
import '../App.less';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const { SubMenu } = Menu;
const { Header } = Layout;

class Navbar extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Header className="header">
                        <Menu mode="horizontal" theme="dark" style={{ textAlign: "right" }}>
                            <SubMenu key="Root of Equation" title="Root of Equation">

                                <Menu.Item key="Bisection">
                                    <Link to="/Bisection">Bisection</Link>
                                </Menu.Item>
                                <Menu.Item key="False_position">
                                    <Link to="/False_position">False_position</Link>
                                </Menu.Item>
                                <Menu.Item key="Newton_raphson">
                                    <Link to="/Newton_raphson">Newton_raphson</Link>
                                </Menu.Item>
                                <Menu.Item key="Onepoint">
                                    <Link to="/Onepoint">Onepoint</Link>
                                </Menu.Item>
                                <Menu.Item key="Secant">
                                    <Link to="/Secant">Secant</Link>
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu key="Regression" title="Regression">
                                <Menu.Item key="Linear">
                                    <Link to="/Linear">Linear</Link>
                                </Menu.Item>
                                <Menu.Item key="MultipleLinear">
                                    <Link to="/MultipleLinear">MultipleLinear</Link>
                                </Menu.Item>
                                <Menu.Item key="Polynomial">
                                    <Link to="/Polynomial">Polynomial</Link>
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu key="Linear Algebra" title="Linear Algebra">
                                <Menu.Item key="Conjugate_Gradient">
                                    <Link to="/Conjugate_Gradient">Conjugate_Gradient</Link>
                                </Menu.Item>
                                <Menu.Item key="Crammer">
                                    <Link to="/Crammer">Crammer</Link>
                                </Menu.Item>
                                <Menu.Item key="Gauss_eliminate">
                                    <Link to="/Gauss_eliminate">Gauss_eliminate</Link>
                                </Menu.Item>
                                <Menu.Item key="Gauss_Jordan">
                                    <Link to="/Gauss_Jordan">Gauss_Jordan</Link>
                                </Menu.Item>
                                <Menu.Item key="Gauss_seideln">
                                    <Link to="/Gauss_seidel">Gauss_seidel</Link>
                                </Menu.Item>
                                <Menu.Item key="Jacobi">
                                    <Link to="/Jacobi">Jacobi</Link>
                                </Menu.Item>
                                <Menu.Item key="LU">
                                    <Link to="/LU">LU</Link>
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu key="Interpolation" title="Interpolation">
                                <Menu.Item key="Lagrange">
                                    <Link to="/Lagrange">Lagrange</Link>
                                </Menu.Item>
                                <Menu.Item key="Newton">
                                    <Link to="/Newton">Newton</Link>
                                </Menu.Item>
                                <Menu.Item key="Spline">
                                    <Link to="/Spline">Spline</Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Header>
                    <Switch>
                        <Route path="/Bisection" component={Bisection} />
                        <Route path="/False_position" component={False_position} />
                        <Route path="/Newton_raphson" component={Newton_raphson} />
                        <Route path="/Onepoint" component={Onepoint} />
                        <Route path="/Secant" component={Secant} />

                        <Route path="/Linear" component={Linear} />
                        <Route path="/Polynomial" component={Polynomial} />
                        <Route path="/MultipleLinear" component={MultipleLinear} />

                        <Route path="/Conjugate_Gradient" component={Conjugate_Gradient} />
                        <Route path="/Crammer" component={Crammer} />
                        <Route path="/Gauss_eliminate" component={Gauss_eliminate} />
                        <Route path="/Gauss_Jordan" component={Gauss_Jordan} />
                        <Route path="/Gauss_seidel" component={Gauss_seidel} />
                        <Route path="/Jacobi" component={Jacobi} />
                        <Route path="/LU" component={LU} />

                        <Route path="/Lagrange" component={Lagrange} />
                        <Route path="/Newton" component={Newton} />
                        <Route path="/Spline" component={Spline} />

                        <Route path = '/Swagger' component = {Swagger}/>
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default Navbar;
