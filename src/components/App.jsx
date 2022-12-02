import React, { Component } from 'react';
import { Box } from './Box';
import { VideoList } from './VideoList';
import { Player } from './Player/Player';
import { ReaderList } from './Reader/ReaderList';
import { Buttons } from './Reader/Buttons';
import { Controls } from './Reader/Controls';
import videos from '../data/videos';
import publications from '../data/publications';

export class App extends Component {
  state = {
    selectedVideo: null,
    activeIndex: 0,
  };

  selectedVideo = link => {
    this.setState({ selectedVideo: link });
  };

  prevPublication = () => {
    this.setState(prevState => ({ activeIndex: prevState.activeIndex - 1 }));

    if (this.state.activeIndex === 0) {
      this.setState({ activeIndex: publications.length - 1 });
    }
  };

  nextPublication = () => {
    this.setState(prevState => ({ activeIndex: prevState.activeIndex + 1 }));

    if (this.state.activeIndex === publications.length - 1) {
      this.setState({
        activeIndex: 0,
      });
    }
  };

  render() {
    const { selectedVideo, activeIndex } = this.state;

    const totalPublications = publications.length;
    const activePublication = activeIndex + 1;
    const currentPublication = publications[activeIndex];

    return (
      <Box p={6}>
        <Buttons
          prev={this.prevPublication}
          next={this.nextPublication}
          activeIndex={activeIndex}
          totalPublications={totalPublications}
        />
        <Controls
          totalPublications={totalPublications}
          activePublication={activePublication}
        />
        <ReaderList currentPublication={currentPublication} />

        <h1>
          Selected video:{' '}
          {selectedVideo ? selectedVideo : 'вы ещё ничего не выбрали'}
        </h1>
        <VideoList videos={videos} onSelect={this.selectedVideo} />
        <Player url={selectedVideo} />
      </Box>
    );
  }
}

export default App;
