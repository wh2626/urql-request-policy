import {
  ExampleQueryDocument,
  ExampleQueryQuery,
} from "@/graphql/example.generated";
import { createClient } from "urql";

const client = createClient({
  url: "http://localhost:4000/graphql",
});

export const getServerSideProps = async () => {
  const { data } = await client
    .query(
      ExampleQueryDocument,
      {
        // variables
      },
      {
        // requestPolicy
        requestPolicy: "cache-only",
      }
    )
    .toPromise();
  return {
    props: {
      data: data ?? {},
    },
  };
};

type Props = {
  data: ExampleQueryQuery;
};
const Home = (props: Props) => {
  if (!props.data) return <div>Not Found</div>;
  return (
    <div className="wrapper">
      <h1>Furniture</h1>
      <ul className="sample-list">
        {props.data.topProducts?.map((product) => (
          <li key={product?.name}>{product?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
