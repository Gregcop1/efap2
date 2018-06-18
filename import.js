const fs = require('fs');
const git = require('simple-git');
const request = require('request');
const config = require('./src/config');
const params = process.argv.slice(2)
  .reduce((last, current) => {
    const [key, value] = current.split('=');
    return {...last, [key]: value};
  }, {});

if (!params.group) {
  throw new Error('You should pass a group as param.');
}

const group = config.groups.find(item => +params.group === +item.id);

if (undefined === group) {
  throw new Error(`Can't find group ${params.group} in group list.`);
}

const branch = `groupe-${params.group}`;
const init = () => {
  console.log(`Fetch ${config.repo}`);
  git().fetch(config.repo, config.devBranch, afterFetch);
};

const afterFetch = () => {
  console.log(`Create branch ${branch}`);
  git().checkoutBranch(branch, `${config.repo}/${config.devBranch}`, afterCheckoutBranch);
};

const afterCheckoutBranch = () => {
  const penUrl = `https://codepen.io/${group.pen}`;

  // wget pen files
  let fetchCount = 0;
  config.extensions.forEach(ext => {
    console.log(`Try to import ${penUrl}.${ext}`)
    request(`${penUrl}.${ext}`, (error, response, body) => {
      if (error) {
        console.error(error);
      }
      fs.writeFileSync(`${config.filePath}/${branch}.${ext}`, body);
      if (++fetchCount === config.extensions.length) {
        afterImport();
      }
    })
  });
};

const afterImport = () => {
  console.log('Commit changes');
  git().commit(`${branch} update`, `${config.filePath}/.`, afterCommit);
};

const afterCommit = () => {
  console.log(`Push to ${config.repo}`);
  git().push(config.repo, branch, {'--force': true});
};

init();
