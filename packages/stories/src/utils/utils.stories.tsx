import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Grid, Col, withShadow, StickyContainer } from 'uikit';

const Block = styled<any>(Col)`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${withShadow};
`;

const StickToMe = styled.div`
  height: 50px;
  width: 200px;
  background: #ccc;
`;

const Sticky = styled.div`
  width: 100%;
  height: 200px;
  background: blue;
`;

class StickyExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      stickToEl: null
    };
  }

  componentDidMount() {
    this.setState({ stickToEl: ReactDOM.findDOMNode(this) });
  }

  render() {
    const { stickToEl } = this.state;

    return (
      <div>
        <StickToMe />

        <StickyContainer stickToEl={stickToEl}>
          <Sticky />
        </StickyContainer>
      </div>
    );
  }
}

storiesOf('04 / Utils|withShadow', module)
  .add('withShadow', () => (
    <Grid gap="50px">
      {[1, 2, 3, 4, 5].map(d => (
        <Block sm={4} md={2} depth={d}>
          depth = {d}
        </Block>
      ))}
    </Grid>
  ))

  .add('StickyContainer', () => (
    <div>
      <h1>Sticky Container</h1>
      <StickyExample />
      <div style={{ height: '2000px' }} />
    </div>
  ));
