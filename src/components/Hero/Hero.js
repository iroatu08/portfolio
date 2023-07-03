import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  SectionSpan,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio <SectionSpan>💼</SectionSpan>
      </SectionTitle>

      <SectionText>
        {/* I am a dedicated professional, who values open communication and
        teamwork. I am confident in my ability to contribute to any project and
        am excited to take on new challenges. */}
        Experienced frontend engineer skilled in creating seamless user
        experiences, transforming designs into code, and collaborating
        effectively with cross-functional teams. Passionate about innovation, and Ready to contribute expertise and drive impactful results.
      </SectionText>

      <Button onClick={() => (window.location = "mailto:iroatu7@gmail.com")}>
        Send a mail{" "} 😎
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
