import { Title } from "../components/Title";
import { EventModel } from "../models";
import { EventCard } from "../components/EventCard";

export default function HomePage() {
  const events: EventModel[] = [
    {
      id: "1",
      name: "Desenvolvimento de Software",
      date: "2022-01-01T00:00:00.000Z",
      price: 100,
      rating: 4,
      image_url:
        "https://images.unsplash.com/photo-1640000000000-0000000000000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      location: "São Paulo, SP",
      organization: "TDC",
    },
    {
      id: "2",
      name: "Desenvolvimento de Software",
      date: "2022-01-01T00:00:00.000Z",
      price: 100,
      rating: 4,
      image_url:
        "https://images.unsplash.com/photo-1640000000000-0000000000000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      location: "São Paulo, SP",
      organization: "TDC",
    },
    {
      id: "3",
      name: "Desenvolvimento de Software",
      date: "2022-01-01T00:00:00.000Z",
      price: 100,
      rating: 4,
      image_url:
        "https://images.unsplash.com/photo-1640000000000-0000000000000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      location: "São Paulo, SP",
      organization: "TDC",
    },
  ];
  return (
    <main className="mt-10 flex flex-col">
      <Title>Eventos Disponíveis</Title>
      <div className="mt-8 sm:grid sm:grid-cols-auto-fit-cards flex flex-wrap justify-center gap-x-2 gap-y-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}
