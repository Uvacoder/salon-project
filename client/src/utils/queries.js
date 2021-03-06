import { gql } from 'graphql-tag';

export const QUERY_AVAILABLE_APPT = gql`
query appts($avail: Boolean!) {
  appts(avail: $avail){
    _id
    title
    start
  }
}
`;
export const QUERY_BOOKED_APPT = gql`
  query appts {
    Appt{
      _id
      title
      start
      client
      service
      contact
      available
    }
  }
`;
export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      title
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      title
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      style
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
