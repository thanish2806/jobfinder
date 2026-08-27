const lessonsData = [
  {
    number: "01",
    title: "Version Control Fundamentals",
    lessons: [
      {
        title: "Why Version Control Matters",
        lesson: "Lesson 01",
        duration: "40 Minutes",
        icon: "/assets/git-icon1.svg",
        content:
          "Understand the importance of version control systems in modern software development.\n\n📌 Topics:\n- Challenges of manual backups\n- Benefits of version control: collaboration, traceability, rollback\n- Centralized vs distributed systems\n\n🧠 Insight: Git is a distributed VCS, which means every developer has a full copy of the project.\n\n🔗 Learn more:\n- https://www.atlassian.com/git/tutorials/what-is-version-control",
      },
      {
        title: "Getting Started with Git",
        lesson: "Lesson 02",
        duration: "50 Minutes",
        icon: "/assets/git-icon2.svg",
        content:
          'Install Git and learn how to create your first repository.\n\n🔧 Tasks:\n- Installing Git (Windows/Mac/Linux)\n- `git init`, `git status`, `git add`, `git commit`\n- File staging vs committing\n\n📁 Example:\n```bash\ngit init\n git add .\n git commit -m "Initial commit"\n```\n\n🔗 Docs:\n- https://git-scm.com/book/en/v2/Getting-Started-Installing-Git',
      },
      {
        title: "Understanding the Git Workflow",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/git-icon3.svg",
        content:
          "Master the typical Git workflow and lifecycle of a change.\n\n📘 Concepts:\n- Working directory, staging area, local repo\n- Commit history: `git log`, `git diff`\n- Undoing mistakes: `git checkout`, `git reset`, `git revert`\n\n🔧 Practice:\n- Make and revert changes\n- Visualize commits using Git GUI\n\n🔗 Practice:\n- https://learngitbranching.js.org/",
      },
    ],
  },
  {
    number: "02",
    title: "Branching & Merging",
    lessons: [
      {
        title: "Working with Branches",
        lesson: "Lesson 01",
        duration: "50 Minutes",
        icon: "/assets/git-icon4.svg",
        content:
          "Branches let you isolate features and work in parallel.\n\n🌿 Learn:\n- Creating, switching, and deleting branches\n- `git branch`, `git checkout`, `git switch`\n- Naming conventions (e.g., `feature/`, `bugfix/`, `release/`)\n\n🔧 Example:\n```bash\ngit checkout -b feature/login\n```\n\n🔗 Guide:\n- https://www.atlassian.com/git/tutorials/using-branches",
      },
      {
        title: "Merging & Conflict Resolution",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/git-icon5.svg",
        content:
          "Learn how to merge changes and handle conflicts.\n\n🔀 Topics:\n- Fast-forward vs 3-way merge\n- `git merge`, `git pull`\n- Resolving conflicts manually\n\n🛠 Tools:\n- VSCode merge tool\n- `git mergetool`\n\n🔗 Resource:\n- https://www.git-tower.com/learn/git/ebook/en/command-line/merging",
      },
      {
        title: "Rebasing Explained",
        lesson: "Lesson 03",
        duration: "50 Minutes",
        icon: "/assets/git-icon6.svg",
        content:
          "Understand how `rebase` works and how it differs from `merge`.\n\n📘 Use cases:\n- Clean commit history\n- Avoiding merge bubbles\n\n💡 Caution:\n- Never rebase public branches!\n\n🔧 Command:\n```bash\ngit rebase main\n```\n\n🔗 Deep Dive:\n- https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase",
      },
    ],
  },
  {
    number: "03",
    title: "Branching & Merging",
    lessons: [
      {
        title: "Working with Branches",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/git-icon5.svg",
        content: `Branches allow parallel development without affecting the main codebase.

🔧 Commands:
- \`git branch <branch-name>\`
- \`git checkout -b <branch-name>\`

📌 Concepts:
- Feature branching
- Isolating experiments
- Keeping the main branch stable

🔗 Read more:
- https://www.atlassian.com/git/tutorials/using-branches`,
      },
      {
        title: "Merging & Conflict Resolution",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/git-icon6.svg",
        content: `Learn how to combine code from different branches and handle merge conflicts.

🛠️ Commands:
- \`git merge <branch>\`
- \`git diff\`, \`git status\`, and \`git log\` for debugging

⚠️ Conflict Resolution:
- Understand HEAD vs incoming changes
- Use VSCode, GitKraken, or CLI tools to resolve

🔗 Guide:
- https://www.git-tower.com/learn/git/ebook/en/command-line/advanced-topics/merge-conflicts`,
      },
      {
        title: "Rebasing vs. Merging",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/git-icon7.svg",
        content: `Rebasing offers a linear history, while merging preserves the timeline.

🔍 Compare:
- \`git merge\` – Keeps full history
- \`git rebase\` – Cleaner history, use with caution

💡 Use Case:
- Rebase feature branches before merging
- Avoid rebasing shared branches

🔗 Deep dive:
- https://www.git-scm.com/book/en/v2/Git-Branching-Rebasing`,
      },
    ],
  },
  {
    number: "04",
    title: "Collaborating with GitHub",
    lessons: [
      {
        title: "Cloning & Forking Repositories",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/git-icon8.svg",
        content: `Start collaborating with open source or team projects.

🔁 Actions:
- Clone: \`git clone <repo-url>\`
- Fork: Duplicate a repo under your account to propose changes

📦 Use Case:
- Contribute to open-source projects
- Work on personal copies without affecting the original

🔗 Learn More:
- https://docs.github.com/en/get-started/quickstart/fork-a-repo`,
      },
      {
        title: "Pull Requests & Code Reviews",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/git-icon9.svg",
        content: `Contribute to projects via Pull Requests (PRs) and peer reviews.

📘 Steps:
- Push your branch
- Open a PR on GitHub
- Tag reviewers, describe changes, and wait for approval

🤝 Benefits:
- Enforces code quality
- Promotes collaboration

🔗 Guide:
- https://opensource.guide/how-to-contribute/`,
      },
      {
        title: "Issues, Projects, and Discussions",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/git-icon10.svg",
        content: `GitHub isn't just for code — it's a full project management platform.

🛠️ Features:
- Issues: Report bugs or request features
- Projects: Kanban boards for planning
- Discussions: Collaborate asynchronously

💡 Tip:
- Use labels, milestones, and assignees for better organization

🔗 Docs:
- https://docs.github.com/en/issues/tracking-your-work-with-issues`,
      },
    ],
  },
  {
    number: "05",
    title: "Advanced Git Techniques",
    lessons: [
      {
        title: "Stashing & Cleaning",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/git-icon11.svg",
        content: `Handle uncommitted changes effectively during context switching.

📦 Stash:
- \`git stash\` to temporarily store work
- \`git stash pop\` to retrieve it

🧹 Clean:
- \`git clean -f\` removes untracked files

🔗 Reference:
- https://www.git-scm.com/docs/git-stash`,
      },
      {
        title: "Amending & Reverting Commits",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/git-icon12.svg",
        content: `Fix or reverse changes without rewriting history blindly.

🔄 Commands:
- \`git commit --amend\` – Modify last commit
- \`git revert <commit>\` – Undo safely
- \`git reset\` – Caution: Alters history

🔗 Learn More:
- https://www.git-scm.com/docs/git-revert`,
      },
      {
        title: "Using Git Hooks & CI Integrations",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/git-icon13.svg",
        content: `Automate tasks and enforce standards with Git hooks and CI tools.

⚙️ Hooks:
- Pre-commit: Linting, tests
- Post-merge: Auto-installs

🔗 Tools:
- Husky (JS), Pre-commit (Python)
- GitHub Actions for CI/CD pipelines

🔗 Explore:
- https://docs.github.com/en/actions
- https://typicode.github.io/husky/#/`,
      },
    ],
  },
];

export default lessonsData;
