import { useRouter } from "next/router";

import peopleJson from "../../libs/people-data";

const Details = () => {
  const router = useRouter();

  const handleOnClick = (guid) => {
    router.push(`/people/${guid}`);
  };

  return (
    <>
      <main>
        <>
          {peopleJson.map(({ guid, name }) => {
            return (
              <h2 key={guid} onClick={() => handleOnClick(guid)}>
                {name}
              </h2>
            );
          })}
        </>
      </main>
    </>
  );
};

export default Details;
