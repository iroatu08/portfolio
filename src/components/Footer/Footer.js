import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
  <FooterWrapper>
    <LinkList>
    <LinkColumn>
    <LinkTitle>Call</LinkTitle>
    <LinkItem href="tel:+2348125171050">+2348125171050</LinkItem>
    </LinkColumn>

    <LinkColumn>
    <LinkTitle>Email</LinkTitle>
    <LinkItem href="mailto:iroatu7@gmail.com">iroatu7@gmail.com
    </LinkItem>
    </LinkColumn>
    </LinkList>

    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>"Simplicity is the ultimate sophistication." - Leonardo da Vinci</Slogan>
      </CompanyContainer>

      <SocialContainer>
      <SocialIcons href='https://github.com/iroatu08'>
    <AiFillGithub size='3rem'/>
    </SocialIcons>
    <SocialIcons href='https://www.linkedin.com/in/princeiroatu/'>
    <AiFillLinkedin size='3rem'/>
    </SocialIcons>
    <SocialIcons href='https://www.instagram.com/developer_prince/'>
    <AiFillInstagram size='3rem'/>
    </SocialIcons>

      </SocialContainer>
     
    </SocialIconsContainer>
  </FooterWrapper>
    )
};

export default Footer;
