import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './LanguagesStyles';

const data = [
  { proficiency: 'Native', language: 'Arabic' },
  { proficiency: 'Proficient', language: 'English', },
  { proficiency: 'Advanced', language: 'French', },
  { proficiency: 'Intermediate', language: 'German', }
];

const Languages = () => (
  <Section>
    <SectionTitle>Languages</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.proficiency}</BoxText>
          <BoxNum>{card.language}</BoxNum>
        </Box>
      ))}
    </Boxes>
    {/* <SectionDivider/> */}
    <br />
  </Section>
);

export default Languages;