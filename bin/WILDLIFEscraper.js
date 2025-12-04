import * as cheerio from 'cheerio';
import fs from 'fs';
import md5 from 'md5';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let cacheDir = import.meta.dirname + '/../cache';

if(!fs.existsSync(cacheDir)){
    fs.mkdirSync(cacheDir);
}

const BASE_URL = 'https://www.wildelifecomic.com';
let url = BASE_URL + '/comic';
for(let i = 1536; i<1546; i++){
    let body;
    if(fs.existsSync(cacheDir + `/${i}.html`)){
        body = fs.readFileSync(cacheDir + `/${i}.html`);
    } else {
        await sleep(1000);    
        let res = await fetch(url + `/${i}`);    
        body = await res.text();
        fs.writeFileSync(cacheDir + `/${i}.html`, body);
    }

    const $ = cheerio.load(body);
    let img = $('#cc-comicbody img');
    console.log( img.attr('src'));
    console.log(img.attr('title'));
}