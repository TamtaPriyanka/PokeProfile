import { Component } from "react";

import PokemonList from "./PokemonList";

export default class DashBoard extends Component{
    render() {
        return(
            <div>
               
                <PokemonList/>
            </div>
        )
    };
}