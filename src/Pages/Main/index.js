import Geolocation from '@react-native-community/geolocation';

import React, {Component} from 'react';
import api from '../../services/api';
import Weather from '../../components/Weather';

import {Container, LoadingText} from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.getCurrentPosition = this.getCurrentPosition.bind(this);

    this.state = {
      isLoading: true,
      temperature: 0,
      weatherCondition: '',
      city: '',
      country: '',
      error: null,
    };
  }

  componentDidMount() {
    this.getCurrentPosition();
  }

  getCurrentPosition() {
    Geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Erro ao pegar a previsão',
        });
      },
    );
  }

  async fetchWeather(latitude, longitude) {
    await api
      .get('weather', {
        params: {
          lat: latitude,
          lon: longitude,
        },
      })
      .then(res => {
        this.setState({
          temperature: res.data.main.temp,
          weatherCondition: res.data.weather[0].main,
          city: res.data.name,
          country: res.data.sys.country,
          isLoading: false,
        });
      });
  }

  render() {
    const {isLoading} = this.state;
    return (
      <Container>
        {isLoading ? (
          <LoadingText>Carregando previsão</LoadingText>
        ) : (
          <>
            <Weather
              weather={this.state.weatherCondition}
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              getCurrentPosition={this.getCurrentPosition}
            />
          </>
        )}
      </Container>
    );
  }
}
