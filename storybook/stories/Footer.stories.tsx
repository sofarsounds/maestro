import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { BrowserRouter } from 'react-router-dom';

import { Footer, Grid, Textfield } from '../../src';

storiesOf('Footer', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <h1>Footer</h1>
      <Footer.Wrapper data-qaid="footer">
        <Footer.Top>
          <Footer.Title>Explore Sofar.</Footer.Title>
          <Footer.Subtitle>
            Each month Sofar is happening in <b>413 cities</b> all around the
            world.
          </Footer.Subtitle>
          <Footer.CityInputWrapper>
            <Textfield placeholder="Type to find your city" />
          </Footer.CityInputWrapper>
          <Grid>
            <Footer.LogoWithSlogan href="/" />
            <Footer.LinkSection>
              <Footer.SectionHeader>Learn More</Footer.SectionHeader>
              <Footer.SectionLink href="#">About</Footer.SectionLink>
              <Footer.SectionLink href="#">How it works</Footer.SectionLink>
              <Footer.SectionLink href="#">FAQ</Footer.SectionLink>
              <Footer.SectionLink href="#">Press</Footer.SectionLink>
              <Footer.SectionLink href="#">Our People</Footer.SectionLink>
              <Footer.SectionLink href="#">
                Terms & Conditions
              </Footer.SectionLink>
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
    </>
  ));
