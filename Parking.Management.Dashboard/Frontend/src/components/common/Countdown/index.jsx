import React, { Component } from "react";

class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    // Timestamp alvo (substitua com o seu próprio)
    this.targetTimestamp = props.timer; // Timestamp correspondente a uma data no futuro

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.updateCountdown();

    // Atualize o contador a cada segundo
    this.interval = setInterval(() => this.updateCountdown(), 1000);
  }

  componentWillUnmount() {
    // Limpe o intervalo ao desmontar o componente
    clearInterval(this.interval);
  }

  updateCountdown() {
    const currentDate = Math.floor(Date.now() / 1000); // Timestamp atual em segundos
    const timeRemaining = this.targetTimestamp - currentDate;

    if (timeRemaining <= 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const days = Math.floor(timeRemaining / 86400);
      const hours = Math.floor((timeRemaining % 86400) / 3600);
      const minutes = Math.floor((timeRemaining % 3600) / 60);
      const seconds = timeRemaining % 60;

      this.setState({ days, hours, minutes, seconds });
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div>
        <div>
          <span>{this.props.text} </span>
          <span>{days}d</span> <span>{hours}h</span> <span>{minutes}m</span>{" "}
          <span>{seconds}s</span>
        </div>
      </div>
    );
  }
}

export default CountdownTimer;
