const docs = require("./docs.json");

const keys = Object.keys(docs).sort();

//Create docs.ts
{
  const result = [];
  result.push(`
export const methods ={
`);

  for (let key of keys) {
    if (!key) {
      continue;
    }
    const doc = docs[key];

    result.push(`\r\n\r\n\r\n\r\n\r\n\r\n/** ${doc}**/`);
    result.push(`\n${key}:'${key}',`);
  }

  result.push("\n}");

  require("fs").writeFileSync("./docs.ts", result.join(""));
}

//Create aipowergrid_method.md
{
  const result = [];
  result.push("# Aipowergrid remote procedure calls/methods");
  result.push("\r\n[Home](README.md)");
  for (let key of keys) {
    if (!key) {
      continue;
    }
    const doc = docs[key];
    result.push("\r\n&nbsp;<br> &nbsp;<br/>");
    result.push("\r\n## " + key);
    result.push(`\r\n&nbsp;<br/>  ${doc} `);
  }
  require("fs").writeFileSync("./aipowergrid_methods.md", result.join(""));
}
