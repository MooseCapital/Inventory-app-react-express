## project name
go here to write a good readme https://readme.so/editor
```
put code in 3 backticks to be copyable
```
![react-badge.svg](public/images/react-badge.svg)
![vitejs-badge.svg](public/images/vitejs-badge.svg)

1. Create a new empty project in webstorm
2. go to the git tab on the bottom, and create a local repo. 
3. at the top toolbar click git -> git branches, now create a *test* branch. This is safer and best practice to only commit important updates on main.
4. go to git -> manage remotes, now add the ssh/http link to this repo
5. on the git tab at the bottom, click fetch remotes, this adds all the files locally
6. now right-click the most recent remote commit from the *testing* branch and "revert current branch to here".
7. we pick "accept theirs" to all files. Now remove any files left over and not in use
8. go back to git at the top and manage remotes, remove this repo from our new project
9. add the remote ssh branch link to our new project
10. Main and test local branches should be at the same commit, and we should only have one. 
11. for good practice, use "test" branch daily, then when we have important updates, use the main

## npm config run scripts
1. At the NPM config at the top, click "edit configurations", then add NPM from the list
2. make sure to add the "dev" and "preview script" each, to start a local server with 
1 click to the green arrow

## remove commits
when we have many commits and only want to show one, we have simply instructions
```jsx
rm -rf .git
```
```jsx
git init
```
```jsx
git add .
```
```jsx
git commit -m "Initial commit"
```


## gh-pages when finished

1)  Go into package.json -> in the scripts section add the code

```
"deploy": "gh-pages -d dist"
```


2) go to vite.config.js -> after plugins, write base with the current directory on Github

```
base: "/github project directory" 
 ```
3) Install gh-pages that lets us easily deploy to gh-pages branch
    
```
npm install gh-pages --save-dev
```

11) When we are ready to upload to GitHub pages do this
    
    ```
    npm run build
     ```

    ```
    npm run preview
     ```

    ```
    npm run deploy
    ```
If it ask for username, give GitHub username, and by "password" it means GitHub access token. If we get the error "github pages already exist"
. Go into node_modules folder -> .cache folder -> delete "gh-pages" -> redeploy



## router
we replaced Browser router with [Hashrouter](https://stackoverflow.com/questions/51974369/what-is-the-difference-between-hashrouter-and-browserrouter-in-react)
in Github pages, we reloaded /about page and it would give a 404! 

This is because, BrowserRouter syncs UI with url in the browser with HTML history API.

HashRouter uses the has part of our URL to sync, so when we refresh, in local host, this is taken care of because, we have local server!
but when on github pages, we have no server, only front-end. So when refreshing on another page, the server doesn't take it to the current 
/about page . Hashrouter handles this, for now, later I assume we use the server side to change routing pages


```jsx
<HashRouter>
        <App/>
</HashRouter>
```