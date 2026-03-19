import fs from 'fs';
import path from 'path';

const outDir = '/Users/chenhaotian/Downloads/sailor piece/public/images/scraped';
fs.mkdirSync(outDir, { recursive: true });

const items = {
  fruits: ['dragon', 'fiend', 'kitsune', 'light'],
  swords: ['escanor', 'shadow-monarch', 'true-aizen', 'yamato'],
  races: ['galevorn', 'servant', 'sunborn', 'swordblessed']
};

async function download(url, filename) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.log(`Skip 404: ${url}`);
      return;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(path.join(outDir, filename), buf);
    console.log(`Success: ${filename}`);
  } catch (err) {
    console.error(`Error ${filename}:`, err.message);
  }
}

async function run() {
  const tasks = [];
  for (const [category, names] of Object.entries(items)) {
    for (const name of names) {
      tasks.push(download(`https://sailorpiece.org/images/${category}/${name}.webp`, `${category}_${name}.webp`));
    }
  }
  await Promise.all(tasks);
  console.log('Done downloading full competitor image suite.');
}

run();
