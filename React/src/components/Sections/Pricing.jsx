import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Planes</h1>
            <p className="font13">
              ¿Cuáles son tus gustos? En Impredecible, hay opciones para satisfacer las necesidades de todas las personas.
               Si estás buscando una relación seria, puedes encontrarla allí. Si deseas hacer nuevos amigos,
               también es posible. Y si eres un estudiante universitario 
              que busca una experiencia enriquecedora, estás en el lugar correcto.
              <br />
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="browser"
                price="COP 16,900"
                title="Hombres"
                text="Si eres hombre y te interesa tu mismo género, este plan es ideal para ti. Está diseñado para que obtengas recomendaciones 
                exclusivas si buscas amor, quieres salir con gente nueva o solo tener algo casual, este es el lugar correcto."
                offers={[
                  { name: "Exclusividad", cheked: true },
                  { name: "Nuevas experiencias", cheked: true },
                  { name: "Disfruta sin límites", cheked: true },
                  { name: "Puedes cambiar de plan cuando quieras", cheked: true },
                  { name: "Puedes cancelar el plan cuando quieras", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="COP 16,900"
                title="Mujeres"
                text="Si eres mujer y te interesa tu mismo género, este plan es ideal para ti. Está diseñado para que obtengas recomendaciones 
                exclusivas si buscas amor, quieres salir con gente nueva o solo tener algo casual, este es el lugar correcto."
                offers={[
                  { name: "Exclusividad", cheked: true },
                  { name: "Nuevas experiencias", cheked: true },
                  { name: "Disfruta sin límites", cheked: true },
                  { name: "Puedes cambiar de plan cuando quieras", cheked: true },
                  { name: "Puedes cancelar el plan cuando quieras", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="COP 38,900"
                title="Mixto"
                text="Si eres hombre o mujer y te interesa tu género opuesto, este plan es ideal para ti. Está diseñado para que obtengas recomendaciones 
                exclusivas si buscas amor, quieres salir con gente nueva o solo tener algo casual, este es el lugar correcto."
                offers={[
                  { name: "Exclusividad", cheked: true },
                  { name: "Nuevas experiencias", cheked: true },
                  { name: "Disfruta sin límites", cheked: true },
                  { name: "Puedes cambiar de plan cuando quieras", cheked: true },
                  { name: "Puedes cancelar el plan cuando quieras", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;