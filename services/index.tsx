import request, { gql } from 'graphql-request'

const uri : any = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT_PUBLISHABLE_KEY

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
    carImage {
      url
    }
    carType
    carBrand
  }
}
  `

  const result = await request(uri, query)

  return result;
}
export const getLoaction = async () => {
  const query = gql`
  query Location {
  userLocations {
    address
  }
}
 `

  const result = await request(uri, query)

  return result;
}

export const createBooking = async (formValue: any) => {
  const query = gql`
    mutation MyMutation(
      $userName: String!,
      $pickupdate: String!,
      $dropoffdate: String!,
      $pickuptime: String!,
      $dropofftime: String!,
      $email: String!,
      $contactNumber: String!,
      $carId: ID!,
    ) {
      createBooking(
        data: {
          userName: $userName,
          pickupdate: $pickupdate,
          dropoffdate: $dropoffdate,
          pickuptime: $pickuptime,
          dropofftime: $dropofftime,
          email: $email,
          contactNumber: $contactNumber,
          carId: { connect: { id: $carId } }
        }
      ) {
        id
      }
    }
  `;

  const variables = {
    userName: formValue.userName,
    pickupdate: formValue.pickupdate,
    dropoffdate: formValue.dropoffdate,
    pickuptime: formValue.pickuptime,
    dropofftime: formValue.dropofftime,
    email: formValue.email,
    contactNumber: formValue.contactNumber,
    carId: formValue.carId.connect.id, 
  };

  try {
    const result = await request(
      uri,
      query,
      variables
    );
    return result;
  } catch (error) {
    console.error('GraphQL Error:', error);
    throw error;
  }
};
