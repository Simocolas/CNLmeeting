interface Props {
  quote?: string;
}

export default function SectionTransition({ quote }: Props) {
  return (
    <div className="w-full" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <div className="mx-auto px-6 md:px-12" style={{ maxWidth: "1280px" }}>
        <div className="w-full" style={{ height: "1px", background: "rgba(77,212,224,0.18)" }} />
        {quote && (
          <p
            className="font-mono text-center mt-5"
            style={{ fontSize: "13px", color: "rgba(168,176,192,0.45)", fontStyle: "italic" }}
          >
            {quote}
          </p>
        )}
      </div>
    </div>
  );
}
