export default function Spacer() {
  return (
    <>
      <style href="spacer" precedence="component">{`
        .spacer {
          height: 88px;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        @media (max-width: 1024px) {
          .spacer { height: 48px; }
        }
      `}</style>
      <section className="spacer" />
    </>
  )
}