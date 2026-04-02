import { Helmet } from "react-helmet-async";

const BASE_URL = "https://micalculadora.es";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  schema?: object;
}

export default function SEOHead({ title, description, path, schema }: SEOHeadProps) {
  const canonicalUrl = `${BASE_URL}${path === "/" ? "" : path}/`.replace(/\/\/$/, "/");

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
