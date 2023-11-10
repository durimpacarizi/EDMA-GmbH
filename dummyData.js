import logo1 from "./images/logo1.png";
import logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.png";
import logo4 from "./images/logo4.png";
import project1 from "./images/project-1.jpeg";
import project2 from "./images/project-2.jpeg";
import project3 from "./images/project-3.jpeg";

const ProjectsListData = [
  {
    id: 1,
    ProjectName: "WOHNDESIGN",
    projectImage: [project1],
    url: "#",
  },
  {
    id: 1,
    ProjectName: "EDMA GMBH",
    projectImage: [project2],
    url: "#",
  },
  {
    id: 1,
    ProjectName: "SPOT-TEC IMMOBILIEN AG",
    projectImage: [project3],
    url: "#",
  },
];

const ServicesData = [
  {
    id: 1,
    CompanyName: "ircon",
    img: [logo1],
    url: "http://www.ircon.cz/",
  },
];

const ClientsData = [
  {
    id: 1,
    CompanyName: "ircon",
    img: [logo1],
    url: "http://www.ircon.cz/",
  },
  {
    id: 2,
    CompanyName: "topolwater",
    img: [logo2],
    url: "http://old.topolwater.eu/english/index.html",
  },
  {
    id: 3,
    CompanyName: "czech republic",
    img: [logo4],
    url: "http://www.czechaid.cz/",
  },
  {
    id: 4,
    CompanyName: "republika e kosoves",
    img: [logo3],
    url: "https://ekosova.rks-gov.net/",
  },
];

export { ClientsData, ServicesData, ProjectsListData };
