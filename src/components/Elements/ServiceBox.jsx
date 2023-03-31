import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
//Iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBahtSign, faBasketShopping, faBathtub, faBed, faCarAlt, faChampagneGlasses, faChurch, faFilm, faHotdog, faHotel, faMartiniGlass, faMicrophone, faMountainSun, faMusic, faPallet, faPeopleArrows, faPeopleGroup, faPersonBooth, faPersonHalfDress, faPlay, faPoop, faShop, faTheaterMasks, faTicket, faTicketAlt, faTicketSimple, faVideoSlash} from "@fortawesome/free-solid-svg-icons";


export default function ServiceBox({icon,title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <RollerIcon />;
      break;
    case "monitor":
      getIcon = <MonitorIcon />;
      break;
    case "browser":
      getIcon = <BrowserIcon />;
      break;
    case "printer":
      getIcon = <PrinterIcon />;
      break;
      
    case "restaurante":
      
      getIcon = <FontAwesomeIcon icon={faShop}/>;
      break;
    case "teatro":
      getIcon = <FontAwesomeIcon icon={faTheaterMasks}/>;
      break;
    case "picnic":
      getIcon = <FontAwesomeIcon icon={faBasketShopping}/>;
      break;
    case "bar":
      getIcon = <FontAwesomeIcon icon={faChampagneGlasses}/>;
      break;
    case "concierto":
      getIcon = <FontAwesomeIcon icon={faPersonBooth}/>;
      break;
    case "atracciones":
      getIcon = <FontAwesomeIcon icon={faTicket}/>;
      break;
    case "cine":
      getIcon = <FontAwesomeIcon icon={faFilm}/>;
      break;
    case "mirador":
      getIcon = <FontAwesomeIcon icon={faMountainSun}/>;
      break;
    case "motel":
      getIcon = <FontAwesomeIcon icon={faHotel}/>;
      break;
    case "puebliar":
      getIcon = <FontAwesomeIcon icon={faCarAlt}/>;
      break;
    case "videojuegos":
      getIcon = <FontAwesomeIcon icon={faPlay}/>;
      break;
    case "fiesta":
      getIcon = <FontAwesomeIcon icon={faPeopleGroup}/>;
      break;


    default:
      getIcon = <RollerIcon />;
      break;
  
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 1500px) {
    margin: 0 auto;
    font-size: 30px;
    align-self: center;
  }
`;
const TitleStyle = styled.h2`
  width: 190%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  align-self: center;
  @media (max-width: 860px) {
    padding: 20px 0;
    align-self: center;

  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  align-self: center;
`;