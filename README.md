This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation

### .env file

Before start on the main directory add an **.env.local** file. Inside add the URL of the service. In this case i used an external api:

```bash
NEXT_PUBLIC_API_URL=https://fakestoreapi.com
```
## List of commands

```bash
#install dependencies
npm install

#run project
npm run dev

#build project
npm run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Directory tree design

```bash
├───public
│   └───images
└───src
    ├───app
    │   ├───cart
    │   ├───checkout
    │   └───products
    │       └───[id]
    ├───components
    │   ├───elements
    │   │   ├───buttons
    │   │   │   ├───cartButton
    │   │   │   └───customButton
    │   │   ├───cards
    │   │   │   ├───cartProductCard
    │   │   │   └───productCard
    │   │   ├───footer
    │   │   ├───forms
    │   │   │   └───input
    │   │   │       ├───InputText
    │   │   │       └───inputWrapper
    │   │   ├───inputs
    │   │   │   └───searchInput
    │   │   ├───navbar
    │   │   └───tags
    │   │       └───categoryTag
    │   ├───layouts
    │   │   ├───cart
    │   │   ├───checkout
    │   │   ├───detail
    │   │   ├───home
    │   │   ├───loading
    │   │   └───products
    │   └───wrappers
    │       └───appWrapper
    ├───models
    ├───redux
    │   └───slices
    ├───service
    │   └───products
    ├───styles
    └───utils
```

## About .env

I used a mock api [fake store api](https://fakestoreapi.com)  to fill the data of the store.

## Other frameworks

- CSS using Tailwind preinstalled with NextJS by default

## Vercel

You can access to the build project hosted in vercel accessing this link [Live app](https://prueba-ecommerce-web.vercel.app/)
