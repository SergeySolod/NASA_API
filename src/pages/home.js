import React from 'react'

export const Home = () => {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">NASA API</h1>
                <p className="lead">Данное приложение написано с использованием стороннего сервера (NASA API), он
                    позволяет получить самую актуальную информацию, связанную с комической тематикой. Основная
                    технология, на которой напиано приложение - React/Redux.
                </p>
            </div>
        </div>
    )
}