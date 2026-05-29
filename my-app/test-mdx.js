const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const fullPath = path.join(process.cwd(), 'content/blog', 'why-jamshedpur-business-needs-website-2025.mdx');
const fileContents = fs.readFileSync(fullPath, 'utf8');
const { data, content } = matter(fileContents);

console.log("DATA:", data);
console.log("CONTENT LENGTH:", content.length);
console.log("CONTENT START:", content.substring(0, 50));
