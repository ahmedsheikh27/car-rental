import request, { gql } from 'graphql-request'
import React from 'react'

export const getCarsList = async () => {
  const query = gql`
  query Carslists {
  carLists {
    carAvg
    createdAt
    id
    name
    price
    publishedAt
    seats
    updatedAt
    carType
    carImage {
      url
    }
  }
}
  `

  const result = await request('https://ap-south-1.cdn.hygraph.com/content/cm17ip1br02l107wb2vosuc8z/master', query)

  return result;
}
