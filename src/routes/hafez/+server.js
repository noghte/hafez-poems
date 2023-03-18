import { json, error } from "@sveltejs/kit";

import Database from "better-sqlite3";
import fs from "node:fs";

let db = new Database(fs.readFileSync("./files/hafez.db"));

export function GET({url}) {
  // Getting poem_id as integer from query string
  let poem_id = url.searchParams.get('pid');
  console.log("PP", poem_id)
  if (isNaN(poem_id)) {
    throw error(401, "poem_id is mandatory and must be an integer");
  }
  poem_id = parseInt(poem_id);


  // if (!query) {
  //   throw error(401, "Query (`?q=`) is required");
  // }
  let query = `SELECT poem_id,vorder,position,text FROM verse WHERE poem_id = (SELECT id FROM poem LIMIT 1 OFFSET ${poem_id});`;
  // const result = db.prepare(query).run({poem_id: poem_id}).all();
  const result = db.prepare(query).all();
  // const result = json(stmt).all();
  console.log("RES:",result);
  return json(result);


}