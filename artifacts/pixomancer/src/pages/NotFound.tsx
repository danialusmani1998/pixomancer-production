import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow font-mono">// 404</p>
        <h1 className="mt-4 font-display text-7xl font-bold text-slate-deep">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-charcoal">Page not found</h2>
        <p className="mt-2 text-sm text-charcoal">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-primary">
            Go home →
          </Link>
        </div>
      </div>
    </div>
  );
}
