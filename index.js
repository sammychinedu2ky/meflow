const github = require('@actions/github');
const core = require('@actions/core');
let event = core.getInput(`GITHUB_EVENT_PATH`)
let payload = core.getInput('content')
const fs = require('fs');
async function run() {
    // This should be a token with access to your repository scoped in as a secret.
    // The YML workflow will need to set myToken with the GitHub Secret Token
    // myToken: ${{ secrets.GITHUB_TOKEN }}
    // https://help.github.com/en/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token#about-the-github_token-secret
    const myToken = core.getInput('myToken');

  //  const octokit = github.getOctokit(myToken)

    // You can also pass in additional options as a second parameter to getOctokit
    // const octokit = github.getOctokit(myToken, {userAgent: "MyActionVersion1"});

    // const { data: pullRequest } = await octokit.pulls.get({
    //     owner: 'octokit',
    //     repo: 'rest.js',
    //     pull_number: 123,
    //     mediaType: {
    //       format: 'diff'
    //     }
    // });
   
    function print(path) {
        core.info('sammyboydfa')
        core.info(payload.length)
        const files = fs.readdirSync(path);
        for (const file of files) {
         
        core.info(file);
      }
    }
    print('./')
    core.info('sammyboy')
    
  
    
  
}

run();