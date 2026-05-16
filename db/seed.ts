import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { products } from '../lib/schema';
import { count } from 'drizzle-orm';

const SEED_PRODUCTS = [
  {
    name: 'Sample Product',
    status: 'active' as const,
    price: '49.00',
    stock: 100,
    availableAt: new Date()
  },
  {
    name: 'Another Product',
    status: 'active' as const,
    price: '99.00',
    stock: 50,
    availableAt: new Date()
  }
];

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set');
  }

  const db = drizzle(postgres(process.env.DATABASE_URL));

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
