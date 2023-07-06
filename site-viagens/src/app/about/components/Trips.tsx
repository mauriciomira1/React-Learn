import { prisma } from "@/lib/prisma";

const getTrips = async () => {
  const trips = await prisma.trip.findMany({});

  return trips;
};

const Trips = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 0,
    },
  }).then((res) => res.json());

  return (
    <div>
      {data.map((item: [{}]) => (
        <p key={item.id}>Título: {item.title}</p>
      ))}
    </div>
  );
};

export default Trips;
