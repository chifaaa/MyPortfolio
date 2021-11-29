import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Meticulous and creative web developer with a flair for creating
          elegant solutions in a minimum of time. Passionate about UX and
          Artificial Intelligence, excited to learn and eager to join you as a
          Front end or Full Stack web Developer to help increase customer satisfaction and
          retention.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Download CV</Button> */}
        <br />
      </LeftSection>
      <br />
    </Section>
  </>
);

export default Hero;