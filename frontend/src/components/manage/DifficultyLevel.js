import React, { Component } from 'react'

const levels = ["easy", "medium", "hard"]

const DifficultyLevel = (props) => {
    const onLevelChange = (e) => {
        console.log('e.target.value',e.target.value)
        props.onChange(e.target.value)
    }
    return(
        <label>Difficulty Level
            <select value={props.value} onChange={onLevelChange}>
                {levels.map((level) => 
                    <option key={level} value={level}>{level}</option>)}
            </select>
        </label>
    )

}

export default DifficultyLevel