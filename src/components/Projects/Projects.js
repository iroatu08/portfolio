import React, {useState, useMemo} from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import Pagination from "../../constants/pagination";



const ShowLink = (i) => {
  if (i == 0) {
    return "hidden";
  }
  if (i == 1) {
    return "hidden";
  }
  if (i == 2) {
    return "hidden";
  }
  if (i == 3) {
    return "hidden";
  } 
  if (i == 4) {
    return "hidden";
  }else {
    return "";
  }
};


let PageSize = 4;


const Projects = () => {

  const [currentPage, setCurrentPage] = useState(1)

  const currentProjectPage = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return projects.slice(firstPageIndex, lastPageIndex);
  }, [currentPage])
  
  return(
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {currentProjectPage.map(
        ({ id, image, title, description, tags, source, visit }, i) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>

            <div style={{ marginTop: "25px" }}>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>

            <UtilityList>
              <ExternalLinks href={source} target="_blank" className={ShowLink(i)}>
                Code
              </ExternalLinks>
              <ExternalLinks href={visit} target="_blank">Visit</ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>

   
    <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={projects.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
  </Section>

  

  
  )
};

export default Projects;
