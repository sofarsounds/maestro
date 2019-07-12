import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import {
  Spacer,
  Grid,
  Col,
  withShadow,
  StickyContainer,
  withTypography
} from '../../src';

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

storiesOf('Utils', module)
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
const Typography = styled.p<any>`
  ${withTypography}
`;

storiesOf('Utils', module).add('withTypography', () => (
  <>
    <h1>Typography Alignment</h1>

    <Typography>
      A paragraph tag that does not have an align property set
    </Typography>
    <Typography align={'none'}>A paragraph tag aligned none</Typography>
    <Typography align={'left'}>A paragraph tag aligned left</Typography>
    <Typography align={'center'}>A paragraph tag aligned center</Typography>
    <Typography align={'right'}>A paragraph tag aligned right</Typography>

    <h1>Typography decoration</h1>
    <Typography underline>Text that is underlined</Typography>
    <Typography fontWeight={'lighter'}>Text that is lighter</Typography>
    <Typography fontWeight={'regular'}>Text that is regular</Typography>
    <Typography fontWeight={'bold'}>Text that is bold</Typography>

    <Spacer p={2} />

    <h1>Typography line height</h1>
    <Typography lineHeight={'2'}>Typography with 2 line height</Typography>
    <Typography align={'none'}>A paragraph tag aligned none</Typography>
    <Typography align={'none'}>A paragraph tag aligned none</Typography>

    <Spacer p={2} />

    <Typography lineHeight={'4'}>Typography with 4 line-height</Typography>
    <Typography align={'none'}>A paragraph tag aligned none</Typography>
    <Typography align={'none'}>A paragraph tag aligned none</Typography>
  </>
));
