export default async function Page() {

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("all blog posts");
    }, 2000);
  });

  return <h1>My demo Page</h1>;
}
