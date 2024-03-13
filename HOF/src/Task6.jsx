import React, { Component } from 'react'

export default class Task6 extends Component {
    render() {
        const { data } = this.props
        let Filtered_Collections = data.filter(item => item.user_type === "Designer")
        let Reduced_Collections = Filtered_Collections.reduce((a, b) => a.years + b.years)
        console.log(Reduced_Collections);
        return (
            <div style={{ border: "1.33px solid black" }}>
                <h1>progression_6</h1>
                <input value={Reduced_Collections} type="text" />
            </div>
        )
    }
}