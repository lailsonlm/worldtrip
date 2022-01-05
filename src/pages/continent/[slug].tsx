import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

import { Flex } from "@chakra-ui/react";

import { BannerContinent } from "../../components/BannerContinent";
import { ContinentCities } from "../../components/ContinentCities";
import { ContinentInfo } from "../../components/ContinentInfo";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

interface ContinentProps {
  name: string;
  info: {
    description: string;
    countriesCount: number;
    languages: number;
    citiesCount: number;
  },
  mostVisetedCities: {
    name: string;
    country: string;
    image: string;
  }[]
}

interface DataResult {
  slug: string;
}

export default function Continent({ name, info, mostVisetedCities }: ContinentProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>Worldtrip | {name}</title>
      </Head>
      
      <Flex 
        w="1440px" 
        h="100%" 
        m="0px auto 100px"
        flexDir="column"
      >
        <Header />

        <BannerContinent image='/banner_europa.png' continent={name} />

        <ContinentInfo infoDescription={info.description} countriesCount={info.countriesCount} languages={info.languages} citiesCount={info.citiesCount} />

        <ContinentCities name={mostVisetedCities[0].name} country={mostVisetedCities[0].country} image={mostVisetedCities[0].image} />

      </Flex>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: 'america-do-norte' } }
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await api.get(`continents/${params?.slug}`)
  const data = await res.data

  const dataResult = data.find((res: DataResult) => {
    return res.slug === params?.slug
  })

 
  if (!dataResult) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      name: dataResult.name,
      info: {
        description: dataResult.info.description,
        countriesCount: dataResult.info.countriesCount,
        languages: dataResult.info.languages,
        citiesCount: dataResult.info.citiesCount,
      },
      mostVisetedCities: dataResult.mostVisetedCities
    }
  }
}