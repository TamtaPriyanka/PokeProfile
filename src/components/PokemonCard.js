import { Component } from "react";
import axios from "axios";

export default class PokemonCard extends Component{
    state={
        name:'',
        imageUrl:'',
        pokemonIndex:'',
        types: [],
        description: '',
        stats : {
            hp: "",
            attack: "",
            defence: "",
            speed: "",
            specialAttack: "",
            specialDefence: "",

        },
        height: "",
        weight: "",
         abilities: "",
       
    };

    async componentDidMount(){
        const name=this.props.name;
        const url=this.props.url;
        const pokemonIndex=url.split("/")[url.split('/').length-2];
       

        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
        const pokemonSpecies = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}`;
        const pokemonRes = await axios.get(pokemonUrl);
        const imageUrl = pokemonRes.data.sprites.back_default;

        let{hp, attack, defence, speed, specialAttack, specialDefence} ='';
        pokemonRes.data.stats.map(stat => {
            switch(stat.stat.name) {
                case 'hp':
                    hp=stat['base_stat'];
                    break;
                case 'attack':
                    attack=stat['base_stat'];
                    break;   
                       
                case 'defence':
                     defence=stat['base_stat'];
                    break;           
                case 'speed':
                    speed=stat['base_stat'];
                    break;
                 case 'special-attack':
                     specialAttack=stat['base_stat'];
                    break;
                case 'special-defence':
                      specialDefence=stat['base_stat'];
                     break;
            }
        });

        const height = (pokemonRes.data.height)*10; //height in cm
        const weight = (pokemonRes.data.weight)*100; //weight in grams
        const types = pokemonRes.data.types.map(type=> type.type.name);
        const abilities= pokemonRes.data.abilities.map(ability=> {
            return ability.ability.name;
        });

       
        await axios.get(pokemonSpecies).then(res => {
            let description='';
            res.data.flavor_text_entries.some(flavor => {
                if(flavor.language.name==='en') {
                    description= flavor.flavor_text;
                    return;
                }
                
            });

            this.setState({
            description

            })
        })
       

        this.setState({
            imageUrl,
            pokemonIndex,
            name,
            types, 
            stats:{
                hp,
                attack,
                defence,
                speed,
                specialDefence,
                specialAttack
            },
            height,
            weight,
            abilities
        });
    }

    render() {
        

        return(
           
            <div className="col-md-6 mb-5" >
                <div className="card">
                   <div className="card-header">
                        <div className="row">
                            <div className="row">
                                <div className="col-8">
                                    <h5>{this.state.pokemonIndex}.</h5>
                                </div>
                                <div className="col-4">
                                    <div className="float-right">
                                        {this.state.types.map(type => (
                                            <span key={type} className="badge badge-primary badge-pill mr-1">{type}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                         </div>
                   </div>
                   <div className="card-body">
                       <div className= "row align-items-center">
                           <div className="col-md-4">
                                <h4 className="pokemon-name">{this.state.name}</h4>
                               <img src={this.state.imageUrl} className="card-img-top pokemon-image rounded-circle mx-auto mt-2" alt="Pokemon Image"/>
                            </div> 
                            <div className="col-md-8"> 
                            
                            <div className="row align-item-center">
                                <div className= "col-12 col-md-4">HP</div>
                                <div className="col-12 col-md-8">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressBar" style={{width: `${this.state.stats.hp}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            <small>{this.state.stats.hp}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-item-center">
                                <div className= "col-12 col-md-4">Attack</div>
                                <div className="col-12 col-md-8">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressBar" style={{width: `${this.state.stats.attack}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            <small>{this.state.stats.attack}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-item-center">
                                <div className= "col-12 col-md-4">Defence</div>
                                <div className="col-12 col-md-8">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressBar" style={{width: `${this.state.stats.defence}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            <small>{this.state.stats.defence}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-item-center">
                                <div className= "col-12 col-md-4">Speed</div>
                                <div className="col-12 col-md-8">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressBar" style={{width: `${this.state.stats.speed}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            <small>{this.state.stats.speed}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-item-center">
                                <div className= "col-12 col-md-4">S-Attack</div>
                                <div className="col-12 col-md-8">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressBar" style={{width: `${this.state.stats.specialAttack}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            <small>{this.state.stats.specialAttack}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-item-center">
                                <div className= "col-12 col-md-4">S-Defence</div>
                                <div className="col-12 col-md-8">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressBar" style={{width: `${this.state.stats.specialDefence}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            <small>{this.state.stats.specialDefence}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            </div>
                           
                       </div>
                       <div className=" description row mt-1">
                                <div className="col"><p className="p-2">{this.state.description}</p></div>
                        </div>

                   </div>

                   
                   <div className="card-body">
                       <h5 className=" profile card-title mt-0"><u>Profile:</u></h5>
                       <div className="row">
                           <div className="col-md-6">
                               <div className="row">
                                   <div className="col-md-6">
                                   <h6 className="float-right">Height:</h6>
                                   </div>
                                   <div className="col-md-6">
                                       <h6 className="float-left">{this.state.height} cm</h6>
                                   </div>
                               </div>
                               
                           </div>
                       </div>
                       <div className="row">
                           <div className="col-md-6">
                               <div className="row">
                                   <div className="col-md-6">
                                   <h6 className="float-right">Weight:</h6>
                                   </div>
                                   <div className="col-md-6">
                                       <h6 className="float-left">{this.state.weight} grams</h6>
                                   </div>
                               </div>
                               
                           </div>
                       </div>
                       <div className="row">
                           <div className="col-md-9">
                               <div className="row">
                                   <div className="col-md-4">
                                   <h6 className="float-right">Abilities:</h6>
                                   </div>
                                   <div className="col-md-6">
                                       <h6 className="float-left">{this.state.abilities} </h6>
                                   </div>
                               </div>
                               
                           </div>
                       </div>
                   </div>
                </div>
                

            </div>
        )
    }
}