import React, { Component } from 'react';

import './style.css';

import TechItem from './TechItem';

import atentionIcon from '../../assets/images/Atenção.svg';

class TecList extends Component {
   state = {
      newTech: '',
      techs: []
   };

   //Ele é execultado assim que o componente aparece em tela
   componentDidMount() {
      const techs = localStorage.getItem('techs');

      if (techs) {
         this.setState({ techs: JSON.parse(techs) });
      }
   }

   //Ele é execultado sempre que ouver alterações nas props ou estado
   componentDidUpdate(_, prevState) {
      //this.props, this.state
      if (prevState.techs !== this.state.techs) {
         localStorage.setItem('techs', JSON.stringify(this.state.techs));
      }
   }

   //Ele é execultado quando o componente deixa de existir
   componentWillUnmount() {

   }

   handleInputChange = e => {
      this.setState({ newTech: e.target.value });
   };

   handleSubimit = e => {
      e.preventDefault();

      this.setState({
         techs: [... this.state.techs, this.state.newTech],
         newTech: '',
      })
   }

   hadleDelete = (tech) => {
      this.setState({ techs: this.state.techs.filter(t => t !== tech) })
   }

   render() {
      return (
         <main>
            <div className="info">
               <img src={atentionIcon} alt="Atenção" />
               <div className="aviso">
                  <h1>Importante!</h1>
                  <h2>Adicione as tecnologias que deseja estudar!</h2>
               </div>
            </div>
            <div className="form">
               <form onSubmit={this.handleSubimit}>
                  <input
                     placeholder="Adicionar novo item"
                     type="text" value={this.state.newTech}
                     required onChange={this.handleInputChange} />

                  <button type="submit">Adicionar</button>
               </form>
            </div>
            <div className="info-list">
               <table>
                  <thead>
                     <tr>
                        <th>Nome do Item</th>
                        <th>Excluir</th>
                     </tr>
                  </thead>
                  <tbody>
                     {this.state.techs.map(tech =>
                        <TechItem
                           key={tech}
                           tech={tech}
                           onDelete={() => this.hadleDelete(tech)} />
                     )}
                  </tbody>
               </table>
            </div>
         </main>
      );
   }
};

export default TecList;