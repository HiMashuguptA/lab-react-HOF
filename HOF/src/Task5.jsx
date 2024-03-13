import React, { Component } from 'react'

export default class Task5 extends Component {

    render() {
        const { data } = this.props
        const Filtered_Collections = data.filter(item => item.age > 28 && item.age <= 50)
        return (
            <div style={{ border: "1.33px solid black" }}>
                <h1>progression_5</h1>
                {Filtered_Collections.map((item) => (
                    <p key={item.id}>
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