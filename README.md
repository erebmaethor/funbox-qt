This is the solution of a practical part of the qualification test for javascript developer vacancy in FunBox.

Production build deployed to https://smallmis.herokuapp.com/funbox/

Created by Mikhail Smolin.

Answers to Level1 questions are in the [Level1.md](Level1.md) file.

# Installation guide
1. clone this repository
2. cd into repo directory ```$ cd funbox-qt``` 
3. install the dependencies by, for example, ```$ npm i``` if you use npm
4. change "homepage" property in package.json if you want to deploy not to root
5. build a production bundle ```$ npm run build```
6. organize access to static bundle (that is in ```/build``` directory) with your favorite web server
7. enjoy!
