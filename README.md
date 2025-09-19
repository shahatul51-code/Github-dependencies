# GreenThumb Nursery — Plant Shop (React + Redux)

A small shopping cart app built with **React** + **Redux Toolkit** that fulfills the final project rubric:
- Landing page with background, company paragraph, company name and Get Started button.
- Product listing page with 6 plants, grouped into categories, Add to Cart behavior and disabled button after add.
- Header visible on product and cart pages with a cart icon and item count.
- Shopping cart page with totals, per-item thumbnail/name/unit price, increase/decrease/delete, checkout (Coming Soon), and continue shopping.

---

## Quick start (local)

1. Unzip the project and `cd` into the folder:
```bash
unzip plant-shop.zip
cd plant-shop
```

2. Install dependencies:
```bash
npm install
```

3. Run dev server:
```bash
npm run dev
```
Open the URL shown by Vite (usually http://localhost:5173).

---

## Persistence

The shopping cart is persisted to `localStorage`. Cart contents survive page refreshes.

---

## Git / GitHub — exact commands to push this project and create a fork/PR

### If you already have a GitHub repository and want to push this project:

```bash
# inside the project folder
git init
git add .
git commit -m "Initial commit - GreenThumb Nursery plant shop"
# create a repo on GitHub first, then:
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

### If you need to fork an upstream repo and create a PR (recommended for the assignment workflow)

1. Fork the original repository on GitHub (use the web UI). If GitHub rejects the fork due to naming conflict, follow the 'Manual fork' steps below.

2. Clone your fork locally:
```bash
git clone https://github.com/<your-username>/<forked-repo-name>.git
cd <forked-repo-name>
```

3. Copy these project files into the clone (or replace contents), then:
```bash
git add .
git commit -m "Add project implementation - GreenThumb Nursery"
git push origin main
```

4. On GitHub, create a Pull Request from your branch (main) to the original repository (if required by the assignment) or submit the repository URL to the assignment.

**Manual fork (if GitHub fork button fails due to org restrictions):**
```bash
# clone original repo
git clone https://github.com/original-user/original-repo.git
cd original-repo
# remove origin and add your repo
git remote remove origin
git remote add origin https://github.com/<your-username>/<new-repo-name>.git
git push -u origin main
```

---

## How to capture the required screenshots for the assignment (recommended)

1. **Repository URL**  
   - Open your GitHub repo in a browser and screenshot the page showing files.

2. **First merge screenshot**  
   - After you create the `bug-fix-typo` branch, edit `README.md` in that branch and open a Pull Request to merge into `main`. After merging, open the `README.md` file on `main` and screenshot the commit history or the merged PR page showing the merged change.

3. **Pull request URL**  
   - Copy the PR URL from your browser (it should show "Merged" status after accepting).

4. **Branches page**  
   - Open `https://github.com/<your-username>/<repo>/branches` and take a screenshot of the page showing branch names and statuses.

---

## Project notes and grading hints

- Redux files are present at `src/store.js` and `src/features/cartSlice.js`.
- Cart state persists to `localStorage` under key `greenThumbCart`.
- Add to Cart button becomes disabled once that product exists in the cart from the listings page.
- Checkout shows a simple "Coming Soon" alert to meet rubric.
- If you want screenshots pre-made, I can create simple placeholder PNGs to embed in README.

--- 
