export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  categories: ProductCategory[];
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  images: string[];
  specifications: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  product?: string;
}
export interface DemoForm {
  name: string;
  mobile: string;
  email: string;
  city: string;
  propertyType: string;
  stage: string;
  budget: string;
}
