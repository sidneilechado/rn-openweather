import React, {Component} from 'react';
import {Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {weatherConditions} from '../../utils/WeatherConditions';

import {Container, BodyContainer, CenteredContainer, WhiteText} from './styles';

class Weather extends Component {
  render() {
    return (
      <Container bgcolor={weatherConditions[this.props.weather].color}>
        <CenteredContainer>
          <Icon
            size={72}
            name={weatherConditions[this.props.weather].icon}
            color="#fff"
          />
          <WhiteText fontsize="48px">{this.props.temperature}˚</WhiteText>
          <WhiteText fontsize="36px">
            {this.props.city}, {this.props.country}
          </WhiteText>
        </CenteredContainer>
        <CenteredContainer>
          <Button
            onPress={() => this.props.getCurrentPosition()}
            title="Atualize o clima"
          />
        </CenteredContainer>
        <BodyContainer>
          <WhiteText fontsize="48px">
            {weatherConditions[this.props.weather].title}
          </WhiteText>
          <WhiteText fontsize="24px">
            {weatherConditions[this.props.weather].subtitle}
          </WhiteText>
        </BodyContainer>
      </Container>
    );
  }
}

export default Weather;
