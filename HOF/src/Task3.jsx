import React, { Component } from 'react'

export default class Task3 extends Component {
    render() {
        const { data } = this.props
        let Filtered_Collections = data.filter(item => item.user_type === "Designer")
        return (
            <div style={{ border: "1.33px solid black" }}>
                <h1>progression_3</h1>
                {Filtered_Collections.map((item) => (
                    <p>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div style={{ width: "120px" }}>
                                <span>id: {item.id}</span>
                            </div >
                            <div style={{ width: "120px" }}>
                                <span>name: {item.name}</span>
                            </div>
                            <div style={{ width: "220px" }}>
                                <span>user_type: {item.user_type}</span>
                            </div></div>
                    </p>
                ))}
            </div>
        )
    }
}