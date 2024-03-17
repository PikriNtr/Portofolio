# Portofolio

This project is a React application built with Next.js and deployed on Vercel. It uses the Lucide React library for icons and a custom `MaxWidthWrapper` component to control the layout of the content.

## Components

### MaxWidthWrapper

This component is used to wrap the content and control its maximum width.

### Icons

Icons are imported from the `lucide-react` library. These icons are used in the `perks` array to visually represent different categories.

## Data Structure

### perks

This is an array of objects, where each object represents a category of information. Each object has a `name`, an `Icon`, and a `description`.

## Main Function

### Home

This is the main function of the application. It returns a JSX element that represents the layout of the page. The layout includes a header, a section for displaying the `perks`, and a footer.

The `perks` are mapped to individual components, each containing an icon, a title (the `name`), and a description.

## Excerpt Explanation

The provided excerpt is a section of the `Home` function. It starts with the closing tag of a `MaxWidthWrapper` component, then opens a new `section` element. Inside this section, there's another `MaxWidthWrapper` component that contains a `div` with a grid layout.

The `perks` array is mapped to individual components inside this grid. Each component is a `div` with a key of `perk.name`. Inside this `div`, there's another `div` that contains the `perk.Icon` inside a circle, and a `div` that contains the `perk.name` and `perk.description`.

## Styling

The application uses Tailwind CSS for styling. Class names are used to apply styles to the elements.

## Note

This is a general overview of the code structure. The actual values and text content used in the project are not included in this description.



## Getting Started

First, run the development server:

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
