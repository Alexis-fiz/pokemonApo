/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import get from 'lodash/get';
import React, { useState, useEffect } from 'react';
import { MdRemoveCircleOutline } from 'react-icons/md';

import { TYPE_TO_IMG } from '../../constants/constants';

import styles from './PokemonTeamCard.module.scss';

export default function PokemonTeamCard({
  pokemon, team, onClick, isBattle = false,
}) {
  const [currentPokemon, setCurrentPokemon] = useState(pokemon);

  const pokemonImg = get(pokemon, 'sprites.front_default');
  const healthbarStyle = {
    backgroundColor: '#5ABA4A',
    width: `${((currentPokemon.battleStats.hpStat / currentPokemon.stats.hpStat) * 100).toFixed(3)}%`,
    height: '0.375rem',
    borderRadius: '0.625rem',
  };

  function onClickRemovePokemon(_pokemon) {
    const _team = team.getValue();
    const newTeam = _team.filter(member => member.id !== _pokemon.id);
    team.update(newTeam);
  }

  useEffect(() => {
    setCurrentPokemon(pokemon);
  }, [pokemon]);

  if (!pokemon) return null;
  return (
    <div className={styles.container}>
      <button type="button" className={styles.miniCardContainer} onClick={() => onClick(currentPokemon)}>
        <div className={styles.detailsContainer}>
          <p className={styles.pokemonName}>{currentPokemon.name}</p>
          <div className={styles.statsBar}>
            <div style={healthbarStyle} />
          </div>
          {currentPokemon.selectedMoves.map(move => (
            <div className={styles.moveList} key={move.name}>
              <p className={styles.moveDetails}>{move.name}</p>
              <img src={`/assets/img/${TYPE_TO_IMG[move.type.name]}`} alt="" className={styles.typeImg} />
            </div>
          ))}
        </div>
        <div className={styles.rightContainer}>
          <img className={styles.img} src={pokemonImg} alt="pokemon in team" />
        </div>
      </button>
      {!isBattle && (
      <button type="button" className={styles.removeBtn} onClick={() => onClickRemovePokemon(pokemon)}>
        <MdRemoveCircleOutline className={styles.icon} />
      </button>
      )}
    </div>
  );
}
