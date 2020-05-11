# git commands

git init
git status
git add
git commit -m ""
git log

#setting up repos
git remote add origin "repo"
git remote
git remote -v

#pusing code
git push -u origin master 


# to set up ssh

ls -a ~/.ssh

ssh-keygen -t rsa -b 4096 -C "pallavtripathi93@gmail.com"

eval "$(ssh-agent -s)"

ssh-add ~/.ssh/id_rsa

clip < ~/.ssh/id_rsa.pub


#heroku 
heroku login
heroku create "app name"
git push heroku master



