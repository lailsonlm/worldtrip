/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const {index} = request.query

  const continents = [
    {
      slug: 'america-do-norte',
      name: 'América do Norte',
      info: {
        description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
        countriesCount: 50,
        languages: 60,
        citiesCount: 27
      },
      mostVisetedCities: [{
        name: 'Londres',
        country: 'Reino Unido',
        image: 'https://images.unsplash.com/photo-1494419470281-65c2b001a42b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
      }]
    },
    {
      slug: 'america-do-sul',
      name: 'América do Sul',
      info: {
        description: 'teste America do sul',
        countriesCount: 10,
        languages: 6,
        citiesCount: 7
      },
      mostVisetedCities: [{
        name: 'Recife',
        country: 'Brasil',
        image: 'https://unsplash.com/photos/ufnZ3kJwgSo'
      }]
    },
    {
      slug: 'asia',
      name: 'Ásia',
      info: {
        description: 'teste asia',
        countriesCount: 10,
        languages: 6,
        citiesCount: 7
      },
      mostVisetedCities: [{
        name: 'Recife',
        country: 'Brasil',
        image: 'https://unsplash.com/photos/ufnZ3kJwgSo'
      }]
    },
  ]

  return response.json(continents)
}