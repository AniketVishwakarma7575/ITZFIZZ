export default function StatCard({ value, description, className }) {
  return <article className={`stat-card ${className}`}>
    <span className="stat-arrow" aria-hidden="true">↗</span>
    <strong>{value}</strong>
    <p>{description}</p>
  </article>;
}
