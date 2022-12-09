#!/usr/bin/env ts-node

import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import favoritesJson from './favorites.json';

dotenv.config({ path: '.env.local' });

const favorites = favoritesJson.favorites;
const prisma = new PrismaClient();

async function main() {
  try {
    const shows = await Promise.all(
      favorites.map(async (showId) => {
        return await saveShow(await getShow(showId));
      })
    );
    console.log(JSON.stringify(shows, null, 2));
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//---

async function fetcher(url: string) {
  const fetchOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.MF_TVDB_ACCESS_TOKEN}`,
    }
  };

  try {
    const response = await fetch(`${process.env.MF_TVDB_API_BASE_URL}${url}`, fetchOptions);
    if (response.ok) {
      return (await response.json()).data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

//---

async function getShow(showId: number) {
  const {
    id: tvdbId, name, overview, image,
    firstAired, lastAired, averageRuntime, year, status
  } = await fetcher(`/series/${showId}/extended`);

  return {
    name, overview, image,
    firstAired, lastAired, averageRuntime, year,
    status: status.name,
    tvdbId: tvdbId
  };
}

async function saveShow(show) {
  return await prisma.show.create({
    data: { ...show }
  });
}

//---

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

export { };
