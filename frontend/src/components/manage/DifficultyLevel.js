import React, { Component } from 'react'
import styles from './difficultyLevel.scss'

const levels = ["easy", "medium", "hard"]

const DifficultyLevel = (props) => {
    const onLevelChange = (e) => {
        console.log('e.target.value',e.target.value)
        props.onChange(e.target.value)
    }
    return(
        <div className={styles.difficultyLevel}>
            <label>Difficulty Level</label>
                <select  className={styles.select} value={props.value} onChange={onLevelChange}>
                    {levels.map((level) => 
                        <option key={level} value={level}>{level}</option>)}
                </select>
        </div>
    )

}

export default DifficultyLevel