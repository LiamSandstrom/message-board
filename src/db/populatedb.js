#! /usr/bin/env node

import { argv } from "node:process";
import { Client } from "pg"

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR ( 255 ),
    name VARCHAR ( 255 ),
    added TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO messages (message, name) 
VALUES
  ('Woof woof!', 'Eddie'),
  ('Hey! How are you?', 'Bob'),
  ('Good morning!', 'Larry');
`;

const db = argv[2];

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: db,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();

