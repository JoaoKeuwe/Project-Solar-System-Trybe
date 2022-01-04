import React from 'react';
import Title from './Title';
import Planetcard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const planetList = planets.map(({ name, image }) => (
      <Planetcard
        key={ name }
        planetName={ name }
        planetImage={ image }
      />
    ));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { planetList }
      </div>
    );
  }
}

export default SolarSystem;
