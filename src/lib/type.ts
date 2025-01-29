// type Dimensions = {
//     width: number;
//     height: number;
//     depth: number;
//   };
  
//   type Meta = {
//     createdAt: string;
//     updatedAt: string;
//     barcode: string;
//     qrCode: string;
//   };
  
//   type Review = {
//     reviewerName: string;
//     rating: number;
//     comment: string;
//     reviewerEmail: string;
//   };
  
 type Rating ={
  rate: number;
  count:number;
 };
  export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    images: string[];
    rating: Rating[];
    // availabilityStatus: string;
    // brand: string;
    
    
    // dimensions: Dimensions;
    // discountPercentage: number;
    
    
    // meta: Meta;
    // minimumOrderQuantity: number;
   
    
    // returnPolicy: string;
    // reviews: Review[];
    // shippingInformation: string;
    // sku: string;
    // stock: number;
    // tags: string[];
    // thumbnail: string;
    
    // warrantyInformation: string;
    // weight?: number;
    // quantity?: number | undefined;
  };
  
  // export interface Session {
  //   user: {
  //     expires: any;
  //     user: {
  //       email: string;
  //       image: string;
  //       name: string;
  //     };
  //   };
  // }