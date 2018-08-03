import React, {Component} from 'react';

import Pet from './Pet'
export default class Dashboard extends React.Component{

constructor(props){
  super(props)
}

onAdoptPet() {
   console.log('we are Adopted which means deleted with 204');
 }

  render(){
    return(
      <div>
      <Pet petToAdopt={this.props.cat}
        onAdopt={this.onAdoptPet}
      />
      <Pet petToAdopt={this.props.dog}
        onAdopt={this.onAdoptPet}
      />
      </div>
    );
  }

}
