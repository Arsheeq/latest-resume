export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-var(--text-primary) mb-4">404</h1>
        <p className="text-xl text-var(--text-secondary)">Page Not Found</p>
        <a href="/" className="btn btn-primary mt-4 inline-block">
          Go Home
        </a>
      </div>
    </div>
  );
}
