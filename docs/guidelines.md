## User Stories
In order to organize tasks, we have broken up features centered around the user experience into different **user stories**. These storied can be found in a project management board built with a product _Jira_, or more specifically [by clicking this link](https://team10-cse110.atlassian.net/jira/software/projects/TEAM10/boards/2). Each story will have a short description when clicked on, and will also be listed as an **issue** in Github.

#### Story Assignment
We will be following a **pick-your-own** style of assignment, where you can assign yourself to a story you want to contribute to, whether this is done individually or with another team member. Make sure to assign yourself to the story on the Jira board so the team knows.

## Branches
For any changes you make to the main branch, you will have to create your own **working branch** where you will make any changes you need to make, and then you will *need* to create a **pull request** in order to merge your working branch to the main branch.

#### Pull Requests
The repository WILL NOT let you push changes directly to the main branch. This is in order to avoid unapproved changes. Once you have made your changes on a working branch, create a **pull request** detailing what changes you made and **communicate to the team via Slack** that you need to have a pull request approved, at which point another team member can review your changes and either approve the PR or suggest some further changes.

After your PR has been approved and your working branch has been merged, make sure to **COMMUNICATE AGAIN** to the team that new changes have been pushed.

**IMPORTANT:** When working on your working branch, make sure to keep pulling the latest changes to avoid merge conflicts, especially if someone has communicated that they have just pushed new changes. If you have edits on your working branch, and are pulling new changes, look into [git stash](https://www.atlassian.com/git/tutorials/saving-changes/git-stash). There should be a stash option in most GUIs. 

#### Naming Convention of Branches
To keep track of things, start the name of the branch with your name, followed by a dash and the task your branch is working on, such as the following: `anish-add-dark-mode`.