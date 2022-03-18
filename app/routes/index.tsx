import RemixSvg from '~/img/1200x627 - Lightsvg.svg';

const Index = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <h1 className="font-bold">Welcome to</h1>
        <img src={RemixSvg} alt="Remix" className="max-h-32" />
      </div>

      <ul className="list-disc text-lg">
        <li>
          <a
            className="text-sky-700 hover:text-sky-600"
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-sky-700 hover:text-sky-600"
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a className="text-sky-700 hover:text-sky-600" target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Index;
