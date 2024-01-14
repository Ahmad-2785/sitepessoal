import React from "react";
import {
  Center,
  ChakraProvider,
  Flex,
  Grid,
  Text,
  Icon,
  Box,
} from "@chakra-ui/react";

import { FaFreeCodeCamp } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import Theme from "../BotaoDarkMode/Tema";
import DividerCustomizado from "../Divider/DividerCustom";
import Footer from "../Footer/Footer";
import HeroPaginas from "../HeroPaginas/HeroPaginas";
import Projetos from "../../assets/imagem/projetos.png";
import { ProjectsBackEnd, ProjetosFreeCode } from "./Projetos";
import ProjetoCardBack from "./ProjetoCard/ProjetoCardBack";
import StackCard from "./ProjetoCard/StackCard";

import Cabecalho from "../Cabecalho/Cabecalho";

import {
  SiFlask,
  SiLaravel,
  SiMongodb,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
} from "react-icons/si";
import FreeCodeCampCard from "./ProjetoCard/FreeCodeCampCard";

function PaginaProjetosClone() {
  return (
    <ChakraProvider theme={Theme}>
      <Cabecalho />
      <HeroPaginas
        mb={8}
        nome={"Projects"}
        imagem={Projetos}
        descricao={
          <Text fontSize={"15"}>
            Here are some projects that I have developed
          </Text>
        }
      />
      <DividerCustomizado />

      <Box maxW={"800px"} mr={"auto"} ml={"auto"}>
        <Flex flexDir={"column"}>
          {/* 
        
        ==== Projetos Front-end ==== 
        
        <Center mb={6}>
            <Flex flexDir={"row"}>
              <Text color={"gray.400"} as={"b"} fontSize={25}>
                Simple React Projects
              </Text>
              <Icon
                ml={4}
                color={"gray.400"}
                boxSize={"40px"}
                as={FaReact}
                style={{ transform: `rotate(${rotation}deg)` }}
              />
            </Flex>
          </Center>

          <Grid
            templateColumns={{
              base: "repeat(1, 2fr)",
              md: "repeat(3, 1fr)",
            }}
            mb={10}
            gap={3}
            p={3}
          >

       
           {ProjectsComponents.map((projeto, index) => (
              <ProjetoCardFront
                key={index}
                tag1={projeto.tag1}
                nome={projeto.nome}
                componenteLive={projeto.component}
                descricao={projeto.descricao}
                descricaoCard={projeto.descricaoCard}
                icon={projeto.icon}
                link={projeto.link}
              />
            ))}
          </Grid>  */}

          <Center mb={6}>
            <Flex flexDir={"row"}>
              <Text color={"gray.400"} as={"b"} fontSize={25}>
                Back End Projects
              </Text>
              <Icon ml={4} color={"gray.400"} boxSize={"30px"} as={FaServer} />
            </Flex>
          </Center>

          {/* 
              Projetos back-end
          */}

          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            mb={10}
            gap={3}
            p={3}
          >
            {ProjectsBackEnd.map((projeto, index) => (
              <ProjetoCardBack
                key={index}
                nome={projeto.nome}
                tag2={projeto.tag2}
                descricao={projeto.descricao}
                descricaoCard={projeto.descricaoCard}
                icon={projeto.icon}
                projeto={projeto}
              ></ProjetoCardBack>
            ))}
          </Grid>

          <Center mb={6}>
            <Flex flexDir={"row"}>
              <Text color={"gray.400"} as={"b"} fontSize={25}>
                FreeCodeCamp Projects
              </Text>
              <Icon
                ml={4}
                color={"gray.400"}
                boxSize={"40px"}
                as={FaFreeCodeCamp}
              />
            </Flex>
          </Center>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            mb={10}
            gap={3}
            p={3}
          >
            <FreeCodeCampCard projeto={ProjetosFreeCode[0]} />
            <FreeCodeCampCard projeto={ProjetosFreeCode[0]} />
            <FreeCodeCampCard projeto={ProjetosFreeCode[0]} />
          </Grid>

          {/* <StackCard
              name1={"PostgreSQL"}
              name2={"Flask"}
              icon1={SiFlask}
              icon2={SiPostgresql}
            />

            <StackCard
              name1={"MongoDB"}
              name2={"React"}
              icon1={SiMongodb}
              icon2={SiReact}
            />

            <StackCard
              name1={"React"}
              name2={"Node.Js"}
              icon1={SiReact}
              icon2={SiNodedotjs}
            />
                        <StackCard
              name1={"PHP"}
              name2={"Node.Js"}
              icon1={SiReact}
              icon2={SiPhp}
            />
          </Grid> */}
        </Flex>
      </Box>
      <DividerCustomizado />
      <Footer />
    </ChakraProvider>
  );
}

export default PaginaProjetosClone;
