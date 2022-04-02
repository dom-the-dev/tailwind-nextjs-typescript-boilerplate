import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title={'Home'}>
      <h1 className={`text-3xl font-bold underline`}>Hello World</h1>
      <p>
        This is a Tailwind/NextJS Typescript Boilerplate by <a href="https://twitter.com/Dom_TheDev">@Dom_TheDev</a>
      </p>
      <p>
        You can find this repo <a href="https://github.com/dom-the-dev">here</a>
      </p>
    </Layout>
  );
}
