import { styled } from "@/styles"
import { HomeContainer, Product } from "@/styles/pages/home"

import {useKeenSlider} from 'keen-slider/react'

import Image from "next/image"

import shirt1 from '../assets/camisetas/1.png'
import shirt2 from '../assets/camisetas/2.png'
import shirt3 from '../assets/camisetas/3.png'

import 'keen-slider/keen-slider.min.css'
import { GetServerSideProps } from "next"
import { stripe } from "@/lib/stripe"

export default function Home() {
  
  const [sliderRef] = useKeenSlider({
    slides:{
      perView:3,
      spacing:48
    }
  })

  
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {/* <pre> {JSON.stringify(props.list)} <pre/> */}
      <Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt="1" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt2} width={520} height={480} alt="1" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt3} width={520} height={480} alt="1" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt3} width={520} height={480} alt="1" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      
    </HomeContainer>
  )
}

export const getServerSideProps:GetServerSideProps = async() => {
  const response = await stripe.products.list()

  console.log(response.data)

  return{
    props:{
      list:[1,2,3]
    }
  }
}
