NVM is distributed using github - you can find installation instructions for the latest version here. You'll need to run a command that looks like this:

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
Once that step is complete, you'll need to reload your ~/.zshrc file:

source ~/.zshrc
Now, you can install Node using nvm:

$ nvm install node
$ nvm use node

If you want to save yourself the hassle of checking for missing semicolons, a tool like Prettier can help to automatically add them where they're needed (and also make sure your code is properly formatted). To run it so it automatically formats JS files, you can run the following in any project directory:
npx prettier --write .
