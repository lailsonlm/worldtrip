/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const {index} = request.query

  const continents = [
    {
      slug: 'america-do-norte',
      name: 'América do Norte',
      banner: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      info: {
        description: 'A América do Norte corresponde à parte norte do continente americano, é formada por três países, Estados Unidos, Canadá e México, que ocupam juntos uma área de 23,6 milhões de quilômetros quadrados. Essa porção do continente americano está situada no ocidente e no hemisfério norte, esse limita-se ao norte com o Oceano Ártico, leste com Oceano Atlântico, sudeste com o mar das Caraíbas e no sul e oeste com o Oceano Pacífico.',
        countriesCount: 3,
        languages: 3,
      },
      mostVisetedCities: [
        {
          name: 'Nova York',
          country: 'Estados Unidos',
          image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png'
        },
        {
          name: 'Miami',
          country: 'Estados Unidos',
          image: 'https://images.unsplash.com/photo-1589083130544-0d6a2926e519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png'
        },
        {
          name: 'Los Angeles',
          country: 'Estados Unidos',
          image: 'https://images.unsplash.com/photo-1594663805807-29a7cc1847c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1591&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png'
        },
        {
          name: 'Las Vegas',
          country: 'Estados Unidos',
          image: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png'
        },
        {
          name: 'Cancun',
          country: 'México',
          image: 'https://images.unsplash.com/photo-1613506140303-a3742bcbee78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png'
        },
        {
          name: 'Orlando',
          country: 'Estados Unidos',
          image: 'https://images.unsplash.com/photo-1578318099746-8701bb066ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png'
        },
        {
          name: 'Toronto',
          country: 'Canadá',
          image: 'https://images.unsplash.com/photo-1542704792-e30dac463c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/125px-Flag_of_Canada_%28Pantone%29.svg.png'
        },
        {
          name: 'Vancouver',
          country: 'Canadá',
          image: 'https://images.unsplash.com/photo-1544161513-0179fe746fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/125px-Flag_of_Canada_%28Pantone%29.svg.png'
        },
        {
          name: 'São Francisco',
          country: 'Estados Unidos',
          image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png'
        },
        {
          name: 'Honolulu',
          country: 'Estados Unidos',
          image: 'https://images.unsplash.com/photo-1573992554018-83e7853bd45f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png'
        },
      ]
    },
    {
      slug: 'america-do-sul',
      name: 'América do Sul',
      banner: 'https://images.unsplash.com/photo-1597259847845-d4737f7e8e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      info: {
        description: 'Com extensão territorial de 17,8 milhões de quilômetros quadrados, a América do Sul consiste numa subdivisão do continente americano. Os países que integram essa porção continental são: Argentina, Bolívia, Brasil, Chile, Colômbia, Equador, Guiana, Paraguai, Peru, Suriname, Uruguai e Venezuela, além do território da Guiana Francesa.',
        countriesCount: 13,
        languages: 9,
      },
      mostVisetedCities: [
        {
          name: 'Buenos Aires',
          country: 'Argentina',
          image: 'https://images.unsplash.com/photo-1609080814811-5837f3c7095a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/125px-Flag_of_Argentina.svg.png'
        },
        {
          name: 'Lima',
          country: 'Peru',
          image: 'https://images.unsplash.com/photo-1577587230708-187fdbef4d91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/125px-Flag_of_Peru.svg.png'
        },
        {
          name: 'Rio de Janeiro',
          country: 'Brasil',
          image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png'
        },
      ]
    },
    {
      slug: 'asia',
      name: 'Ásia',
      banner: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      info: {
        description: 'A Ásia é o maior dos continentes terrestres, localizada totalmente no hemisfério oriental, em maior parte no hemisfério setentrional e com uma pequena porção de terras no hemisfério austral. Existem, ao todo, 50 países asiáticos. Além de possuir a maior área territorial (com 44.579.000 km²), abriga também a maior parte da população do planeta, com muitas de suas regiões alcançando as mais elevadas densidades demográficas já registradas. Se o continente asiático corresponde a um terço das terras emersas do planeta, seus habitantes correspondem a 61% da população mundial, com cerca de 4,299 bilhões de pessoas.',
        countriesCount: 50,
        languages: 2.301,
      },
      mostVisetedCities: [
        {
          name: 'Hong Kong',
          country: 'China',
          image: 'https://images.unsplash.com/photo-1471347025057-68ff089f54cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=964&q=80',
          flag: 'https://www.significados.com.br/foto/china.jpg'
        },
        {
          name: 'Bangkok',
          country: 'Tailândia',
          image: 'https://images.unsplash.com/photo-1578167635648-df79e1565908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1200px-Flag_of_Thailand.svg.png'
        },
        {
          name: 'Macau',
          country: 'China',
          image: 'https://images.unsplash.com/photo-1542252649-0f68be6cbf6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
          flag: 'https://www.significados.com.br/foto/china.jpg'
        },
        {
          name: 'Singapura',
          country: 'Singapura',
          image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/125px-Flag_of_Singapore.svg.png'
        },
        {
          name: 'Dubai',
          country: 'Emirados Árabes Unidos',
          image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/125px-Flag_of_the_United_Arab_Emirates.svg.png'
        },
        {
          name: 'Kuala Lumpur',
          country: 'Malásia',
          image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/125px-Flag_of_Malaysia.svg.png'
        },
        {
          name: 'Delhi',
          country: 'Índia',
          image: 'https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/125px-Flag_of_India.svg.png'
        },
        {
          name: 'Shenzhen',
          country: 'China',
          image: 'https://images.unsplash.com/photo-1634647626758-ad751a260e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://www.significados.com.br/foto/china.jpg'
        },
        {
          name: 'Mumbai',
          country: 'Índia',
          image: 'https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/125px-Flag_of_India.svg.png'
        },
        {
          name: 'Phuket',
          country: 'Tailândia',
          image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1101&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/125px-Flag_of_Thailand.svg.png'
        },
        {
          name: 'Tóquio',
          country: 'Japão',
          image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/125px-Flag_of_Japan.svg.png'
        },
        {
          name: 'Pattaya',
          country: 'Tailândia',
          image: 'https://images.unsplash.com/photo-1538114618364-ae7f63d1ee7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/125px-Flag_of_Thailand.svg.png'
        },
        {
          name: 'Taipei',
          country: 'China',
          image: 'https://images.unsplash.com/photo-1614272341544-8615b6afc191?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
          flag: 'https://www.significados.com.br/foto/china.jpg'
        },
        {
          name: 'Meca',
          country: 'Arábia Saudita',
          image: 'https://images.unsplash.com/photo-1551041777-575d3855ca71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/125px-Flag_of_Saudi_Arabia.svg.png'
        },
        {
          name: 'Guangzhou',
          country: 'China',
          image: 'https://images.unsplash.com/photo-1588267863680-ba244f1bf0d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://www.significados.com.br/foto/china.jpg'
        },
        {
          name: 'Medina',
          country: 'Arábia Saudita',
          image: 'https://images.unsplash.com/photo-1575101261474-5cb5653bb416?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/125px-Flag_of_Saudi_Arabia.svg.png'
        },
        {
          name: 'Seul',
          country: 'Coréia do Sul',
          image: 'https://images.unsplash.com/photo-1638964663550-e2123ac8900b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/125px-Flag_of_South_Korea.svg.png'
        },
        {
          name: 'Agra',
          country: 'Índia',
          image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/125px-Flag_of_India.svg.png'
        },
        {
          name: 'Osaka',
          country: 'Japão',
          image: 'https://images.unsplash.com/photo-1584505489290-96eb4e406d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/125px-Flag_of_Japan.svg.png'
        },
        {
          name: 'Shanghai',
          country: 'China',
          image: 'https://images.unsplash.com/photo-1506158669146-619067262a00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://www.significados.com.br/foto/china.jpg'
        },
        {
          name: 'Cidade de Ho Chi Minh',
          country: 'Vietnã',
          image: 'https://images.unsplash.com/photo-1592114714621-ccc6cacad26b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/125px-Flag_of_Vietnam.svg.png'
        },
        {
          name: 'Denpasar',
          country: 'Indonésia',
          image: 'https://images.unsplash.com/photo-1617869703890-4daf50c4166d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/125px-Flag_of_Indonesia.svg.png'
        },
        {
          name: 'Chennai',
          country: 'Índia',
          image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/125px-Flag_of_India.svg.png'
        },
        {
          name: 'Johor Bahru',
          country: 'Malásia',
          image: 'https://images.unsplash.com/photo-1518439179742-d8c527d2b607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/125px-Flag_of_Malaysia.svg.png'
        },
        {
          name: 'Jaipur',
          country: 'Índia',
          image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/125px-Flag_of_India.svg.png'
        },
        {
          name: 'Ha Long',
          country: 'Vietnã',
          image: 'https://images.unsplash.com/photo-1573270689103-d7a4e42b609a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/125px-Flag_of_Vietnam.svg.png'
        },
        {
          name: 'Riyadh',
          country: 'Arábia Saudita',
          image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/125px-Flag_of_Saudi_Arabia.svg.png'
        },
        {
          name: 'Ha Noi',
          country: 'Vietnã',
          image: 'https://images.unsplash.com/photo-1601108644994-1e450e786d3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/125px-Flag_of_Vietnam.svg.png'
        },
        {
          name: 'Jakarta',
          country: 'Indonésia',
          image: 'https://images.unsplash.com/photo-1578388505654-618133a6b38f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/125px-Flag_of_Indonesia.svg.png'
        },
        {
          name: 'Pequim',
          country: 'China',
          image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://www.significados.com.br/foto/china.jpg'
        },
        {
          name: 'Jerusalém',
          country: 'Israel',
          image: 'https://images.unsplash.com/photo-1549575483-14686a641c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/125px-Flag_of_Israel.svg.png'
        },
        {
          name: 'Dammam',
          country: 'Arábia Saudita',
          image: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1095&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/125px-Flag_of_Saudi_Arabia.svg.png'
        },
        {
          name: 'Ilha Penang',
          country: 'Malásia',
          image: 'https://images.unsplash.com/photo-1586446912667-0e9d25cd90f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/125px-Flag_of_Malaysia.svg.png'
        },
        {
          name: 'Quioto',
          country: 'Japão',
          image: 'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/125px-Flag_of_Japan.svg.png'
        },
        {
          name: 'Zhuhai',
          country: 'China',
          image: 'https://images.unsplash.com/photo-1550883299-cbd89e6576e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
          flag: 'https://www.significados.com.br/foto/china.jpg'
        },
        {
          name: 'Chiang Mai',
          country: 'Tailândia',
          image: 'https://images.unsplash.com/photo-1599576838688-8a6c11263108?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/125px-Flag_of_Thailand.svg.png'
        },
        {
          name: 'Calcutá',
          country: 'Índia',
          image: 'https://images.unsplash.com/photo-1636003693026-8c99559a009a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/125px-Flag_of_India.svg.png'
        },
        {
          name: 'Cebu',
          country: 'Filipinas',
          image: 'https://images.unsplash.com/photo-1545509703-506872a296cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/125px-Flag_of_the_Philippines.svg.png'
        },
        {
          name: 'Tel Aviv',
          country: 'Israel',
          image: 'https://images.unsplash.com/photo-1547483029-77784da27709?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/125px-Flag_of_Israel.svg.png'
        },
        {
          name: 'Guilin',
          country: 'China',
          image: 'https://images.unsplash.com/photo-1533606733133-57718d9edc33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://www.significados.com.br/foto/china.jpg'
        },
        {
          name: 'Chiba',
          country: 'Japão',
          image: 'https://images.unsplash.com/photo-1608814966756-0770663dbf16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/125px-Flag_of_Japan.svg.png'
        },
        {
          name: 'Da Nang',
          country: 'Vietnã',
          image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/125px-Flag_of_Vietnam.svg.png'
        },
        {
          name: 'Batam',
          country: 'Indonésia',
          image: 'https://images.unsplash.com/photo-1629643570024-e6062c016143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/125px-Flag_of_Indonesia.svg.png'
        },
        {
          name: 'Fukuoka',
          country: 'Japão',
          image: 'https://images.unsplash.com/photo-1605088298038-2876387a80c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/125px-Flag_of_Japan.svg.png'
        },
        {
          name: 'Abu Dhabi',
          country: 'Emirados Árabes Unidos',
          image: 'https://images.unsplash.com/photo-1512971064777-efe44a486ae0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/125px-Flag_of_the_United_Arab_Emirates.svg.png'
        },
        {
          name: 'Jeju',
          country: 'Coréia do Sul',
          image: 'https://images.unsplash.com/photo-1596941248238-0d49dcaa4263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/125px-Flag_of_South_Korea.svg.png'
        },
        {
          name: 'Krabi',
          country: 'Tailândia',
          image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1439&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/125px-Flag_of_Thailand.svg.png'
        },
        {
          name: 'Bangalore',
          country: 'Índia',
          image: 'https://images.unsplash.com/photo-1565018054866-968e244671af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2079&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/125px-Flag_of_India.svg.png'
        },
      ],

    },
    {
      slug: 'africa',
      name: 'África',
      banner: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
      info: {
        description: 'A África é um continente localizado na zona intertropical, com maior parte do seu território no Hemisfério Sul. Possui mais de um bilhão de habitantes e 30 milhões de km2 de extensão, sendo, por isso, considerado um dos maiores e mais populosos continentes do mundo. Possui uma grande diversidade étnica, reunindo centenas de grupos que são falantes de dezenas de idiomas distintos.',
        countriesCount: 54,
        languages: 2.138,
      },
      mostVisetedCities: [
        {
          name: 'Cairo',
          country: 'Egito',
          image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/125px-Flag_of_Egypt.svg.png',
        },
        {
          name: 'Joanesburgo',
          country: 'África do Sul',
          image: 'https://images.unsplash.com/photo-1636706519609-988babca3dd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1558&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/125px-Flag_of_South_Africa.svg.png',
        },
        {
          name: 'Marraquexe',
          country: 'Marrocos',
          image: 'https://images.unsplash.com/photo-1546936703-c36c420d4e5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/125px-Flag_of_Morocco.svg.png',
        },
        {
          name: 'Hurgada',
          country: 'Egito',
          image: 'https://images.unsplash.com/photo-1618582240632-1937f4c91d7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/125px-Flag_of_Egypt.svg.png',
        },
    ]
    },
    {
      slug: 'europa',
      name: 'Europa',
      banner: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      info: {
        description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
        countriesCount: 50,
        languages: 24,
      },
      mostVisetedCities: [
        {
          name: 'Londres',
          country: 'Reino Unido',
          image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://images.unsplash.com/photo-1494419470281-65c2b001a42b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        },
        {
          name: 'Paris',
          country: 'França',
          image: 'https://images.unsplash.com/photo-1583265266785-aab9e443ee68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931958%29.svg/125px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931958%29.svg.png',
        },
        {
          name: 'Istambul',
          country: 'Turquia',
          image: 'https://images.unsplash.com/photo-1624915585644-99e936e90cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1071&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/125px-Flag_of_Turkey.svg.png',
        },
        {
          name: 'Antália',
          country: 'Turquia',
          image: 'https://images.unsplash.com/photo-1593238738950-01f243cac6fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/125px-Flag_of_Turkey.svg.png',
        },
        {
          name: 'Roma',
          country: 'Itália',
          image: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/125px-Flag_of_Italy.svg.png',
        },
        {
          name: 'Praga',
          country: 'República Tcheca',
          image: 'https://images.unsplash.com/photo-1458150945447-7fb764c11a92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/125px-Flag_of_the_Czech_Republic.svg.png',
        },
        {
          name: 'Amsterdã',
          country: 'Holanda',
          image: 'https://images.unsplash.com/photo-1523889310790-cb91a98b017b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/125px-Flag_of_the_Netherlands.svg.png',
        },
        {
          name: 'Barcelona',
          country: 'Espanha',
          image: 'https://images.unsplash.com/photo-1587789202069-f57c846b85db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/125px-Flag_of_Spain.svg.png',
        },
        {
          name: 'Milan',
          country: 'Itália',
          image: 'https://images.unsplash.com/photo-1572602648934-1d98de6dab48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/125px-Flag_of_Italy.svg.png',
        },
        {
          name: 'Viena',
          country: 'Áustria',
          image: 'https://images.unsplash.com/photo-1585947160312-9539b6da2ce2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/125px-Flag_of_Austria.svg.png',
        },
        {
          name: 'Berlim',
          country: 'Alemanha',
          image: 'https://images.unsplash.com/photo-1587330979470-3595ac045ab0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/125px-Flag_of_Germany.svg.png',
        },
        {
          name: 'Atenas',
          country: 'Grécia',
          image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/125px-Flag_of_Greece.svg.png',
        },
        {
          name: 'Moscovo',
          country: 'Rússia',
          image: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/125px-Flag_of_Russia.svg.png'
        },
        {
          name: 'Veneza',
          country: 'Itália',
          image: 'https://images.unsplash.com/photo-1588340281687-148923de8900?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/125px-Flag_of_Italy.svg.png',
        },
        {
          name: 'Madri',
          country: 'Espanha',
          image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/125px-Flag_of_Spain.svg.png',
        },
        {
          name: 'Dublin',
          country: 'Irlanda',
          image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/125px-Flag_of_Ireland.svg.png',
        },
        {
          name: 'Florença',
          country: 'Itália',
          image: 'https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/125px-Flag_of_Italy.svg.png',
        },
        {
          name: 'Munique',
          country: 'Alemanha',
          image: 'https://images.unsplash.com/photo-1599982890963-3aabd60064d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/125px-Flag_of_Germany.svg.png',
        },
        {
          name: 'São Petersburgo',
          country: 'Rússia',
          image: 'https://images.unsplash.com/photo-1610197361600-33a3a5073cad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/125px-Flag_of_Russia.svg.png'
        },
        {
          name: 'Bruxelas',
          country: 'Bélgica',
          image: 'https://images.unsplash.com/photo-1626013969117-8c13864fdb2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/125px-Flag_of_Belgium.svg.png'
        },
        {
          name: 'Budapeste',
          country: 'Hungria',
          image: 'https://images.unsplash.com/photo-1507622560124-621e26755fb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/125px-Flag_of_Hungary.svg.png'
        },
        {
          name: 'Lisboa',
          country: 'Portugal',
          image: 'https://images.unsplash.com/photo-1546375982-c22276aa12f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1487&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/125px-Flag_of_Portugal.svg.png'
        },
        {
          name: 'Heraklion',
          country: 'Grécia',
          image: 'https://images.unsplash.com/photo-1586119732042-ff23ccf4bd23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/125px-Flag_of_Greece.svg.png',
        },
        {
          name: 'Copenhagen',
          country: 'Dinamarca',
          image: 'https://images.unsplash.com/photo-1611515905024-d6530366c87c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/125px-Flag_of_Denmark.svg.png',
        },
        {
          name: 'Cracóvia',
          country: 'Polônia',
          image: 'https://images.unsplash.com/photo-1562766077-4cd48771b57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/125px-Flag_of_Poland.svg.png',
        },
        {
          name: 'Varsóvia',
          country: 'Polônia',
          image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/125px-Flag_of_Poland.svg.png',
        },
        {
          name: 'Mugla',
          country: 'Turquia',
          image: 'https://images.unsplash.com/photo-1599003195878-7355802a059f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/125px-Flag_of_Turkey.svg.png',
        },
        {
          name: 'Frankfurt',
          country: 'Alemanha',
          image: 'https://images.unsplash.com/photo-1605186620429-1ece911f171c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/125px-Flag_of_Germany.svg.png',
        },
        {
          name: 'Estocolmo',
          country: 'Suécia',
          image: 'https://images.unsplash.com/photo-1588653818221-2651ec1a6423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/125px-Flag_of_Sweden.svg.png',
        },
        {
          name: 'Nice',
          country: 'França',
          image: 'https://images.unsplash.com/photo-1491166617655-0723a0999cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931958%29.svg/125px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931958%29.svg.png',
        },
        {
          name: 'Porto',
          country: 'Portugal',
          image: 'https://images.unsplash.com/photo-1584064149621-aa938221737e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/125px-Flag_of_Portugal.svg.png'
        },
        {
          name: 'Rhodes',
          country: 'Grécia',
          image: 'https://images.unsplash.com/photo-1447248016153-6034f0ece13a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/125px-Flag_of_Greece.svg.png',
        },
      ]
    },
    {
      slug: 'oceania',
      name: 'Oceania',
      banner: 'https://images.unsplash.com/photo-1549189729-d77b51b6c351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
      info: {
        description: 'A Oceania é um continente localizado a sudeste da Ásia, compreendendo um conjunto de ilhas somado à Austrália, essa última considerada como uma massa continental chamada de “Australásia”. Possui uma área total de 8.480.355 km², onde habitam aproximadamente 38 milhões de pessoas. Por ter sido o último continente a ser colonizado pelos europeus, a Oceania é alcunhada de “novíssimo continente”, em distinção a Europa (o velho mundo) e à América (o novo mundo), segundo a regionalização eurocêntrica da Terra.',
        countriesCount: 14,
        languages: 18,
      },
      mostVisetedCities: [
        {
          name: 'Sydney',
          country: 'Austrália',
          image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/125px-Flag_of_Australia_%28converted%29.svg.png',
        },
        {
          name: 'Melbourne',
          country: 'Austrália',
          image: 'https://images.unsplash.com/photo-1567165416885-6901968a167b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/125px-Flag_of_Australia_%28converted%29.svg.png',
        },
        {
          name: 'Auckland',
          country: 'Nova Zelândia',
          image: 'https://images.unsplash.com/photo-1600208669687-f19af3638cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/125px-Flag_of_New_Zealand.svg.png',
        },
      ]
    },
  ]

  return response.json(continents)
}