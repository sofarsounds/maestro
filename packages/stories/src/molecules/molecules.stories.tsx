import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { BrowserRouter } from 'react-router-dom';

import {
  Navbar,
  Pagination,
  Modal,
  useModal,
  HeroImage,
  PrimaryButton,
  Textfield,
  FormGroup,
  Footer,
  Grid,
  Subnav,
  Card
} from 'uikit';

storiesOf('05 / Molecules|Pagination', module)
  .addDecorator(withKnobs)
  .add('Pagination', () => (
    <div>
      <h1>Pagination</h1>

      <div>
        <Pagination
          data-qaid="pag1"
          currentPage={1}
          onPageChange={p => action(`Page changed to ${p}`)}
          totalRecords={40}
        />
      </div>

      <br />
      <br />

      <div>
        <Pagination
          data-qaid="pag2"
          currentPage={2}
          onPageChange={p => {
            action(`Page changed to ${p}`);
          }}
          totalRecords={80}
        />
      </div>

      <br />
      <br />

      <div>
        <Pagination
          data-qaid="pag3"
          currentPage={12}
          onPageChange={p => {
            action(`Page changed to ${p}`);
          }}
          totalRecords={300}
        />
      </div>

      <br />
      <br />

      <div>
        <Pagination
          data-qaid="pag4"
          currentPage={12}
          onPageChange={p => {
            action(`Page changed to ${p}`);
          }}
          totalRecords={96}
        />
      </div>
    </div>
  ));

storiesOf('05 / Molecules|Navbar', module)
  .add('Navbar', () => (
    <div style={{ paddingTop: '100px' }}>
      <Navbar data-qaid="navbar">
        <Navbar.ItemContainer>
          <span style={{ color: '#fff' }}>LEFT</span>
        </Navbar.ItemContainer>
        <Navbar.ItemContainer align="right">
          <Navbar.Item href="#">London</Navbar.Item>
          <Navbar.Item href="#">Perform</Navbar.Item>
          <Navbar.Item>Host</Navbar.Item>
          <Navbar.Item>Your Events</Navbar.Item>
          <Navbar.Item>Your Account</Navbar.Item>
          <Navbar.Item>English</Navbar.Item>
        </Navbar.ItemContainer>
      </Navbar>
      <h1>Navbar Component</h1>
      <div style={{ height: '500px' }}>Scrollable Content</div>
    </div>
  ))
  .add('Navbar - Fixed', () => (
    <div style={{ paddingTop: '100px' }}>
      <h1>Navbar Component</h1>
      <Navbar fixed={true}>
        <Navbar.ItemContainer>
          <span style={{ color: '#fff' }}>LEFT</span>
        </Navbar.ItemContainer>
        <Navbar.ItemContainer align="right">
          <Navbar.Item href="#">London</Navbar.Item>
          <Navbar.Item href="#">Perform</Navbar.Item>
          <Navbar.Item>Host</Navbar.Item>
          <Navbar.Item>Your Events</Navbar.Item>
          <Navbar.Item>Your Account</Navbar.Item>
          <Navbar.Item>English</Navbar.Item>
        </Navbar.ItemContainer>
      </Navbar>

      <div style={{ height: '500px' }}>Scrollable Content</div>
    </div>
  ));

function ModalExample() {
  const [modal, toggleModal] = useModal();

  return (
    <>
      <PrimaryButton onClick={toggleModal}>Click me</PrimaryButton>
      <Modal {...modal}>
        <p>Hello</p>
      </Modal>
    </>
  );
}

storiesOf('05 / Molecules|Modal', module).add('Modal', () => <ModalExample />);

storiesOf('05 / Molecules|HeroImage', module)
  .add('Default', () => (
    <HeroImage
      height="400px"
      imageURL="https://www.stratatiles.co.uk/wp-content/uploads/2015/04/102.jpg"
      title="I am the Title"
      subtitle="I am a subtitle"
    />
  ))
  .add('With Children', () => (
    <HeroImage
      height="400px"
      imageURL="https://www.stratatiles.co.uk/wp-content/uploads/2015/04/102.jpg"
      title="I am the Title"
      subtitle="I am a subtitle"
    >
      <PrimaryButton>An Action</PrimaryButton>
    </HeroImage>
  ))
  .add('Parallax', () => (
    <div>
      <HeroImage
        height="400px"
        imageURL="https://www.stratatiles.co.uk/wp-content/uploads/2015/04/102.jpg"
        title="I am the Title"
        subtitle="I am a subtitle"
        parallax
      >
        <PrimaryButton>An Action</PrimaryButton>
      </HeroImage>

      <div style={{ height: '1000px' }} />
    </div>
  ));

storiesOf('05 / Molecules|FormGroup', module)
  .addDecorator(withKnobs)
  .add('FormGroup', () => (
    <FormGroup
      label={text('Label', 'Email address')}
      required={boolean('Required', true)}
      errorMsg={text('Error Msg', null)}
    >
      <Textfield placeholder="your@email.com" />
    </FormGroup>
  ));

