---
layout: post
title:  "setting up GitHub"
description: This is setting up GitHub as a beginner. It is easy to follow. Here, we will use git bash to connect as well as in setting up ssh keys to connect with GitHub.
categories: Programming
---
Download [git here](https://git-scm.com/downloads).

### set up SSH
> "Using the SSH protocol, you can connect and authenticate to remote servers and services.
> With SSH keys, you can connect to GitHub without supplying your username or password at each visit."

GitHub has created an easy to follow guide [here](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh).

[checking for existing ssh](https://help.github.com/en/github/authenticating-to-github/checking-for-existing-ssh-keys) if it exists, then you're done.

Otherwise follow this:
1. [generating ssh key](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
2. [add ssh key to GitHub](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

When creating a new SSH, you will be prompted to enter a password. If you do enter a password, every time you commit, the password needs to be entered.
Therefore making your device and connection more secure. But it is up to you enter one or not.
### must do after adding ssh
Before committing, we must associate the device with our GitHub account. So open git bash and enter these commands:
[Read more here.](https://help.github.com/en/github/using-git/setting-your-username-in-git#setting-your-git-username-for-every-repository-on-your-computer)
```shell
$ git config --global user.name "Brad Burzon"
```

```bash
$ git config --global user.email "youremail@email.com"
```
***Important!***
**Make sure that the email is the same as the one that is used for your GitHub. Otherwise, the commits and other contributions won't show up on your profile.**
