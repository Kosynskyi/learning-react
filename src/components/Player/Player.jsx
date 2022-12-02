import React, { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

export class Player extends Component {
  state = {
    videoIsLoaded: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.url !== this.props.url) {
      this.setState({ videoIsLoaded: false });
    }
  }

  render() {
    const { url } = this.props;
    const { videoIsLoaded } = this.state;
    const showLoader = url && !videoIsLoaded;

    const playerSize = videoIsLoaded ? '100%' : 0;
    return (
      <>
        {showLoader && <p>Загружаем...</p>}
        <PlayerWrapper>
          <StyledPlayer
            width={playerSize}
            height={playerSize}
            url={url}
            controls
            onReady={() => this.setState({ videoIsLoaded: true })}
          />
        </PlayerWrapper>
      </>
    );
  }
}
