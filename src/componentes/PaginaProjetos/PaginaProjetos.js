import React from "react";
import { ChakraProvider, Flex, Grid, Text } from "@chakra-ui/react";
import Theme from "../BotaoDarkMode/Tema";
import DividerCustomizado from "../Divider/DividerCustom";
import Footer from "../Footer/Footer";
import HeroPaginas from "../HeroPaginas/HeroPaginas";
import Projetos from "../../assets/imagem/projetos.png";

import Cabecalho from "../Cabecalho/Cabecalho";

import Gerador from "./ProjetosReactLive/GeradorDeSenha/Gerador";
import Pomodoro from "./ProjetosReactLive/Pomodoro/Pomodoro";
import BennyDex from "./ProjetosReactLive/BennyDex/BennyDex";
import Calculadora from "./ProjetosReactLive/Calculadora/Calculadora";

import ApiHandle from "./Outros/ApiHandle";
import ProjetoCard from "./ProjetoCard";

import { RiLockPasswordFill } from "react-icons/ri";
import { GiTomato } from "react-icons/gi";
import { MdCatchingPokemon } from "react-icons/md";
import { BsCalculator } from "react-icons/bs";
import { GiAncientSword } from "react-icons/gi";
import { SiAiohttp } from "react-icons/si";

function PaginaSobre() {
  return (
    <ChakraProvider theme={Theme}>
      <Cabecalho />
      <HeroPaginas
        mb={8}
        nome={"Projetos"}
        imagem={Projetos}
        descricao={
          <Text fontSize={"15"}>
            Aqui estão alguns projetos que eu desenvolvi
          </Text>
        }
      />
      <DividerCustomizado />
      <Flex justify="center">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          width={"800px"}
          maxW={"90%"}
          gap={4}
          p={1}
        >
          <ProjetoCard
            tag1={"Front-end"}
            nome={"Pomodoro Timer"}
            corIcon={"red.400"}
            componenteLive={<Pomodoro />}
            descricaoCard={"Relógio Pomodoro simples para estudar/trabalhar"}
            descricao={
              "Relógio pomodoro simples para estudar/trabalhar, criado com React e a chakra-ui, que também utilizei para estilizar esse site. Esse app é vivo! Você pode testá-lo aqui mesmo!"
            }
            icon={GiTomato}
          />
          <ProjetoCard
            tag1={"Front-end"}
            nome={"Gerador de Senha"}
            componenteLive={<Gerador />}
            icon={RiLockPasswordFill}
            corIcon={"orange.300"}
            descricaoCard={"Um pequeno gerador de senha"}
            descricao={
              "Um gerador de senha simples desenvolvido em React com estilização da Chakra-ui. Esse app é vivo! Você pode testá-lo aqui mesmo"
            }
          />
          <ProjetoCard
            nome={"BennyDex"}
            tag1={"Front-end"}
            icon={MdCatchingPokemon}
            componenteLive={<BennyDex />}
            descricaoCard={"Um aplicativo que consome da PokéAPI"}
            descricao={
              <Text fontSize={13}>
                Uma imitação do clássico Pokédex, feito através do consumo de
                uma API especializada em enviar informações sobre Pokémons.{" "}
                <br />
                Fiz o fetch das informações e as renderizei com React, e fiz a
                estilização com a Chakra-ui{" "}
              </Text>
            }
          />

          <ProjetoCard
            tag1={"Front-end"}
            nome={"Calculadora"}
            icon={BsCalculator}
            componenteLive={<Calculadora />}
            descricaoCard={"Uma calculadora feita em React"}
            descricao={
              <Text justify={"center"}>
                Uma calculadora feita em React e Chakra-ui. A calculadora possui
                modo escuro! Esse app é vivo! <br />
                Você pode testá-lo aqui mesmo!
              </Text>
            }
          />

          <ProjetoCard
            tag2={"Back-end"}
            nome={"RPG API"}
            icon={GiAncientSword}
            iconModal={GiAncientSword}
            componenteLive={<ApiHandle urlProps={"localhost:5000/"} />}
            descricaoCard={
              "API feita em Flask, que retorna um herói ou um monstro!"
            }
            descricao={
              <Text justify={"center"}>
                Esta API em Python, utilizando o framework Flask, é responsável
                por gerar <Text as="b">heróis</Text> de RPG com níveis, status e
                nomes gerados aleatoriamente. Os heróis podem ter gênero
                masculino, feminino ou gênero neutro, e cada um possui um
                inventário customizado correspondente ao seu nível atual.
                <br />
                Além disso, a API também é capaz de gerar{" "}
                <Text as="b">monstros</Text> com níveis aleatórios, assim como
                os heróis, variando de 1 a 99. Os monstros possuem nomes gerados
                aleatoriamente, temperamento, e status de força e defesa.
              </Text>
            }
          />
          <ProjetoCard
            tag2={"Back-end"}
            nome={"Whoami?"}
            icon={SiAiohttp}
            iconModal={SiAiohttp}
            componenteLive={<ApiHandle />}
            descricaoCard={
              "API que retorna os dados do cabecalho da requisição"
            }
            descricao={
              <Text justify={"center"}>
                Este é um aplicativo JavaScript que funciona como um
                microserviço para análise de cabeçalhos de solicitação. Ele
                extrai e exibe informações do cabeçalho de solicitação de uma
                solicitação HTTP.
                <br />
                Este é um aplicativo em JavaScript que foi desenvolvido como um
                dos projetos finais do currículo de APIs da FreeCodeCamp. Ele
                foi criado para atender aos requisitos do projeto e demonstrar
                as habilidades adquiridas no contexto de construção e
                manipulação de APIs.
              </Text>
            }
          />
        </Grid>
      </Flex>
      <DividerCustomizado />
      <Footer />
    </ChakraProvider>
  );
}

export default PaginaSobre;
