import { useRouter } from "next/router";
import useShow from "../../hooks/useShow";

type Show = {
  id: number;
  name: string;
}

function Page() {
  const router = useRouter();
  const { showId } = router.query;

  const { show } = useShow(showId);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <pre>{JSON.stringify(show, null, 2)}</pre>
    </>
  );
}

export default Page;