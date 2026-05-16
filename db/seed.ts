import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { products } from '../lib/schema';
import { count } from 'drizzle-orm';

const SEED_PRODUCTS = [
  {
    imageUrl:
      'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/smartphone-gaPvyZW6aww0IhD3dOpaU6gBGILtcJ.webp',
    name: 'Smartphone X Pro',
    status: 'active' as const,
    price: '999.00',
    stock: 150,
    availableAt: new Date()
  },
  {
    imageUrl:
      'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/earbuds-3rew4JGdIK81KNlR8Edr8NBBhFTOtX.webp',
    name: 'Wireless Earbuds Ultra',
    status: 'active' as const,
    price: '199.00',
    stock: 300,
    availableAt: new Date()
  },
  {
    imageUrl:
      'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/home-iTeNnmKSMnrykOS9IYyJvnLFgap7Vw.webp',
    name: 'Smart Home Hub',
    status: 'active' as const,
    price: '149.00',
    stock: 200,
    availableAt: new Date()
  },
  {
    imageUrl:
      'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/tv-H4l26crxtm9EQHLWc0ddrsXZ0V0Ofw.webp',
    name: '4K Ultra HD Smart TV',
    status: 'active' as const,
    price: '799.00',
    stock: 50,
    availableAt: new Date()
  },
  {
    imageUrl:
      'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/laptop-9bgUhjY491hkxiMDeSgqb9R5I3lHNL.webp',
    name: 'Gaming Laptop Pro',
    status: 'active' as const,
    price: '1299.00',
    stock: 75,
    availableAt: new Date()
  },
  {
    imageUrl:
      'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/headset-lYnRnpjDbZkB78lS7nnqEJFYFAUDg6.webp',
    name: 'VR Headset Plus',
    status: 'active' as const,
    price: '349.00',
    stock: 120,
    availableAt: new Date()
  },
  {
    imageUrl:
      'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/watch-S2VeARK6sEM9QFg4yNQNjHFaHc3sXv.webp',
    name: 'Smartwatch Elite',
    status: 'active' as const,
    price: '249.00',
    stock: 250,
    availableAt: new Date()
  },
  {
    imageUrl:
      'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/speaker-4Zk0Ctx5AvxnwNNTFWVK4Gtpru4YEf.webp',
    name: 'Bluetooth Speaker Max',
    status: 'active' as const,
    price: '99.00',
    stock: 400,
    availableAt: new Date()
  },
  {
    imageUrl:
      'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/charger-GzRr0NSkCj0ZYWkTMvxXGZQu47w9r5.webp',
    name: 'Portable Charger Super',
    status: 'active' as const,
    price: '59.00',
    stock: 500,
    availableAt: new Date()
  },
  {
    imageUrl:
      'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/thermostat-8GnK2LDE3lZAjUVtiBk61RrSuqSTF7.webp',
    name: 'Smart Thermostat Pro',
    status: 'active' as const,
    price: '199.00',
    stock: 175,
    availableAt: new Date()
  }
];

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set');
  }

  const db = drizzle(neon(process.env.DATABASE_URL));

  const [{ value }] = await db.select({ value: count() }).from(products);
  if (value > 0) {
    console.log(
      `Skipping seed: products table already has ${value} rows.`
    );
    return;
  }

  console.log('Seeding products...');
  await db.insert(products).values(SEED_PRODUCTS);
  console.log(`Seeded ${SEED_PRODUCTS.length} products.`);
}

main().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
