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
  slug: string;
  name: string;
  banner: string;
  info: {
    description: string;
    countriesCount: number;
    languages: number;
  },
  mostVisetedCities: {
    name: string;
    country: string;
    image: string;
    flag: string;
  }[]
}

interface DataResult extends ContinentProps {
  
}

export default function Continent({ name, banner, info, mostVisetedCities }: ContinentProps) {
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
        w="100%"
        maxW= "1440px" 
        h="100%" 
        m="0px auto 100px"
        flexDir="column"
      >
        <Header />

        <BannerContinent image={banner} continent={name} />

        <ContinentInfo 
          infoDescription={info.description} 
          countriesCount={info.countriesCount} 
          languages={info.languages} 
          mostVisetedCities={mostVisetedCities}
        />

        <ContinentCities mostVisetedCities={mostVisetedCities} />

      </Flex>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await api.get('allContinents')
  const continent = await res.data


  const paths = continent.map((res) => ({
    params: { slug: res.slug },
  }))


  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params
  const res = await api.get(`continents/${slug}`)
  const data = await res.data

  const dataResult = data.find((res: DataResult) => {
    return res.slug === slug
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
      slug,
      name: dataResult.name,
      banner: dataResult.banner,
      info: {
        description: dataResult.info.description,
        countriesCount: dataResult.info.countriesCount,
        languages: dataResult.info.languages,
      },
      mostVisetedCities: dataResult.mostVisetedCities
    },
    revalidate: 60 * 60
  }
}