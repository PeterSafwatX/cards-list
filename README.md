# cards-list

A collection of personal cards. Everyone adds one page to this repo: a single HTML file
showing a card with their own information, and a button to switch the page between light
and dark.

Vanilla HTML, CSS, and JavaScript only. No frameworks, no libraries, no build step — you
open the `.html` file in a browser and it works.

---

## The task

Build a page with:

1. **A card** showing your personal information — profile photo, name, job title, company.
2. **A dark mode button** that switches the colors of the whole page *and* the card.
3. **Dynamic information** — your details live in a JavaScript object and get written into
   the card by JavaScript. Nothing personal is typed between the HTML tags.
4. **Your own branch** — all of it committed to a branch named after you.

---

## Steps

### 1. Create your branch

Branch names are your full name, lowercase, with a hyphen between the words — so
`kareem-hesham`. Branch off an up-to-date `main`:

```bash
git switch main
git pull
git switch -c firstname-lastname
```

### 2. Create your file

Same name as your branch, with `.html` on the end, at the root of the repo — so
`kareem-hesham.html`. One file holds everything: the markup, the styles, and the script.

### 3. Build the card

Write the structure and the styling first, and leave the four personal fields **empty** —
step 4 is what fills them in. Give each empty slot a data attribute naming what belongs
there, such as `data-field="name"`, so your script has something to find it by.

Design it however you like. It's your card.

### 4. Fill the card with JavaScript

Keep all four values together in a single object at the top of your script, then use it to
set the image's source and the text of each slot.

For the photo, GitHub already serves your avatar at `https://github.com/USERNAME.png` —
nothing to set up, just swap in your username. Give the image an `alt` describing who is
in it.

The test for this step: to change what the card shows, editing that one object should be
the only thing you need to do.

### 5. Add the dark mode button

Define every color once as a CSS custom property, then define a second set of values that
takes over when a `dark` class is present on `<body>`. Everything that has a color —
the page, the text, the card, its border, its shadow — should reference those properties
rather than hard-coded values. That way one class controls the whole page.

The button's click handler then only has to add or remove that single class. Update the
button's own label too, so it always says what it will do next: `Dark mode` while you're
in light, `Light mode` while you're in dark.

### 6. Check it

Open the file in your browser and confirm:

- The card shows your photo, name, job, and company.
- The button switches the page background, the text, **and** the card — not just one.
- The page still looks right on a narrow, phone-sized window.
- You can reach the button with <kbd>Tab</kbd> and see that it's focused.

### 7. Push it

```bash
git add firstname-lastname.html
git commit -m "Add card for Firstname Lastname"
git push -u origin firstname-lastname
```

Then open a pull request into `main`.

---

## Definition of done

- [ ] Branch named `firstname-lastname`
- [ ] File named `firstname-lastname.html` at the root of the repo
- [ ] Card shows profile photo, name, job title, and company
- [ ] All four values come from a JavaScript object, not from the HTML
- [ ] One button toggles light and dark for the whole page and the card
- [ ] Works on a phone-sized screen
- [ ] Button is reachable with the keyboard

## Bonus (optional)

- Remember the chosen theme in `localStorage` so it survives a page reload.
- Start on dark if the visitor's system is set to dark, using `prefers-color-scheme`.
- Animate the color change with a CSS transition.

---

## Example

The `kareem-hesham` branch has a finished version you can look at if you get stuck:

```bash
git switch kareem-hesham
open kareem-hesham.html
```
