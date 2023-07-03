import React from "react";
import {
  DiFirebase,
  DiGit,
  DiJavascript, 
   DiResponsive,
  DiWordpress,
  DiZend,
} from "react-icons/di";
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
    <br />
    <SectionTitle>Technologies</SectionTitle>

    <SectionText>
      {/* I am a skilled and experienced software developer with a focus on
      front-end web development. My expertise includes technologies such as
      HTML5, CSS3, Bootstrap, Tailwind, Javascript, and Wordpress. I also have
      experience in back-end technologies like Python, Postgresql, and Node Js.
      My passion is to create user-friendly, accessible, and visually pleasing
      websites and web applications. */}
      I possess a strong command of HTML5, CSS3, Bootstrap, Tailwind,
      Javascript, and Wordpress, enabling me to create visually appealing
      websites and web applications that prioritize user-friendliness and
      accessibility. In addition, I am proficient in back-end technologies such
      as Python, Postgresql, and Node.js. My passion lies in crafting
      exceptional digital experiences that resonate with users and deliver
      impactful results.
    </SectionText>
    <List>
      <ListItem>
        <DiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Html, Css, React.js, Bootstrap, FramerMotion, Vue.js Tailwind.css
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Python Flask, <br />
            PostgreSQL, MySQL, Firebase, MongoDb
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like figma, Photoshop
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiWordpress size="3rem" />
        <ListContainer>
          <ListTitle>CMS</ListTitle>
          <ListParagraph>
            Experience with <br />
            Wordpress and Shopify
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiResponsive size="3rem" />
        <ListContainer>
          <ListTitle>QA/Testing</ListTitle>
          <ListParagraph>
            Experience with <br />
            Postman, Responsively, Jest, GTmetrix.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiGit size="3rem" />
        <ListContainer>
          <ListTitle>Team Collaboration</ListTitle>
          <ListParagraph>
            Experience with <br />
            Microsoft Teams, Slack, Github, Gitlab, GoogleMeet, Zoom
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