storiesOf('05 / Molecules|Footer', module).add('Footer', () => (
  <Footer.Wrapper data-qaid="footer">
    <Footer.Top>
      <Footer.Title>Explore Sofar.</Footer.Title>
      <Footer.Subtitle>
        Each month Sofar is happening in <b>413 cities</b> all around the world.
      </Footer.Subtitle>
      <Footer.CityInputWrapper>
        <Textfield placeholder="Type to find your city" />
      </Footer.CityInputWrapper>
      <Grid>
        <Footer.LogoWithSlogan />
        <Footer.LinkSection>
          <Footer.SectionHeader>Learn More</Footer.SectionHeader>
          <Footer.SectionLink href="#">About</Footer.SectionLink>
          <Footer.SectionLink href="#">How it works</Footer.SectionLink>
          <Footer.SectionLink href="#">FAQ</Footer.SectionLink>
          <Footer.SectionLink href="#">Press</Footer.SectionLink>
          <Footer.SectionLink href="#">Our People</Footer.SectionLink>
          <Footer.SectionLink href="#">Terms & Conditions</Footer.SectionLink>
        </Footer.LinkSection>
        <Footer.LinkSection>
          <Footer.SectionHeader>Discover</Footer.SectionHeader>
          <Footer.SectionLink href="#">Events</Footer.SectionLink>
          <Footer.SectionLink href="#">Cities</Footer.SectionLink>
          <Footer.SectionLink href="#">Blog</Footer.SectionLink>
          <Footer.SectionLink href="#">Videos</Footer.SectionLink>
          <Footer.SectionLink href="#">Student Discount</Footer.SectionLink>
        </Footer.LinkSection>
        <Footer.LinkSection>
          <Footer.SectionHeader>Get Involved</Footer.SectionHeader>
          <Footer.SectionLink href="#">Perform</Footer.SectionLink>
          <Footer.SectionLink href="#">Host</Footer.SectionLink>
          <Footer.SectionLink href="#">Partnerships</Footer.SectionLink>
          <Footer.SectionLink href="#">Careers</Footer.SectionLink>
          <Footer.SectionLink href="#">Contact us</Footer.SectionLink>
        </Footer.LinkSection>
      </Grid>
    </Footer.Top>
    <Footer.Bottom>
      <Footer.SocialIcons>
        <a href="">
          <Footer.Icon name="facebookOutline" />
        </a>
        <a href="">
          <Footer.Icon name="twitterOutline" />
        </a>
        <a href="">
          <Footer.Icon name="instagramOutline" />
        </a>
        <a href="">
          <Footer.Icon name="spotifyOutline" />
        </a>
        <a href="">
          <Footer.Icon name="youtubeOutline" />
        </a>
      </Footer.SocialIcons>
      <Footer.CopyrightMsg>
        &copy; 2019 Sofar Sounds. All Rights Reserved.
      </Footer.CopyrightMsg>
    </Footer.Bottom>
  </Footer.Wrapper>
));

const links = [
  'All',
  'Backstage Pass',
  'City Secrets',
  'Highlights of the Month',
  'People of Sofar',
  'Other People',
  'Concert Reviews',
  'Another Link'
];
storiesOf('05 / Molecules|Subnav', module).add('Subnav', () => (
  <div style={{ width: '100%' }}>
    <Subnav.Container>
      {links.map(l => (
        <Subnav.Link key={l} active={l === 'Backstage Pass'} to="/" as="a">
          {l}
        </Subnav.Link>
      ))}
    </Subnav.Container>
  </div>
));

storiesOf('05 / Molecules|Card', module)
  .addDecorator(withKnobs)
  .add('With Image', () => (
    <BrowserRouter>
      <div style={{ width: '100%', maxWidth: '950px' }}>
        <Card.Container linkTo="https://www.google.com">
          <Card.Image
            url={text(
              'Image URL',
              'https://sofarlive.cdn.prismic.io/sofarlive/ab56300a2ff2f667c6af44d2c0d301daa0865855_oompa-boston-041118-brandon_johnson2.jpg'
            )}
          />
          <Card.Content>
            <Card.Title>
              {text('Title', 'Sofar turns 10! Celebrate with us')}
            </Card.Title>
            <Card.Preview>
              {text(
                'Body',
                'Can you believe it? Sofar Sounds is turning TEN! What started as a little side hobby in a London flat with just eight people is now in...'
              )}
            </Card.Preview>
            <Card.Footer>Customisable Footer</Card.Footer>
          </Card.Content>
        </Card.Container>
      </div>
    </BrowserRouter>
  ))
  .add('Inverted', () => (
    <BrowserRouter>
      <div
        style={{
          background: '#000',
          padding: '25px',
          width: '100%',
          maxWidth: '950px'
        }}
      >
        <Card.Container inverted linkTo="https://www.google.com">
          <Card.Image
            url={text(
              'Image URL',
              'https://sofarlive.cdn.prismic.io/sofarlive/ab56300a2ff2f667c6af44d2c0d301daa0865855_oompa-boston-041118-brandon_johnson2.jpg'
            )}
          />
          <Card.Content>
            <Card.Title>
              {text('Title', 'Sofar turns 10! Celebrate with us')}
            </Card.Title>
            <Card.Preview>
              {text(
                'Body',
                'Can you believe it? Sofar Sounds is turning TEN! What started as a little side hobby in a London flat with just eight people is now in...'
              )}
            </Card.Preview>
            <Card.Footer>Customisable Footer</Card.Footer>
          </Card.Content>
        </Card.Container>
      </div>
    </BrowserRouter>
  ));
