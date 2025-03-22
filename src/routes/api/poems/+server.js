import { json, error } from "@sveltejs/kit";
import Database from "better-sqlite3";
import fs from "node:fs";

export function GET(req) {

  const url = new URL(req.url);
  let poem_id = url.searchParams.get('pid');   // Getting poem_id as integer from query string
  if (isNaN(poem_id)) {
    throw error(401, "poem_id is mandatory and must be an integer");
  }
  poem_id = parseInt(poem_id);

  let poet = url.searchParams.get('poet');  
  // if (isNaN(poet)) {
  //   throw error(401, "poet is mandatory");
  // }
  if (!fs.existsSync(`./dbs/${poet}/${poet}.db`)) {
    throw error(401, `A database for ${poet} does not exist`);
  }

  const db = new Database(fs.readFileSync(`./dbs/${poet}/${poet}.db`), { readonly: true });

  // if (!query) {
  //   throw error(401, "Query (`?q=`) is required");
  // }
  // let query = `SELECT poem_id,vorder,position,text FROM verse WHERE poem_id = (SELECT id FROM poem LIMIT 1 OFFSET ${poem_id});`;
  let query;
  
  if (poem_id === -1) { // random poem
    query = `SELECT poem_id, vorder, position, text 
    FROM verse 
    WHERE poem_id = (
        SELECT poem_id 
        FROM verse 
        ORDER BY RANDOM() 
        LIMIT 1
    );`;
  }
  else {
    query = `SELECT poem_id, vorder, position, text from verse where poem_id = ${poem_id};`;
  }
  // const result = hafezDb.prepare(query).run({poem_id: poem_id}).all();
  let poemVerses = db.prepare(query).all();
  // const result = json(stmt).all();

  const result = {
    poem: poemVerses,
    poet: poet,
    poem_id: poemVerses[0].poem_id,
    request_time: new Date().toISOString(),
  };
  console.log(result.poem_id, result.request_time);
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' //req.headers && req.headers['origin'] ? req.headers['origin'] : ''
  };
  return json(result);
  // return {
  //   status: 200,
  //   headers,
  //   body: json(result)
  // };

}