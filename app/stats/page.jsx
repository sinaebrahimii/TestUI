import axios from "axios";
const getData = async () => {
  const res = await axios.get("https://our-test-api.iran.liara.run");
  const data = await res.json;
  return res.data;
};
const Stat = async () => {
  const data = await getData();
  console.log(data);
  let cl = "";
  if (data.toggle) {
    cl = "bg-green-500";
  } else {
    cl = "bg-red-500";
  }
  return (
    <main className=" my-5 flex justify-center">
      <div className=" flex justify-center items-center gap-2 bg-zinc-800 border border-zinc-600 rounded-md hover:bg-zinc-600 p-5">
        <h3 className=" text-white">{data.message || "wait"}</h3>
        <div className={"w-4 h-4 rounded-full " + cl}></div>
      </div>
    </main>
  );
};

export default Stat;
