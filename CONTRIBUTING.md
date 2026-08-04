# Contributing to cards-list

Thanks for adding your card. This guide walks through the whole thing, from fork to merged
pull request. It assumes you know a little HTML, CSS, and JavaScript, and nothing else.

Stuck at any point? [Open an issue](https://github.com/KarimHesham/cards-list/issues) and
ask. No question is too basic here — that's what this repo is for.

---

## What your card needs

1. **Your information** — profile photo, name, job title, company.
2. **A dark mode button** that switches the colors of the whole page *and* the card.
3. **Dynamic information** — the four values live in a JavaScript object and get written
   into the card by JavaScript, rather than being typed between the HTML tags.

Everything else — layout, colors, type, spacing — is your call.

## Before you start

- **One card per person.** If you already have a card in the repo, edit that file instead
  of adding another.
- **Your own information only.** Don't submit a card on someone else's behalf.
- **Vanilla only.** No frameworks, no libraries, no build step, no npm. Your file has to
  work when someone double-clicks it.
- **One file.** Markup, styles, and script all live in the same `.html` file.

---

## Steps

> [!IMPORTANT]
> **You cannot push a branch to this repository.** Only maintainers have write access, so
> pushing to `KarimHesham/cards-list` fails with *"You do not have access to push to this
> repository"*. That is normal and it is not a problem with your setup — step 1 gives you
> your own copy to push to instead. Every contributor works this way. Don't skip it.

### 1. Fork the repository

Click **Fork** at the top of the repo page. That creates
`https://github.com/YOUR-USERNAME/cards-list`, a copy under your own account that you *can*
push to. Then clone **your fork**, not this repo — check that your username is in the URL:

```bash
git clone https://github.com/YOUR-USERNAME/cards-list.git
cd cards-list
```

Or, with the GitHub CLI, in one step — this forks, clones, points `origin` at your fork,
and adds this repo as `upstream`:

```bash
gh repo fork KarimHesham/cards-list --clone
cd cards-list
```

Either way, confirm `origin` is yours before you go further:

```bash
git remote -v
```

The `origin` lines must contain **your** username. If they say `KarimHesham`, fix it now
using the first entry under [Troubleshooting](#troubleshooting).

### 2. Create your branch

Branch names are your GitHub username, lowercase:

```bash
git switch -c your-github-username
```

### 3. Create your file

Same name as your branch, with `.html` on the end, at the root of the repo — so a user
named `octocat` adds `octocat.html`. Using your username keeps every filename unique and
matches the photo URL in step 5.

### 4. Build the card

Write the structure and the styling first, and leave the four personal fields **empty** —
step 5 is what fills them in. Give each empty slot a data attribute naming what belongs
there, such as `data-field="name"`, so your script has something to find it by.

Design it however you like. It's your card.

### 5. Fill the card with JavaScript

Keep all four values together in a single object at the top of your script, then use it to
set the image's source and the text of each slot.

For the photo, GitHub already serves your avatar at `https://github.com/USERNAME.png` —
nothing to set up, just swap in your username. Give the image an `alt` describing who is
in it.

The test for this step: to change what the card shows, editing that one object should be
the only thing you need to do.

### 6. Add the dark mode button

Define every color once as a CSS custom property, then define a second set of values that
takes over when a `dark` class is present on `<body>`. Everything that has a color — the
page, the text, the card, its border, its shadow — should reference those properties
rather than hard-coded values. That way one class controls the whole page.

The button's click handler then only has to add or remove that single class. Update the
button's own label too, so it always says what it will do next: `Dark mode` while you're
in light, `Light mode` while you're in dark.

### 7. Check it

Open the file in your browser and confirm:

- The card shows your photo, name, job, and company.
- The button switches the page background, the text, **and** the card — not just one.
- The page still looks right on a narrow, phone-sized window.
- You can reach the button with <kbd>Tab</kbd> and see that it's focused.

### 8. Open a pull request

```bash
git add your-github-username.html
git commit -m "Add card for your-github-username"
git push -u origin your-github-username
```

Then open a pull request against `main` on this repo. GitHub will offer you a button right
after you push. Fill in the checklist in the pull request template and you're done.

---

## Troubleshooting

### "You do not have access to push to this repository"

Also appears as *"Permission to KarimHesham/cards-list.git denied"* or *"403"*. You are
pushing to this repository instead of to your fork. Check where `origin` points:

```bash
git remote -v
```

If those lines say `KarimHesham/cards-list`, you cloned this repo directly or skipped the
fork. Create the fork on GitHub with the **Fork** button, then repoint `origin` at your
copy and keep this repo as `upstream`:

```bash
git remote set-url origin https://github.com/YOUR-USERNAME/cards-list.git
git remote add upstream https://github.com/KarimHesham/cards-list.git
git push -u origin your-github-username
```

Nothing you have written is lost. Your commits live in your local clone; only the address
you are pushing them to changes.

### "Updates were rejected because the remote contains work that you do not have locally"

Your fork has fallen behind this repo. Fetch the latest `main` and replay your work on top
of it:

```bash
git fetch upstream
git rebase upstream/main
```

### My pull request shows other people's cards in the diff

Your branch is based on an outdated `main`, so the diff includes everything merged since.
Same fix as above: `git fetch upstream` then `git rebase upstream/main`.

### The photo doesn't load

Open `https://github.com/YOUR-USERNAME.png` in a browser tab. If it doesn't show your
avatar, the username in your script has a typo, or your GitHub account has no picture set.

---

## What reviewers check

- [ ] File is named `your-github-username.html` and sits at the root of the repo
- [ ] The pull request adds exactly one file
- [ ] Card shows profile photo, name, job title, and company
- [ ] All four values come from a JavaScript object, not from the HTML
- [ ] One button toggles light and dark for the whole page and the card
- [ ] No frameworks, libraries, CDN links, or build files
- [ ] Works on a phone-sized screen
- [ ] Button is reachable with the keyboard

Reviews are about the checklist, not about taste. Nobody will ask you to change your
colors.

## Bonus (optional)

None of these are required, but they're a good next step if the basics went quickly:

- Remember the chosen theme in `localStorage` so it survives a page reload.
- Start on dark if the visitor's system is set to dark, using `prefers-color-scheme`.
- Animate the color change with a CSS transition.
- Respect `prefers-reduced-motion` for anything you animate.

## License

By contributing you agree that your card is released under the repository's
[MIT License](LICENSE).
