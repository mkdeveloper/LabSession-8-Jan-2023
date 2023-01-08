import { useRouter } from "next/router";
export default function () {
  const router = useRouter();
  return (
    <>
      <div>This is the first Post</div>
      <br />
      <button type="button" onClick={() => router.push("/post/address")}>
        Address
      </button>
    </>
  );
}
