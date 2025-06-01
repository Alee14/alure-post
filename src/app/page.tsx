export default function Home() {
  return (
    <div>
      <h1>Track a post</h1>
      <form action="/track">
        <input type="text" name="trackingNumber" placeholder="Tracking Number" />
        <button type="submit">Track</button>
      </form>
    </div>
  );
}
