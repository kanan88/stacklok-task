import Tasks from "./Tasks";
import MiniProfile from "./MiniProfile";

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      {/* Tasks (left) */}
      <section className="md:col-span-2">
        <Tasks />
      </section>

      {/* Mini profile (Right) */}
      <section className="hidden md:inline-grid md:col-span-1">
        <div className="fixed w-[380px]">
          <MiniProfile />
        </div>
      </section>
    </main>
  );
};

export default Feed;
