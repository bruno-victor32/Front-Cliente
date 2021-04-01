import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
import MainCliente from './pages/cliente/main';
import DetalhesCliente from './pages/cliente/detalhes';
 
const Routes = () => (
 
    <BrowserRouter>
        <Switch>
            <Route exact path="/clientes" component={MainCliente} />
            <Route path="/clientes/:id" component={DetalhesCliente} />
        </Switch>
    </BrowserRouter>
)
 
export default Routes;