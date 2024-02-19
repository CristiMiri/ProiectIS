import { Product, ProductCategory } from "./product";
import { Admin } from "./admin";
import { User } from "./user";
import { Discount } from "./discount";
export const productCategories: ProductCategory[] = [
  { id: 1, name: "Electronics", description: "Gadgets and devices." },
  { id: 2, name: "Books", description: "Readables from various genres." },
  {
    id: 3,
    name: "Home & Garden",
    description: "Goods for home improvement and gardening.",
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    description: "High-performance laptop.",
    price: 999.99,
    quantity: 10,
    image:
      "https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: productCategories[0],
  },
  {
    id: 2,
    name: "Science Fiction Book",
    description: "A book from the science fiction genre.",
    price: 14.99,
    quantity: 50,
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    category: productCategories[1],
  },
  {
    id: 3,
    name: "Gardening Tools",
    description: "Set of gardening tools.",
    price: 29.99,
    quantity: 15,
    image: "https://example.com/gardeningtools.jpg",
    category: productCategories[2],
  },
  {
    id: 4,
    name: "Smartphone",
    description: "Latest model smartphone.",
    price: 699.99,
    quantity: 30,
    image: "https://example.com/smartphone.jpg",
    category: productCategories[0],
  },
  {
    id: 5,
    name: "Cookbook",
    description: "Recipes from around the world.",
    price: 24.99,
    quantity: 25,
    image:
      "https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    category: productCategories[1],
  },
];

export const admins: Admin[] = [
  {
    id: 1,
    username: "adminUser1",
    password: "password1",
    email: "admin1@example.com",
    adminCode: "ADM1001",
    role: "superadmin",
  },
  {
    id: 2,
    username: "adminUser2",
    password: "password2",
    email: "admin2@example.com",
    adminCode: "ADM1002",
    role: "admin",
  },
  {
    id: 3,
    username: "adminUser3",
    password: "password3",
    email: "admin3@example.com",
    adminCode: "ADM1003",
    role: "admin",
  },
  {
    id: 4,
    username: "adminUser4",
    password: "password4",
    email: "admin4@example.com",
    adminCode: "ADM1004",
    role: "editor",
  },
  {
    id: 5,
    username: "adminUser5",
    password: "password5",
    email: "admin5@example.com",
    adminCode: "ADM1005",
    role: "viewer",
  },
];

export const users: User[] = [
  {
    id: 1,
    username: "userOne",
    password: "SecurePassword1",
    email: "userone@example.com",
    firstName: "User",
    lastName: "One",
  },
  {
    id: 2,
    username: "userTwo",
    password: "SecurePassword2",
    email: "usertwo@example.com",
    firstName: "User",
    lastName: "Two",
  },
  {
    id: 3,
    username: "userThree",
    password: "SecurePassword3",
    email: "userthree@example.com",
    firstName: "User",
    lastName: "Three",
  },
  {
    id: 4,
    username: "userFour",
    password: "SecurePassword4",
    email: "userfour@example.com",
    firstName: "User",
    lastName: "Four",
  },
  {
    id: 5,
    username: "userFive",
    password: "SecurePassword5",
    email: "userfive@example.com",
    firstName: "User",
    lastName: "Five",
  },
];

export const discounts: Discount[] = [
  {
    id: 1,
    code: "DISCOUNT20",
    percentage: 20,
    expiryDate: "2023-12-31",
    status: true,
  },
  {
    id: 2,
    code: "SUMMER15",
    percentage: 15,
    expiryDate: "2023-08-31",
    status: true,
  },
  {
    id: 3,
    code: "WELCOME10",
    percentage: 10,
    expiryDate: "2024-01-01",
    status: true,
  },
  {
    id: 4,
    code: "BLACKFRIDAY30",
    percentage: 30,
    expiryDate: "2023-11-25",
    status: false, // Assuming the discount is no longer active
  },
  {
    id: 5,
    code: "CYBERMONDAY25",
    percentage: 25,
    expiryDate: "2023-11-28",
    status: true,
  },
];

export const cartItemsDummy: Product[] = [
  products[0],
  products[1],
  products[0],
];
