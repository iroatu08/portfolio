import React from "react";
import { DiFirebase, DiJavascript, DiReact, DiWordpress, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>

    <SectionText>
      I am a skilled and experienced software developer with a focus on
      front-end web development. My expertise includes technologies such as
      HTML5, CSS3, Bootstrap, Tailwind, Javascript, and Wordpress. I also have
      experience in back-end technologies like Python, Postgresql, and Node Js.
      My passion is to create user-friendly, accessible, and visually pleasing
      websites and web applications.
    </SectionText>
    <List>
      <ListItem>
        <DiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
           Html, Css, React.js, Vue.js
           Tailwind.css
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.js, Python Flask <br/>
            Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br/>
            tools like figma
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiWordpress size="3rem" />
        <ListContainer>
          <ListTitle>CMS</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Wordpress and Shopify
          </ListParagraph>
        </ListContainer>
      </ListItem>



    </List>
  </Section>
);

export default Technologies;
