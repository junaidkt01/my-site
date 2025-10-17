export default function JsonLd({ data }: { data: any }) {
  return (
    <script
      key="ld-json"
      id="ld-json"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
