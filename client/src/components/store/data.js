
const products = [
    {
      name: 'Hairdressers Invisible Oil Shampoo',
      description: 'A featherlight moisturizing shampoo for dry hair.',
      image: './images/bbhs.png',
      category: 'BB Hairdressers Invisible Oil',
      price: '$29.00',
      quantity: '25',
      size: '8.5 fl oz',
      rating: '4.5/5'
    },
    {
      name: 'Hairdressers Invisible Oil Conditioner',
      description:'A divine dose of hair moisture.',
      image: './images/bbhc.png',
      category: 'BB Hairdressers Invisible Oil',
      price: '$34.00',
      quantity: '25',
      size: '6.7 fl oz',
      rating: '4.5/5'
    },
    {
      name: 'Hairdressers Invisible Oil Mask',
      description:'Treat hair to 72 hours of lasting moisture.',
      image: './images/bbhm.png',
      category: 'BB Hairdressers Invisible Oil',
      price: '$43.00',
      quantity: '21',
      size: '6.7 fl oz',
      rating: '4.5/5'
    },
    {
      name: 'Hairdressers Invisible Oil',
      description: 'Light as air, for healthy hair.',
      image: './images/bbho.png',
      category: 'BB Hairdressers Invisible Oil',
      price: '$42.00',
      quantity: '10',
      size: '3.4 fl oz',
      rating: '4.7/5'
    },
    {
      name: 'Hairdressers Invisible Oil Heat/UV Protective Primer',
      description: 'The best hair heat protection under the sun.',
      image: './images/bbhp.png',
      category: 'BB Hairdressers Invisible Oil',
      price: '$29.00',
      quantity: '21',
      size: '8.5 fl oz',
      rating: '4.6/5'
    },
    {
      name: 'Hairdressers Invisible Oil Soft Texture Finishing Spray',
      description: 'Tousled texture. Feather-soft feel.',
      image: './images/bbhf.png',
      category: 'BB Hairdressers Invisible Oil',
      price: '$32.00',
      quantity: '11',
      size: '3.7 fl oz',
      rating: '4.7/5'
    },
    {
      name: 'Thickening Volume Shampoo',
      description: 'The best volumizing shampoo for instant body building.',
      image: './images/bbts.png',
      category: 'BB Thickening',
      price: '$31.00',
      quantity: '21',
      size: '8.5 fl oz',
      rating: '4.2/5'
    },
    {
      name: 'Thickening Volume Conditioner',
      description: 'Body building made easy.',
      image: './images/bbtc.png',
      category: 'BB Thickening',
      price: '$34.00',
      quantity: '26',
      size: '8.5 fl oz',
      rating: '3.2/5'
    },
    {
      name: 'Thickening Go Big Treatment',
      description: 'The first step to sky-high styles.',
      image: './images/bbts.png',
      category: 'BB Thickening',
      price: '$30.00',
      quantity: '8',
      size: '8.5 fl oz',
      rating: '4.6/5'
    },
    {
      name: 'Thickening Spray',
      description: 'Lush, thick hair starts here.',
      image: './images/bbtt.png',
      category: 'BB Thickening',
      price: '$30.00',
      quantity: '6',
      size: '8.5 fl oz',
      rating: '4.7/5'
    },
    {
      name: 'Thickening Great Body Blowout Dry Creme',
      description: 'Your blow dry just got bigger.',
      image: './images/bbtb.png',
      category: 'BB Thickening',
      price: '$32.00',
      quantity: '7',
      size: '5 fl oz',
      rating: '3.9/5'
    },
    {
      name: 'Thickening Dryspun Texture Spray',
      description: 'A texturizing hair spray that adds airy volume.',
      image: './images/bbtd.png',
      category: 'BB Thickening',
      price: '$31.00',
      quantity: '9',
      size: '3.6 fl oz',
      rating: '4.3/5'
    },
    {
      name: 'Curl Moisturizing Shampoo',
      description: 'A gentle cleanser for seriously hydrated curls.',
      image: './images/bbcs.png',
      category: 'BB Curl',
      price: '$31.00',
      quantity: '21',
      size: '8.5 fl oz',
      rating: '4.8/5'
    },
    {
      name: 'Curl 3-in-1 Conditioner',
      description: 'Rinse-out, leave-in, or co-wash.',
      image: './images/bbcc.png',
      category: 'BB Curl',
      price: '$34.00',
      quantity: '11',
      size: '6.7 fl oz',
      rating: '4.7/5'
    },
    {
      name: 'Curl Light Defining Cream',
      description: 'For moisturized, flexible curls with movement.',
      image: './images/bbcl.png',
      category: 'BB Curl',
      price: '$32.00',
      quantity: '15',
      size: '8.5 fl oz',
      rating: '4.9/5'
    },
    {
      name: 'Curl Anti-Humidity Gel-Oil',
      description: 'Elongated, nourished curls are no longer a stretch.',
      image: './images/bbcg.png',
      category: 'BB Curl',
      price: '$32.00',
      quantity: '14',
      size: '5 fl oz',
      rating: '4.3/5'
    },
    {
      name: 'Curl Butter Mask',
      description: 'A deeply moisturizing treatment for the thirstiest curls.',
      image: './images/bbcm.png',
      category: 'BB Curl',
      price: '$43.00',
      quantity: '8',
      size: '6.7 fl oz',
      rating: '5/5'
    },
    {
      name: 'Curl Mousse',
      description: 'For long-lasting curl definition and bounce.',
      image: './images/bbcmo.png',
      category: 'BB Curl',
      price: '$32.00',
      quantity: '10',
      size: '5 fl oz',
      rating: '3.9/5'
    },
    {
      name: 'Surf Foam Wash Shampoo',
      description: 'Après-beach texture – without the beach.',
      image: './images/bbss.png',
      category: 'BB Surf',
      price: '$27.00',
      quantity: '10',
      size: '8.5 fl oz',
      rating: '4.3/5'
    },
    {
      name: 'Surf Creme Rinse Conditioner',
      description: 'Après beach texture (and moisture) – without the beach.',
      image: './images/bbsc.png',
      category: 'BB Surf',
      price: '$29.00',
      quantity: '13',
      size: '8.5 fl oz',
      rating: '4.4/5'
    },
    {
      name: 'Surf Spray',
      description: 'The original sea salt spray.',
      image: './images/bbssp.png',
      category: 'BB Surf',
      price: '$29.00',
      quantity: '22',
      size: '4.2 fl oz',
      rating: '4.4/5'
    },
    {
      name: 'Surf Infusion',
      description: 'The beach, bottled.',
      image: './images/bbsi.png',
      category: 'BB Surf',
      price: '$29.00',
      quantity: '14',
      size: '3.4 fl oz',
      rating: '4.3/5'
    },
    {
      name: 'Surf Styling Leave In',
      description: 'Make waves wherever you go.',
      image: './images/bbsl.png',
      category: 'BB Surf',
      price: '$30.00',
      quantity: '10',
      size: '5 fl oz',
      rating: '4.2/5'
    },
    {
      name: 'Surf Foam Spray Blow Dry',
      description: 'Beachy hair can be glamorous, too.',
      image: './images/bbs.png',
      category: 'BB Surf',
      price: '$31.00',
      quantity: '21',
      size: '4 fl oz',
      rating: '4.4/5'
    }
  ];



export default products;