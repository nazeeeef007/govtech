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


The reason for the issue in Case 1 is that we are altering the user object before doing setUser.  A direct state change in React does not result in a re-render because state changes are asynchronous.  Directly changing the state won't cause that re-render because React depends on comparing the old state with the current state to detect changes in state.

 Improvement: We utilise the setUser function to generate a new object with the modified age attribute using the spread operator ({...prevUser, age: 26 }) rather than simply changing the state.  This guarantees that React correctly recognises the modification and initiates a re-render.


The problem with Case 2 is that the user object is being changed directly.  Since the reference to the users array remains unchanged, React is unable to recognise this change, just like in case study 1.  A re-render won't be triggered by this.

 Improvement: We use map() to generate a new array where we change the user's name with the matching id, rather than changing the user directly.  Because we always return a fresh array, React is able to recognise the change and initiate a re-render.  To generate a new object with the revised name while maintaining the remaining user properties, use the spread operator ({...user, name: newName }).


Why the Issues Are Problematic:
State mutation prevents React from detecting changes, which results in the UI not reflecting updates.
Direct mutation of objects or arrays in state breaks React's reactivity model and leads to unexpected behavior.
Improved Versions:
Always create new objects or arrays when updating state (e.g., using the spread operator).
Use functional state updates (setState(prevState => newState)) when the new state depends on the previous state to ensure React can track changes correctly.
