import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadWeather } from './actions/weather-action'
import Select from 'react-select'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: [
                { value: 'istanbul', label: 'İstanbul' },
                { value: 'ankara', label: 'Ankara' },
                { value: 'izmir', label: 'İzmir' }
            ]
        }

        this.date = new Date();
    }
    selectHandle = (e) => {
        if (e) {
            this.props.actions.loadWeather(e.value);
        }
    }

    dateHandler = (date) => {
        if (date === "date") {
            return this.date.getUTCDate().toString();
        }
        else if (date === "month") {
            if (this.date.getUTCMonth() + 1 === 13) {
                return 1;
            }
            else {
                return (this.date.getUTCMonth() + 1).toString()
            }
        }
        else if (date === "year") {
            return this.date.getFullYear().toString();
        }
    }
    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-center">
                    <Select
                        options={this.state.values}
                        onChange={this.selectHandle}
                        className="mt-4 w-50"
                        isClearable={true}
                    />
                </div>
                <div className="text-center mt-5">
                    <div className="location-box">
                        <div className="location">{this.props.weathers.name}</div>
                        <div className="date">{this.props.weathers.main && (this.dateHandler("date") + "/" + this.dateHandler("month") + "/" + this.dateHandler("year"))}</div>
                    </div>
                    <div className="weather-box">
                        <div className={this.props.weathers.main && 'temp'}>{this.props.weathers.main && this.props.weathers.main.temp.toString().substring(0, 2) + "℃"}</div>
                        <div className="weather">{this.props.weathers.weather && this.props.weathers.weather[0].main}</div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        weathers: state.weatherReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            loadWeather: bindActionCreators(loadWeather, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);