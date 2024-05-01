import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
//1.使用import {ReactComponent as XX} from XXX 引入svg
import { ReactComponent as DayCloudyIcon } from './images/day-cloudy.svg';
import { ReactComponent as RainIcon } from './images/rain.svg';
import { ReactComponent as RefreshIcon } from './images/refresh.svg';
import { ReactComponent as AirFlowIcon } from './images/airFlow.svg';
// import './App.css';
import styled from '@emotion/styled'; //step1.載入emotion套件
import { ThemeProvider } from '@emotion/react'; //stepI.從＠emotion/react引入ThemeProvider
//one.定義深色主題配色
const theme = {
  light: {
    backgroundColor: '#ededed',
    foregroundColor: '#f9f9f9',
    boxShadow: '0 1px 3px 0 #999999',
    titleColor: '#212121',
    temperatureColor: '#757575',
    textColor: '#828282'
  },
  dark: {
    backgroundColor: '#1F2022',
    foregroundColor: '#121416',
    boxShadow:
      '0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15)',
    titleColor: '#f9f9fa',
    temperatureColor: '#dddddd',
    textColor: '#cccccc'
  }
};
//step2.定義帶有styled的div元件

/*three.在styled component中透過props取得對的顏色*/
/*stepIIII.雖然沒有使用props把theme導入但Container依然可以取用到theme這個props */
const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeatherCard = styled.div`
  position: relative;
  min-width: 360px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.foregroundColor};
  box-sizing: border-box;
  padding: 30px 15px;
`;

const Location = styled.div`
  font-size: 28px;
  color: ${({ theme }) => theme.titleColor};
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 30px;
`;

const CurrentWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Temperature = styled.div`
  color: ${({ theme }) => theme.temperatureColor};
  font-size: 96px;
  font-weight: 300;
  display: flex;
`;

const Celsius = styled.div`
  font-weight: normal;
  font-size: 42px;
`;

const AirFlow = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 20px;
  svg {
    width: 25px;
    height: auto;
    margin-right: 30px;
  }
`;

const Rain = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
  svg {
    width: 25px;
    height: auto;
    margin-right: 30px;
  }
`;

const Refresh = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-size: 12px;
  display: inline-flex;
  align-items: flex-end;
  color: ${({ theme }) => theme.textColor};
  svg {
    margin-left: 10px;
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;

//step3.把上面定義好的styled-component 當成元件使用

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');
  return (
    //stepII.把所有會用到主題配色的部分都包在ThemeProvider裡並透過theme這個props來設定主題
    <ThemeProvider theme={theme[currentTheme]}>
      {/*stepIII.把原本寫在Container內的props移除*/}
      <Container>
        <WeatherCard>
          <Location>臺北市</Location>
          <Description>多雲時晴</Description>
          <CurrentWeather>
            <Temperature>
              23<Celsius>°C</Celsius>
            </Temperature>
            <DayCloudyIcon />
            {/*2.使用該元件*/}
          </CurrentWeather>
          <AirFlow>
            <AirFlowIcon />
            23 m/h
          </AirFlow>
          <Rain>
            <RainIcon />
            48%
          </Rain>
          <Refresh>
            最後觀測時間：上午 12:03 <RefreshIcon />
          </Refresh>
        </WeatherCard>
      </Container>
    </ThemeProvider>
  );
}

export default App;
