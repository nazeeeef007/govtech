<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
First, clone the repo 
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


For Case 1: 
Issue: The bug occurs because we are mutating the user object directly before calling setUser. In React, state updates are asynchronous, and mutating the state directly doesn't trigger a re-render. React relies on detecting changes in state by comparing the previous state and the updated state, so directly modifying the state won't trigger that re-render.

Improvement:  Instead of mutating the state directly, we use the setUser function to create a new object with the updated age property using the spread operator ({ ...prevUser, age: 26 }). This ensures that React properly detects the change and triggers a re-render.

For Case 2: 
Issue: The issue here is that the user object is being mutated directly. As in case study 1, React cannot detect this change because the reference to the users array doesn't change. This will not trigger a re-render.

Improvement:  Instead of mutating the user directly, we use map() to create a new array where we update the name of the user with the matching id. We return a new array each time, which allows React to detect the change and trigger a re-render. The spread operator ({ ...user, name: newName }) is used to create a new object with the updated name while preserving the rest of the properties of the user.

Why the Issues Are Problematic:
State mutation prevents React from detecting changes, which results in the UI not reflecting updates.
Direct mutation of objects or arrays in state breaks React's reactivity model and leads to unexpected behavior.
Improved Versions:
Always create new objects or arrays when updating state (e.g., using the spread operator).
Use functional state updates (setState(prevState => newState)) when the new state depends on the previous state to ensure React can track changes correctly.
