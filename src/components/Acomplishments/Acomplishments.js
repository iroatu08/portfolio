import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, BoxPara, BoxLink } from './AcomplishmentsStyles';

const data = [
  { year: 2018, text: 'New Horizons Nigeria', desc:'Diploma in web development', },
  { year: 2022, text: 'Udacity Nano Degree', desc:'Fullstack Web Developer', link: 'https://confirm.udacity.com/ZE32NGCG', linkText:'View Certificate' },
];


const Acomplishments = () => (
 <Section>
  <SectionTitle>Personal Acchievements</SectionTitle>
  <Boxes>
    {data.map((card, index) => (
      <Box key={index}>
        <BoxNum>{card.year}</BoxNum>
        <BoxText>{card.text}</BoxText>
        <BoxPara>{card.desc}</BoxPara>
        <BoxLink  href={card.link}>{card.linkText}</BoxLink>


      </Box>
    ))}
  </Boxes>
 </Section>
);

export default Acomplishments;
