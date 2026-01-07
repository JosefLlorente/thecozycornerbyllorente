# **Performance Task: The Cozy Corner Website**
This task focuses on creating and deploying “The Cozy Corner” website using the given source codes and Vercel platform. The task also emphasizes modifying the website for good SEO practices and registering it with Google Search Console for proper indexing.
### **Task Objectives**

1. Create and deploy “The Cozy Corner” website using the given source codes.
2. Modify the source codes and implement good SEO practices.
3. Register and verify “The Cozy Corner” website in Google Search Console.

---

## **Step 1: Create and Deploy the Website**

**1. Set up GitHub repository and Next.js project**

* Open **GitHub Desktop** → Create a new repository:

```
thecozycornerbylastname
```

* Open terminal and check versions:

```bash
node -v
npm -v
git -v
```

* Create Next.js app:

```bash
npx create-next-app@latest .
```

* Follow prompts:

  * Customize settings → choose TypeScript: No / Yes
  * Linter: ESLint
  * React Compiler: No / Yes
  * Tailwind CSS: No / Yes
  * Use `src/` directory: No / Yes
  * Use App Router: Yes
  * Customize import alias: No / Yes

**2. Run the development server**

```bash
npm run dev
```

* Open browser → `http://localhost:3000` to see the website.

**3. Deploy to Vercel**

* Connect your GitHub repository to Vercel.
* Click **Deploy** → wait for the app to be live.
* Example URL:

```
https://thecozycornerbylastname.vercel.app
```

---

## **Step 2: Modify Source Codes and Add SEO**

**1. Add metadata for SEO**

* In `app/layout.js`, make sure you have:

```js
export const metadata = {
  title: "The Cozy Corner",
  description: "A cozy online bookstore with hand-picked recommendations",
};
```

**2. Use headings correctly**

* `h1` for homepage main title
* `h2` for section titles (About, Books, Contact)

**3. Add `alt` text for all images**

* Already done in `/books` and homepage (`alt="Book"` or `alt="The Cozy Corner"`)

**4. Add sitemap.xml for Google**

* Create `/public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://thecozycornerbylastname.vercel.app/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://thecozycornerbylastname.vercel.app/about</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://thecozycornerbylastname.vercel.app/books</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://thecozycornerbylastname.vercel.app/contact</loc>
    <priority>0.6</priority>
  </url>
</urlset>
```

* Optional: Add `/public/robots.txt`:

```
Sitemap: https://thecozycornerbylastname.vercel.app/sitemap.xml
User-agent: *
Disallow:
```

---

## **Step 3: Register and Verify Website in Google Search Console**

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add a new property → **URL prefix** → enter your Vercel URL:

```
https://thecozycornerbylastname.vercel.app
```

3. Verify ownership → **HTML tag method**:

* Copy the meta tag Google provides
* Add it to `<head>` in `app/layout.js`:

```jsx
<head>
  <meta name="google-site-verification" content="YOUR_GOOGLE_CODE" />
</head>
```

4. Deploy the app again to Vercel.

5. Click **Verify** in Google Search Console.

6. Submit sitemap:

* URL:

```
https://thecozycornerbylastname.vercel.app/sitemap.xml
```

7. Use **URL Inspection → Test Live URL** to confirm Google can read your sitemap.

---

### ✅ **Tips for Good SEO**

* Use descriptive page titles and meta descriptions.
* Use proper heading tags (`h1`, `h2`, `h3`).
* Add `alt` text for all images.
* Keep URLs simple and readable (`/books`, `/about`).
* Submit sitemap.xml to GSC.

---

## **Submission Requirements**

Please submit the following in our Blackboard submission bin:

**1. Clickable Links**

* GitHub Repository: Your full repository URL (e.g., `https://github.com/yourname/thecozycornerbylastname`)
* Live Vercel Deployment: The live website URL (e.g., `https://thecozycorner-demo1.vercel.app`)

**2. Screenshots (Proof of Work)**

* Desktop view of your web app
* Mobile view of your web app
* Screenshot showing your website verified in **Google Search Console**

**3. Reflection**

* What you learned while doing this task
* Challenges you encountered
* What you enjoyed or found interesting
